import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: './app.component.html'
})
export class AppComponent {

    cards: Object[] = [];
    products = ['ola', 'teste'];

    constructor(http: Http) {

        http.get('v1/product')
            .map(res => res.json())
            .subscribe(
                card => this.cards = card[0].items,
                erro => console.log(erro)
            );
    }
}