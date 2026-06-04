# HtmlDocument entity test

require "minitest/autorun"
require "json"
require_relative "../HtmlCreator_sdk"
require_relative "runner"

class HtmlDocumentEntityTest < Minitest::Test
  def test_create_instance
    testsdk = HtmlCreatorSDK.test(nil, nil)
    ent = testsdk.HtmlDocument(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = html_document_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "html_document." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set HTMLCREATOR_TEST_HTML_DOCUMENT_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # CREATE
    html_document_ref01_ent = client.HtmlDocument(nil)
    html_document_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.html_document"), "html_document_ref01"))

    html_document_ref01_data_result, err = html_document_ref01_ent.create(html_document_ref01_data, nil)
    assert_nil err
    html_document_ref01_data = Helpers.to_map(html_document_ref01_data_result)
    assert !html_document_ref01_data.nil?

  end
end

def html_document_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "html_document", "HtmlDocumentTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = HtmlCreatorSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["html_document01", "html_document02", "html_document03"],
    {
      "`$PACK`" => ["", {
        "`$KEY`" => "`$COPY`",
        "`$VAL`" => ["`$FORMAT`", "upper", "`$COPY`"],
      }],
    }
  )

  # Detect ENTID env override before envOverride consumes it. When live
  # mode is on without a real override, the basic test runs against synthetic
  # IDs from the fixture and 4xx's. Surface this so the test can skip.
  entid_env_raw = ENV["HTMLCREATOR_TEST_HTML_DOCUMENT_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "HTMLCREATOR_TEST_HTML_DOCUMENT_ENTID" => idmap,
    "HTMLCREATOR_TEST_LIVE" => "FALSE",
    "HTMLCREATOR_TEST_EXPLAIN" => "FALSE",
  })

  idmap_resolved = Helpers.to_map(
    env["HTMLCREATOR_TEST_HTML_DOCUMENT_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
  end

  if env["HTMLCREATOR_TEST_LIVE"] == "TRUE"
    merged_opts = Vs.merge([
      {
      },
      extra || {},
    ])
    client = HtmlCreatorSDK.new(Helpers.to_map(merged_opts))
  end

  live = env["HTMLCREATOR_TEST_LIVE"] == "TRUE"
  {
    client: client,
    data: entity_data,
    idmap: idmap_resolved,
    env: env,
    explain: env["HTMLCREATOR_TEST_EXPLAIN"] == "TRUE",
    live: live,
    synthetic_only: live && !idmap_overridden,
    now: (Time.now.to_f * 1000).to_i,
  }
end
