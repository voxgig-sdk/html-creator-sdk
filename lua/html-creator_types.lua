-- Typed models for the HtmlCreator SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class HtmlDocument
---@field content table
---@field metadata? table
---@field share? boolean
---@field title? string

---@class HtmlDocumentCreateData
---@field content table
---@field metadata? table
---@field share? boolean
---@field title? string

local M = {}

return M
