<?php
declare(strict_types=1);

// HtmlCreator SDK exists test

require_once __DIR__ . '/../htmlcreator_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = HtmlCreatorSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
