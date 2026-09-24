
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { HtmlCreatorSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = HtmlCreatorSDK.test()
    equal(testsdk instanceof HtmlCreatorSDK, true,
      'HtmlCreatorSDK.test() must return a client synchronously')
  })

})
