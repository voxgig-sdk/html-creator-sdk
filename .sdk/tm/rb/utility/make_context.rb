# HtmlCreator SDK utility: make_context
require_relative '../core/context'
module HtmlCreatorUtilities
  MakeContext = ->(ctxmap, basectx) {
    HtmlCreatorContext.new(ctxmap, basectx)
  }
end
