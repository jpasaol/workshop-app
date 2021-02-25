import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-stat-filters',
  templateUrl: './stat-filters.component.html',
  styleUrls: ['./stat-filters.component.less']
})
export class StatFiltersComponent implements OnInit {
  filters: FormGroup;

  constructor(fb: FormBuilder) {
    this.filters = fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  applyFilters(): void {
    console.log("Form submitted, ", this.filters.value);
  }

}
