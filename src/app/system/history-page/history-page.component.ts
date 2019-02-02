import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../shared/services/categories.service';
import { EventsService } from '../shared/services/events.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'wfm-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.less']
})
export class HistoryPageComponent implements OnInit {

  constructor(
    private categoriesService: CategoriesService,
    private eventService: EventsService
    ) { }

  ngOnInit() {
    Observable.call(this.categoriesService.getCategories());
  }

}
