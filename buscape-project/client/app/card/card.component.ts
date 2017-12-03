import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'card',
    templateUrl: './card.component.html'
})
export class CardComponent {

    items: Object[] = [];

    @Input() id;
    @Input() name;
    @Input() value;
    @Input() installmentes;
    @Input() installmentValue;
    @Input() imgSrc;
    @Input() images1;
    @Input() images2;
    @Input() images3;

    addCart(product) {
        console.log(this.items);
        this.items.push(product);
        console.log(this.items);
    }

}
