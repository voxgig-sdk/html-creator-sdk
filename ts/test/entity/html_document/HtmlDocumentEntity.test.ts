

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { HtmlCreatorSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('HtmlDocumentEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when HTML_CREATOR_TEST_LIVE=TRUE.
  afterEach(liveDelay('HTML_CREATOR_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = HtmlCreatorSDK.test()
    const ent = testsdk.HtmlDocument()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.HTML_CREATOR_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'html_document.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"content","req":true,"type":"`$OBJECT`","index$":0},{"active":true,"name":"metadata","req":false,"type":"`$OBJECT`","index$":1},{"active":true,"name":"share","req":false,"short":"Whether to enable sharing for this document","type":"`$BOOLEAN`","index$":2},{"active":true,"name":"title","req":false,"short":"Title of the HTML document","type":"`$STRING`","index$":3}],"name":"html_document","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{},"contract":{"id":"POST /html/create","json":"{\"operationId\":\"createHtmlDocument\",\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"content\":{\"properties\":{\"css\":{\"description\":\"CSS styles for the document\",\"example\":\"body { font-family: Arial; }\",\"type\":\"string\"},\"html\":{\"description\":\"HTML content of the document\",\"example\":\"<!DOCTYPE html><html><head><title>My Page</title></head><body><h1>Hello World</h1></body></html>\",\"type\":\"string\"},\"javascript\":{\"description\":\"JavaScript code for the document\",\"example\":\"console.log('Hello World');\",\"type\":\"string\"}},\"type\":\"object\"},\"metadata\":{\"properties\":{\"author\":{\"description\":\"Author of the document\",\"type\":\"string\"},\"description\":{\"description\":\"Description of the document\",\"type\":\"string\"},\"tags\":{\"description\":\"Tags associated with the document\",\"items\":{\"type\":\"string\"},\"type\":\"array\"}},\"type\":\"object\"},\"share\":{\"default\":false,\"description\":\"Whether to enable sharing for this document\",\"type\":\"boolean\"},\"title\":{\"description\":\"Title of the HTML document\",\"example\":\"My HTML Page\",\"type\":\"string\"}},\"required\":[\"content\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"201\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"content\":{\"properties\":{\"css\":{\"description\":\"CSS content of the document\",\"type\":\"string\"},\"html\":{\"description\":\"HTML content of the document\",\"type\":\"string\"},\"javascript\":{\"description\":\"JavaScript content of the document\",\"type\":\"string\"}},\"type\":\"object\"},\"createdAt\":{\"description\":\"Timestamp when the document was created\",\"example\":\"2023-12-01T10:30:00Z\",\"format\":\"date-time\",\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier for the created document\",\"example\":\"doc_12345abcde\",\"type\":\"string\"},\"shareUrl\":{\"description\":\"URL for sharing the document (if sharing is enabled)\",\"example\":\"https://html-creator.com/share/doc_12345abcde\",\"format\":\"uri\",\"type\":\"string\"},\"title\":{\"description\":\"Title of the document\",\"example\":\"My HTML Page\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"HTML document created successfully\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"code\":{\"example\":\"INVALID_INPUT\",\"type\":\"string\"},\"error\":{\"example\":\"Invalid HTML content provided\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Bad request - Invalid input data\"},\"401\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"code\":{\"example\":\"UNAUTHORIZED\",\"type\":\"string\"},\"error\":{\"example\":\"Authentication required\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Unauthorized - Authentication required\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"code\":{\"example\":\"INTERNAL_ERROR\",\"type\":\"string\"},\"error\":{\"example\":\"An unexpected error occurred\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"security\":[{\"apiKey\":[]}],\"securitySchemes\":{\"apiKey\":{\"description\":\"API key for authentication\",\"in\":\"header\",\"name\":\"X-API-Key\",\"type\":\"apiKey\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/html/create","segments":[{"lit":"html"},{"lit":"create"}],"select":{},"transform":{"req":"`reqdata`","res":"`body.content`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"html_document","name__orig":"html_document","Name":"HtmlDocument","name_":"html_document","name-":"html-document","NAME":"HTML_DOCUMENT","index$":0}, {"active":true,"entity":"html_document","key$":"BasicHtmlDocumentFlow","kind":"basic","name":"BasicHtmlDocumentFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"html_document_ref01"},"match":{},"op":"create","spec":[],"valid":[],"index$":0}]}, 'HtmlDocument')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const html_document_ref01_ent = client.HtmlDocument()
    let html_document_ref01_data = setup.data.new.html_document['html_document_ref01']

    html_document_ref01_data = (await html_document_ref01_ent.create(html_document_ref01_data)).data()
    assert(null != html_document_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/html_document/HtmlDocumentTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = HtmlCreatorSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['html_document01','html_document02','html_document03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'HTML_CREATOR_TEST_HTML_DOCUMENT_ENTID': idmap,
    'HTML_CREATOR_TEST_LIVE': 'FALSE',
    'HTML_CREATOR_TEST_EXPLAIN': 'FALSE',
    'HTML_CREATOR_APIKEY': '',
  })

  idmap = env['HTML_CREATOR_TEST_HTML_DOCUMENT_ENTID']

  const live = 'TRUE' === env.HTML_CREATOR_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['HTML_CREATOR_TEST_HTML_DOCUMENT_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new HtmlCreatorSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
        apikey: env.HTML_CREATOR_APIKEY,
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.HTML_CREATOR_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
