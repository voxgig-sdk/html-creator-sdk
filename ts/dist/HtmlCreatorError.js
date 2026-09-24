"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlCreatorError = void 0;
class HtmlCreatorError extends Error {
    isHtmlCreatorError = true;
    sdk = 'HtmlCreator';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.HtmlCreatorError = HtmlCreatorError;
//# sourceMappingURL=HtmlCreatorError.js.map