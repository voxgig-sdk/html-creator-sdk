<?php
declare(strict_types=1);

// HtmlCreator SDK base feature

class HtmlCreatorBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(HtmlCreatorContext $ctx, array $options): void {}
    public function PostConstruct(HtmlCreatorContext $ctx): void {}
    public function PostConstructEntity(HtmlCreatorContext $ctx): void {}
    public function SetData(HtmlCreatorContext $ctx): void {}
    public function GetData(HtmlCreatorContext $ctx): void {}
    public function GetMatch(HtmlCreatorContext $ctx): void {}
    public function SetMatch(HtmlCreatorContext $ctx): void {}
    public function PrePoint(HtmlCreatorContext $ctx): void {}
    public function PreSpec(HtmlCreatorContext $ctx): void {}
    public function PreRequest(HtmlCreatorContext $ctx): void {}
    public function PreResponse(HtmlCreatorContext $ctx): void {}
    public function PreResult(HtmlCreatorContext $ctx): void {}
    public function PreDone(HtmlCreatorContext $ctx): void {}
    public function PreUnexpected(HtmlCreatorContext $ctx): void {}
}
