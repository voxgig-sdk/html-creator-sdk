<?php
declare(strict_types=1);

// HtmlCreator SDK configuration

class HtmlCreatorConfig
{
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "HtmlCreator",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
        ],
            ],
            "options" => [
                "base" => "https://api.html-creator.com/v1",
                "auth" => [
                    "prefix" => "Bearer",
                ],
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "html_document" => [],
                ],
            ],
            "entity" => [
        'html_document' => [
          'fields' => [
            [
              'name' => 'content',
              'req' => true,
              'type' => '`$OBJECT`',
              'active' => true,
              'index$' => 0,
            ],
            [
              'name' => 'metadata',
              'req' => false,
              'type' => '`$OBJECT`',
              'active' => true,
              'index$' => 1,
            ],
            [
              'name' => 'share',
              'req' => false,
              'type' => '`$BOOLEAN`',
              'active' => true,
              'index$' => 2,
            ],
            [
              'name' => 'title',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 3,
            ],
          ],
          'name' => 'html_document',
          'op' => [
            'create' => [
              'name' => 'create',
              'points' => [
                [
                  'method' => 'POST',
                  'orig' => '/html/create',
                  'parts' => [
                    'html',
                    'create',
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'active' => true,
                  'args' => [],
                  'select' => [],
                  'index$' => 0,
                ],
              ],
              'input' => 'data',
              'key$' => 'create',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return HtmlCreatorFeatures::make_feature($name);
    }
}
