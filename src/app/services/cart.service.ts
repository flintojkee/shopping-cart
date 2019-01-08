import { Injectable } from '@angular/core';
import { IItem } from '../models/item.model';
import { Subject} from '../../../node_modules/rxjs';
import { ICartItem } from '../models/cartItem.model';

@Injectable({
    providedIn: 'root'
})

export class CartService {
    constructor() {}
    private cartSubject = new Subject<ICartItem[]>();
    cartState = this.cartSubject.asObservable();
    cartItems: ICartItem[] = [];

    getItemsFromCart() {
      return this.cartItems;
    }

    addItemToCart(item: IItem) {
      if (this.cartItems.find(obj => obj.id === item.id)) {
        this.cartItems.find(obj => obj.id === item.id).amount += 1;
      } else {
        const cartItem: ICartItem = {
          ...item,
          amount: 1
        };
        this.cartItems.push(cartItem);
      }
      this.cartSubject.next(this.cartItems);
    }

    removeItemsFromCart(id: number) {
      this.cartItems = this.cartItems.filter(obj => obj.id !== id);
      this.cartSubject.next(this.cartItems);
    }

    removeItemFromCart(item: ICartItem) {
      if (this.cartItems.find(obj => obj.id === item.id).amount > 1) {
        this.cartItems.find(obj => obj.id === item.id).amount -= 1;
      } else {
        this.cartItems = this.cartItems.filter(obj =>  obj.id !== item.id);
      }
        this.cartSubject.next(this.cartItems);
  }
}
