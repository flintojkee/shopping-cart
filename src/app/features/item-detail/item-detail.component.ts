import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from 'src/app/services/item.service';
import { IItem } from 'src/app/models/item.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit, OnDestroy {

  constructor(private _route: ActivatedRoute, private _itemService: ItemService, private _router: Router) {}
  items: IItem[];
  item: IItem;
  errorMessage: string;
  subscription: Subscription;

  ngOnInit() {
    const id = +this._route.snapshot.paramMap.get('id');
    this.subscription = this._itemService.getItems().subscribe(
      items => {
        this.items = items;
        this.item = this.items.find(obj => obj.id === id);
      },
      error => this.errorMessage = <any>error
    );
  }

  onBack(): void {
    this._router.navigate(['/items']);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
