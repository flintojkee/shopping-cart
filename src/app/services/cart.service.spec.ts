import { TestBed, inject } from '@angular/core/testing';

import { CartService } from './cart.service';
import { IItem } from '../models/item.model';

describe('CartService', () => {
  let service: CartService;
  let item: IItem;
  beforeEach(() => {
    service = new CartService();
    item = {
      localized_name: 'Blades of Attack',
      name: 'item_blades_of_attack',
      recipe: 0,
      secret_shop: 0,
      cost: 420,
      side_shop: 0,
      url_image: 'http://cdn.dota2.com/apps/dota2/images/items/blades_of_attack_lg.png',
      id: 2
  };
    TestBed.configureTestingModule({
      providers: [CartService]
    });
  });

  it('should be created', inject([CartService], (_service: CartService) => {
    expect(_service).toBeTruthy();
  }));

  it('should be empty to start', () => {
    expect(service.cartItems.length).toBe(0);
  });

  it('should add an item', () => {
    service.addItemToCart(item);
    expect(service.cartItems.length).toBe(1);
  });

});
