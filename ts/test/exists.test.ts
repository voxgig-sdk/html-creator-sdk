
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { HtmlCreatorSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await HtmlCreatorSDK.test()
    equal(null !== testsdk, true)
  })

})
