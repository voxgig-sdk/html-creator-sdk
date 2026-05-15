<?php
declare(strict_types=1);

// HtmlCreator SDK utility: prepare_body

class HtmlCreatorPrepareBody
{
    public static function call(HtmlCreatorContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
