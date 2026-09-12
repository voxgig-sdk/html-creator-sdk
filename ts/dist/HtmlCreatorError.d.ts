import { Context } from './Context';
declare class HtmlCreatorError extends Error {
    isHtmlCreatorError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { HtmlCreatorError };
