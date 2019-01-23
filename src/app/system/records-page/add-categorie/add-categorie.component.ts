import { Component, EventEmitter, Output, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

import { CategoriesService } from '../../shared/services/categories.service';
import { Category } from '../../shared/models/category.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'wfm-add-categorie',
  templateUrl: './add-categorie.component.html',
  styleUrls: ['./add-categorie.component.less']
})
export class AddCategorieComponent implements OnInit, OnDestroy {

  sub: Subscription;
  form: FormGroup;
  @Output() onCategoryAdd = new EventEmitter<Category>();

  constructor(
    private categoriesService: CategoriesService
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      'name': new FormControl(null, [Validators.required]),
      'capacity': new FormControl(null, [Validators.required, Validators.minLength(1)])
    })
  }

  onSubmit() {
    let {name, capacity} = this.form.value;
    if(capacity < 0) capacity *= -1;

    const category = new Category(name, capacity);

    this.sub = this.categoriesService.addCategory(category)
      .subscribe((category: Category) => {
        this.form.reset();
        this.form.patchValue({capacity: 1});
        this.onCategoryAdd.emit(category);
      });
  }

  ngOnDestroy() {
    console.log(this.sub);
  }
}
