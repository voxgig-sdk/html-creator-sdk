-- HtmlCreator SDK error

local HtmlCreatorError = {}
HtmlCreatorError.__index = HtmlCreatorError


function HtmlCreatorError.new(code, msg, ctx)
  local self = setmetatable({}, HtmlCreatorError)
  self.is_sdk_error = true
  self.sdk = "HtmlCreator"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function HtmlCreatorError:error()
  return self.msg
end


function HtmlCreatorError:__tostring()
  return self.msg
end


return HtmlCreatorError
