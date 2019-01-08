import { Component, OnInit } from '@angular/core';
import { IItem } from 'src/app/models/item.model';
import { ItemService } from 'src/app/services/item.service';
import { PagerService } from 'src/app/services/pager.service';


@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  items: IItem[];
  filteredItems: IItem[];
  pager: any = {};
  pagedItems: any[];
  errorMessage = '';
  selectedFilter = 'all';
  constructor(private itemService: ItemService, private pagerService: PagerService) { }

  ngOnInit() {
    this.itemService.getItems().subscribe(
      items => {
        this.items = items;
        this.filteredItems = items;
        this.setPage(1);
      },
      error => this.errorMessage = <any>error
    );
  }

  setPage(page: number) {
    this.pager = this.pagerService.getPager(this.filteredItems.length, page);
    this.pagedItems = this.filteredItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

  getClasses(filter: string) {
    if (this.selectedFilter === filter) {
      return {
        'item-list__filter-button_selected': true
      };
    }
  }

  filterItems(key: string): void {
    switch (key) {
      case 'all':
        this.filteredItems = this.items;
        break;
      case 'secret':
        this.filteredItems = this.items.filter(item => item.secret_shop === 1);
        break;
      case 'side':
        this.filteredItems = this.items.filter(item => item.side_shop === 1);
        break;
      case 'recipe':
        this.filteredItems = this.items.filter(item => item.recipe === 1);
        break;
      default:
        this.filteredItems = this.items;
        break;
    }
    this.selectedFilter = key;
    this.setPage(1);
  }

}
