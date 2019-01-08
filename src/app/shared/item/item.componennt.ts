import { Component, Input } from '@angular/core';
import { IItem } from 'src/app/models/item.model';
import { CartService } from 'src/app/services/cart.service';
import { ICartItem } from 'src/app/models/cartItem.model';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
    @Input()
    item: IItem;
    @Input()
    amount: number;
    constructor(private _cartService: CartService) {}
    addItemToCart() {
      this._cartService.addItemToCart(this.item);
    }
    removeItemFromCart() {
      const cartItem: ICartItem = {
        ...this.item,
        amount: 1
      };
      this._cartService.removeItemFromCart(cartItem);
    }
    removeItemsFromCart() {
      this._cartService.removeItemsFromCart(this.item.id);
    }
}
