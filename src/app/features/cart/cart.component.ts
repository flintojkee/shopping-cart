import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ICartItem } from 'src/app/models/cartItem.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private _cartService: CartService) { }
  items: ICartItem[];

  ngOnInit() {
    this.items = this._cartService.getItemsFromCart();
    this._cartService.cartState.subscribe(data => {
      this.items = data;
    });
  }
}
