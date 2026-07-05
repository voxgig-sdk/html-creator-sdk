# frozen_string_literal: true

# Typed models for the HtmlCreator SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# HtmlDocument entity data model.
#
# @!attribute [rw] content
#   @return [Hash]
#
# @!attribute [rw] metadata
#   @return [Hash, nil]
#
# @!attribute [rw] share
#   @return [Boolean, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
HtmlDocument = Struct.new(
  :content,
  :metadata,
  :share,
  :title,
  keyword_init: true
)

# Request payload for HtmlDocument#create.
#
# @!attribute [rw] content
#   @return [Hash]
#
# @!attribute [rw] metadata
#   @return [Hash, nil]
#
# @!attribute [rw] share
#   @return [Boolean, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
HtmlDocumentCreateData = Struct.new(
  :content,
  :metadata,
  :share,
  :title,
  keyword_init: true
)

