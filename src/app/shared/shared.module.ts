import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './item/item.componennt';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    ItemComponent
  ],
  exports: [
    ItemComponent,
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
