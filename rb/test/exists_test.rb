# HtmlCreator SDK exists test

require "minitest/autorun"
require_relative "../HtmlCreator_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = HtmlCreatorSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
