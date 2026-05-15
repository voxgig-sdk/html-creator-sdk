
import { Context } from './Context'


class HtmlCreatorError extends Error {

  isHtmlCreatorError = true

  sdk = 'HtmlCreator'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  HtmlCreatorError
}

