<?php
declare(strict_types=1);

// Typed models for the HtmlCreator SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** HtmlDocument entity data model. */
class HtmlDocument
{
    public array $content;
    public ?array $metadata = null;
    public ?bool $share = null;
    public ?string $title = null;
}

/** Match filter for HtmlDocument#create (any subset of HtmlDocument fields). */
class HtmlDocumentCreateData
{
    public ?array $content = null;
    public ?array $metadata = null;
    public ?bool $share = null;
    public ?string $title = null;
}

