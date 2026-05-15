# HtmlCreator SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

HtmlCreatorUtility.registrar = ->(u) {
  u.clean = HtmlCreatorUtilities::Clean
  u.done = HtmlCreatorUtilities::Done
  u.make_error = HtmlCreatorUtilities::MakeError
  u.feature_add = HtmlCreatorUtilities::FeatureAdd
  u.feature_hook = HtmlCreatorUtilities::FeatureHook
  u.feature_init = HtmlCreatorUtilities::FeatureInit
  u.fetcher = HtmlCreatorUtilities::Fetcher
  u.make_fetch_def = HtmlCreatorUtilities::MakeFetchDef
  u.make_context = HtmlCreatorUtilities::MakeContext
  u.make_options = HtmlCreatorUtilities::MakeOptions
  u.make_request = HtmlCreatorUtilities::MakeRequest
  u.make_response = HtmlCreatorUtilities::MakeResponse
  u.make_result = HtmlCreatorUtilities::MakeResult
  u.make_point = HtmlCreatorUtilities::MakePoint
  u.make_spec = HtmlCreatorUtilities::MakeSpec
  u.make_url = HtmlCreatorUtilities::MakeUrl
  u.param = HtmlCreatorUtilities::Param
  u.prepare_auth = HtmlCreatorUtilities::PrepareAuth
  u.prepare_body = HtmlCreatorUtilities::PrepareBody
  u.prepare_headers = HtmlCreatorUtilities::PrepareHeaders
  u.prepare_method = HtmlCreatorUtilities::PrepareMethod
  u.prepare_params = HtmlCreatorUtilities::PrepareParams
  u.prepare_path = HtmlCreatorUtilities::PreparePath
  u.prepare_query = HtmlCreatorUtilities::PrepareQuery
  u.result_basic = HtmlCreatorUtilities::ResultBasic
  u.result_body = HtmlCreatorUtilities::ResultBody
  u.result_headers = HtmlCreatorUtilities::ResultHeaders
  u.transform_request = HtmlCreatorUtilities::TransformRequest
  u.transform_response = HtmlCreatorUtilities::TransformResponse
}
