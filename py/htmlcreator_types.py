# Typed models for the HtmlCreator SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class HtmlDocument:
    content: dict
    metadata: Optional[dict] = None
    share: Optional[bool] = None
    title: Optional[str] = None


@dataclass
class HtmlDocumentCreateData:
    content: Optional[dict] = None
    metadata: Optional[dict] = None
    share: Optional[bool] = None
    title: Optional[str] = None

