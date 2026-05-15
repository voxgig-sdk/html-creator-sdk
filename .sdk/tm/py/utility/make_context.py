# HtmlCreator SDK utility: make_context

from core.context import HtmlCreatorContext


def make_context_util(ctxmap, basectx):
    return HtmlCreatorContext(ctxmap, basectx)
