<?php
declare(strict_types=1);

// HtmlCreator SDK utility: result_headers

class HtmlCreatorResultHeaders
{
    public static function call(HtmlCreatorContext $ctx): ?HtmlCreatorResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
