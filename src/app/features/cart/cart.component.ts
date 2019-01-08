import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ICartItem } from 'src/app/models/cartItem.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {

  constructor(private _cartService: CartService) { }
  items: ICartItem[];
  subscription: Subscription;

  ngOnInit() {
    this.items = this._cartService.getItemsFromCart();
    this.subscription = this._cartService.cartState.subscribe(data => {
      this.items = data;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
