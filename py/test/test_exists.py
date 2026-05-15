# ProjectName SDK exists test

import pytest
from htmlcreator_sdk import HtmlCreatorSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = HtmlCreatorSDK.test(None, None)
        assert testsdk is not None
