# HtmlCreator SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module HtmlCreatorFeatures
  def self.make_feature(name)
    case name
    when "base"
      HtmlCreatorBaseFeature.new
    when "test"
      HtmlCreatorTestFeature.new
    else
      HtmlCreatorBaseFeature.new
    end
  end
end
