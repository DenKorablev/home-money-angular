import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Category } from '../../shared/models/category.model';
import { WFMEvent } from '../../shared/models/event.model';
import { EventsService } from '../../shared/services/events.service';
import { MessageModel } from 'src/app/shared/models/message.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'wfm-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.less']
})
export class AddEventComponent implements OnInit, OnDestroy {

  sub: Subscription;
  @Input() categories: Category[] = [];
  types = [
    {type: 'income', label: 'Доход'},
    {type: 'outcome', label: 'Расход'}
  ];
  date: Date = new Date();
  message: MessageModel;

  constructor(private eventsService: EventsService) { }

  ngOnInit() {
    this.message = new MessageModel('success', '');
  }

  private showMessage(text: string) {
    this.message.text = text;
    window.setTimeout(() => this.message.text ='', 5000);
  }

  onSubmit(form: NgForm) {
    let {amount, type, category, description} = form.value;
    if(amount < 0) amount *= -1;
    let date = this.date;
    const event = new WFMEvent(type, amount, +category, date, description);
    this.sub = this.eventsService.addEvent(event)
      .subscribe((event: WFMEvent) => {
        form.setValue({
          amount: 0,
          description: ' ',
          category: 1,
          type: 'outcome'
        });
        this.showMessage('Событие создано');
      });
  }

  ngOnDestroy() {

  }
}
