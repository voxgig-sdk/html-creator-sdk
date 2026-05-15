package = "voxgig-sdk-html-creator"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/html-creator-sdk.git"
}
description = {
  summary = "HtmlCreator SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["html-creator_sdk"] = "html-creator_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
