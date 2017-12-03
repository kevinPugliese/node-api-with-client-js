import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'card',
    templateUrl: './card.component.html'
})
export class CardComponent {

    @Input() name;
    @Input() value;
    @Input() installmentes;
    @Input() installmentValue;
    @Input() imgSrc;

}
