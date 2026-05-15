<?php
declare(strict_types=1);

// HtmlCreator SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class HtmlCreatorFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new HtmlCreatorBaseFeature();
            case "test":
                return new HtmlCreatorTestFeature();
            default:
                return new HtmlCreatorBaseFeature();
        }
    }
}
