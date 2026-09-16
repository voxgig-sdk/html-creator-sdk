# HtmlCreator SDK feature factory

from htmlcreator_sdk.feature.base_feature import HtmlCreatorBaseFeature
from htmlcreator_sdk.feature.ratelimit_feature import HtmlCreatorRatelimitFeature
from htmlcreator_sdk.feature.retry_feature import HtmlCreatorRetryFeature
from htmlcreator_sdk.feature.test_feature import HtmlCreatorTestFeature
from htmlcreator_sdk.feature.timeout_feature import HtmlCreatorTimeoutFeature


_FEATURES = {
    "base": lambda: HtmlCreatorBaseFeature(),
    "ratelimit": lambda: HtmlCreatorRatelimitFeature(),
    "retry": lambda: HtmlCreatorRetryFeature(),
    "test": lambda: HtmlCreatorTestFeature(),
    "timeout": lambda: HtmlCreatorTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
