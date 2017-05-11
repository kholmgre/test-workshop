import { GenericService } from './genericService';

export class JsonToHtml {
    constructor(genericService) {
        this.genericService = genericService;
    }

    getHtml(){
        const items = this.genericService.getItems();

        let mappedItems = items.map((item) => { return `<div>${item.name}</div>`; });

        let html = '<div>';

        mappedItems.forEach(function(element) {
            html = html + element;
        }, this);

        return html + '</div>';
    }
}