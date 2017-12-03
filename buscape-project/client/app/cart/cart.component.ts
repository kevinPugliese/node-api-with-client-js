import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'cart',
    templateUrl: './cart.component.html'
})
export class CartComponent {

    @Input() id;
    @Input() name;
    @Input() value;
    @Input() installmentes;
    @Input() installmentValue;
    @Input() imgSrc;
}
