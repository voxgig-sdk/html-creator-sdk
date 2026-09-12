import { HtmlCreatorEntityBase } from '../HtmlCreatorEntityBase';
import type { HtmlCreatorSDK } from '../HtmlCreatorSDK';
import type { Control } from '../types';
import type { HtmlDocument, HtmlDocumentCreateData } from '../HtmlCreatorTypes';
declare class HtmlDocumentEntity extends HtmlCreatorEntityBase<HtmlDocument> {
    constructor(client: HtmlCreatorSDK, entopts: any);
    make(this: HtmlDocumentEntity): HtmlDocumentEntity;
    create(this: any, reqdata?: HtmlDocumentCreateData, ctrl?: Control): Promise<HtmlDocumentEntity>;
}
export { HtmlDocumentEntity };
