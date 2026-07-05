// Typed models for the HtmlCreator SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface HtmlDocument {
  content: Record<string, any>
  metadata?: Record<string, any>
  share?: boolean
  title?: string
}

export interface HtmlDocumentCreateData {
  content: Record<string, any>
  metadata?: Record<string, any>
  share?: boolean
  title?: string
}

