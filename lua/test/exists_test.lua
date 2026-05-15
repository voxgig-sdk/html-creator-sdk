-- ProjectName SDK exists test

local sdk = require("html-creator_sdk")

describe("HtmlCreatorSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
