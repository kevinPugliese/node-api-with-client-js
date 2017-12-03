import 'rxjs/add/operator/map';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CardModule } from './card/card.module';
import { CartModule } from './cart/cart.module';
import { HttpModule } from '@angular/http';

@NgModule({
    imports: [ BrowserModule, CardModule, CartModule, HttpModule ],
    declarations: [ AppComponent ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
