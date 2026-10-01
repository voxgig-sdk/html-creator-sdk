

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"content":{"a":true,"h":"Content","n":"content","r":true,"t":"`$OBJECT`","key$":"content","index$":0},"metadata":{"a":true,"h":"Metadata","n":"metadata","r":false,"t":"`$OBJECT`","key$":"metadata","index$":1},"share":{"a":true,"h":"Share","n":"share","r":false,"sh":"Whether to enable sharing for this document","t":"`$BOOLEAN`","key$":"share","index$":2},"title":{"a":true,"h":"Title","n":"title","r":false,"sh":"Title of the HTML document","t":"`$STRING`","key$":"title","index$":3}},"name":"html_document","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /html/create","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/html/create","q":{},"r":{},"s":[{"lit":"html"},{"lit":"create"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"html_document","name__orig":"html_document","Name":"HtmlDocument","name_":"html_document","name-":"html-document","NAME":"HTML_DOCUMENT","index$":0}, {"active":true,"entity":"html_document","key$":"BasicHtmlDocumentFlow","kind":"basic","name":"BasicHtmlDocumentFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"html_document_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0}]}, 'HtmlDocument', {"POST /html/create":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["content"],"properties":{"content":{"type":"object","properties":{"html":{"type":"string","description":"HTML content of the document","example":"<!DOCTYPE html><html><head><title>My Page</title></head><body><h1>Hello World</h1></body></html>"},"css":{"type":"string","description":"CSS styles for the document","example":"body { font-family: Arial; }"},"javascript":{"type":"string","description":"JavaScript code for the document","example":"console.log('Hello World');"}},"key$":"content"},"title":{"type":"string","description":"Title of the HTML document","example":"My HTML Page","key$":"title"},"share":{"type":"boolean","description":"Whether to enable sharing for this document","default":false,"key$":"share"},"metadata":{"type":"object","properties":{"author":{"type":"string","description":"Author of the document"},"tags":{"type":"array","items":{"type":"string"},"description":"Tags associated with the document"},"description":{"type":"string","description":"Description of the document"}},"key$":"metadata"}},"index$":1}}}},"parameters":[]}})
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
  
