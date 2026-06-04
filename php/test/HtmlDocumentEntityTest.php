<?php
declare(strict_types=1);

// HtmlDocument entity test

require_once __DIR__ . '/../htmlcreator_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class HtmlDocumentEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = HtmlCreatorSDK::test(null, null);
        $ent = $testsdk->HtmlDocument(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = html_document_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["create"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "html_document." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set HTMLCREATOR_TEST_HTML_DOCUMENT_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // CREATE
        $html_document_ref01_ent = $client->HtmlDocument(null);
        $html_document_ref01_data = Helpers::to_map(Vs::getprop(
            Vs::getpath($setup["data"], "new.html_document"), "html_document_ref01"));

        [$html_document_ref01_data_result, $err] = $html_document_ref01_ent->create($html_document_ref01_data, null);
        $this->assertNull($err);
        $html_document_ref01_data = Helpers::to_map($html_document_ref01_data_result);
        $this->assertNotNull($html_document_ref01_data);

    }
}

function html_document_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/html_document/HtmlDocumentTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = HtmlCreatorSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["html_document01", "html_document02", "html_document03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("HTMLCREATOR_TEST_HTML_DOCUMENT_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "HTMLCREATOR_TEST_HTML_DOCUMENT_ENTID" => $idmap,
        "HTMLCREATOR_TEST_LIVE" => "FALSE",
        "HTMLCREATOR_TEST_EXPLAIN" => "FALSE",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["HTMLCREATOR_TEST_HTML_DOCUMENT_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
    }

    if ($env["HTMLCREATOR_TEST_LIVE"] === "TRUE") {
        $merged_opts = Vs::merge([
            [
            ],
            $extra ?? [],
        ]);
        $client = new HtmlCreatorSDK(Helpers::to_map($merged_opts));
    }

    $live = $env["HTMLCREATOR_TEST_LIVE"] === "TRUE";
    return [
        "client" => $client,
        "data" => $entity_data,
        "idmap" => $idmap_resolved,
        "env" => $env,
        "explain" => $env["HTMLCREATOR_TEST_EXPLAIN"] === "TRUE",
        "live" => $live,
        "synthetic_only" => $live && !$idmap_overridden,
        "now" => (int)(microtime(true) * 1000),
    ];
}
