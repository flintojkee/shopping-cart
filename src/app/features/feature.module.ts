import { NgModule } from '@angular/core';
import { ItemListComponent } from './item-list/item-list.component';
import { HomeComponent } from './home/home.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { CartComponent } from './cart/cart.component';
import { RouterModule } from '@angular/router';
import { ItemDetailGuard } from './item-detail/item-detail.guard';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'items/:id',
              canActivate: [ItemDetailGuard],
              component: ItemDetailComponent },
      { path: 'home', component: HomeComponent },
      { path: 'cart', component: CartComponent }
    ]),
    SharedModule
  ],
  declarations: [
    ItemListComponent,
    HomeComponent,
    ItemDetailComponent,
    CartComponent
  ]
})
export class FeatureModule { }
