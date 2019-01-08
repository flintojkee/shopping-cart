import { Component, OnInit } from '@angular/core';
import { CartService } from './services/cart.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cartCost = 0;
  title = 'shopping-cart';
  constructor(private _cartService: CartService ) {}

  ngOnInit(): void {
    this._cartService.cartState.subscribe(items => {
      this.cartCost = items.reduce((a, b) => a + b.cost * b.amount, 0);
    });

  }
}
