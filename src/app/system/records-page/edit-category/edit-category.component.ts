import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Category } from '../../shared/models/category.model';
import { CategoriesService } from '../../shared/services/categories.service';
import { MessageModel } from 'src/app/shared/models/message.model';

@Component({
  selector: 'wfm-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.less']
})
export class EditCategoryComponent implements OnInit {

  @Input() categories: Category[] = [];
  @Output() onCategoryEdit = new EventEmitter<Category>();
  form: FormGroup;
  currentCategoryId = 1;
  currentCategory: Category;
  message: MessageModel;

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit() {
    this.message = new MessageModel('success', '');
    this.onCategoryChange();
    this.form = new FormGroup({
      'name': new FormControl(null, [Validators.required]),
      'capacity': new FormControl(null, [Validators.required, Validators.minLength(1)])
    });
  }

  onCategoryChange() {
    this.currentCategory = this.categories
      .find(c => c.id === +this.currentCategoryId);
  }

  onSubmit() {
    let { name, capacity } = this.form.value;
    if(capacity < 0) capacity *= -1;

    const category = new Category(name, capacity, +this.currentCategoryId )
    this.categoriesService.updateCategory(category)
      .subscribe((category: Category) => {
          this.onCategoryEdit.emit(category);
          this.message.text = 'Категория успешно отредактирована';
          window.setTimeout(() => this.message.text = '', 5000);
      });
    }
}
