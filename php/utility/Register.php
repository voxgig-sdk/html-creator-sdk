<?php
declare(strict_types=1);

// HtmlCreator SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

HtmlCreatorUtility::setRegistrar(function (HtmlCreatorUtility $u): void {
    $u->clean = [HtmlCreatorClean::class, 'call'];
    $u->done = [HtmlCreatorDone::class, 'call'];
    $u->make_error = [HtmlCreatorMakeError::class, 'call'];
    $u->feature_add = [HtmlCreatorFeatureAdd::class, 'call'];
    $u->feature_hook = [HtmlCreatorFeatureHook::class, 'call'];
    $u->feature_init = [HtmlCreatorFeatureInit::class, 'call'];
    $u->fetcher = [HtmlCreatorFetcher::class, 'call'];
    $u->make_fetch_def = [HtmlCreatorMakeFetchDef::class, 'call'];
    $u->make_context = [HtmlCreatorMakeContext::class, 'call'];
    $u->make_options = [HtmlCreatorMakeOptions::class, 'call'];
    $u->make_request = [HtmlCreatorMakeRequest::class, 'call'];
    $u->make_response = [HtmlCreatorMakeResponse::class, 'call'];
    $u->make_result = [HtmlCreatorMakeResult::class, 'call'];
    $u->make_point = [HtmlCreatorMakePoint::class, 'call'];
    $u->make_spec = [HtmlCreatorMakeSpec::class, 'call'];
    $u->make_url = [HtmlCreatorMakeUrl::class, 'call'];
    $u->param = [HtmlCreatorParam::class, 'call'];
    $u->prepare_auth = [HtmlCreatorPrepareAuth::class, 'call'];
    $u->prepare_body = [HtmlCreatorPrepareBody::class, 'call'];
    $u->prepare_headers = [HtmlCreatorPrepareHeaders::class, 'call'];
    $u->prepare_method = [HtmlCreatorPrepareMethod::class, 'call'];
    $u->prepare_params = [HtmlCreatorPrepareParams::class, 'call'];
    $u->prepare_path = [HtmlCreatorPreparePath::class, 'call'];
    $u->prepare_query = [HtmlCreatorPrepareQuery::class, 'call'];
    $u->result_basic = [HtmlCreatorResultBasic::class, 'call'];
    $u->result_body = [HtmlCreatorResultBody::class, 'call'];
    $u->result_headers = [HtmlCreatorResultHeaders::class, 'call'];
    $u->transform_request = [HtmlCreatorTransformRequest::class, 'call'];
    $u->transform_response = [HtmlCreatorTransformResponse::class, 'call'];
});
