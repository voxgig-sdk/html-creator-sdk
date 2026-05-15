<?php
declare(strict_types=1);

// HtmlCreator SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class HtmlCreatorMakeContext
{
    public static function call(array $ctxmap, ?HtmlCreatorContext $basectx): HtmlCreatorContext
    {
        return new HtmlCreatorContext($ctxmap, $basectx);
    }
}
