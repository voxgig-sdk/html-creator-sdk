<?php
declare(strict_types=1);

// HtmlCreator SDK utility: feature_add

class HtmlCreatorFeatureAdd
{
    public static function call(HtmlCreatorContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
