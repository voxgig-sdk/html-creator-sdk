-- HtmlCreator SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "HtmlCreator",
      slug = "html-creator",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["transport"] = "base",
      },
    },
    options = {
      base = "https://api.html-creator.com/v1",
      auth = {
        prefix = "",
      },
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["html_document"] = {},
      },
    },
    entity = {
      ["html_document"] = {
        ["fields"] = {
          {
            ["name"] = "content",
            ["req"] = true,
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "metadata",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "share",
            ["short"] = "Whether to enable sharing for this document",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "title",
            ["short"] = "Title of the HTML document",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "html_document",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/html/create",
                ["segments"] = {
                  {
                    ["lit"] = "html",
                  },
                  {
                    ["lit"] = "create",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.content`",
                },
                ["parts"] = {
                  "html",
                  "create",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
