# HtmlCreator SDK configuration

module HtmlCreatorConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "HtmlCreator",
        "slug" => "html-creator",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "ratelimit" => {
          "options" => {
            "active" => false,
            "burst" => 5,
            "rate" => 5,
          },
          "optspec" => {
            "now" => "`$FUNCTION`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "retry" => {
          "options" => {
            "active" => false,
            "factor" => 2,
            "maxDelay" => 2000,
            "minDelay" => 50,
            "retries" => 2,
            "statuses" => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          },
          "optspec" => {
            "jitter" => "`$BOOLEAN`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "test" => {
          "options" => {
            "active" => false,
          },
          "optspec" => {
            "entity" => "`$MAP`",
            "net" => "`$MAP`",
          },
          "strict" => false,
          "transport" => "base",
        },
        "timeout" => {
          "options" => {
            "active" => false,
            "ms" => 30000,
          },
          "optspec" => {
            "clearTimer" => "`$FUNCTION`",
            "setTimer" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
      },
      "options" => {
        "base" => "https://api.html-creator.com/v1",
        "auth" => {
          "prefix" => "",
          "name" => "X-API-Key",
        },
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "html_document" => {},
        },
      },
      "entity" => {
        "html_document" => {
          "fields" => [
            {
              "name" => "content",
              "req" => true,
              "type" => "`$OBJECT`",
            },
            {
              "name" => "metadata",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "share",
              "short" => "Whether to enable sharing for this document",
              "type" => "`$BOOLEAN`",
            },
            {
              "name" => "title",
              "short" => "Title of the HTML document",
              "type" => "`$STRING`",
            },
          ],
          "name" => "html_document",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "args" => {},
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/html/create",
                  "segments" => [
                    {
                      "lit" => "html",
                    },
                    {
                      "lit" => "create",
                    },
                  ],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.content`",
                  },
                  "parts" => [
                    "html",
                    "create",
                  ],
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    HtmlCreatorFeatures.make_feature(name)
  end
end
