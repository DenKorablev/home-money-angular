import { Component, OnInit, Input } from '@angular/core';
import { Category } from '../../shared/models/category.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'wfm-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.less']
})
export class AddEventComponent implements OnInit {

  @Input() categories: Category[] = [];
  types = [
    {type: 'income', label: 'Доход'},
    {type: 'outcome', label: 'Расход'}
  ];

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {

  }
}
