# HtmlCreator SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module HtmlCreatorFeatures
  def self.make_feature(name)
    case name
    when "base"
      HtmlCreatorBaseFeature.new
    when "ratelimit"
      HtmlCreatorRatelimitFeature.new
    when "retry"
      HtmlCreatorRetryFeature.new
    when "test"
      HtmlCreatorTestFeature.new
    when "timeout"
      HtmlCreatorTimeoutFeature.new
    else
      HtmlCreatorBaseFeature.new
    end
  end
end
