# HtmlCreator SDK feature factory

from feature.base_feature import HtmlCreatorBaseFeature
from feature.test_feature import HtmlCreatorTestFeature


def _make_feature(name):
    features = {
        "base": lambda: HtmlCreatorBaseFeature(),
        "test": lambda: HtmlCreatorTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
