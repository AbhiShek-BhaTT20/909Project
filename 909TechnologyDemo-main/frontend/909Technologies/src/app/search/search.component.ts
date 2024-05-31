import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
    filterForm!: FormGroup;
    filteredEmployees!: any[];
  
    constructor(private fb: FormBuilder, private apiService: SearchService) {}
  
    ngOnInit() {
      this.filterForm = this.fb.group({
        minAge: [],
        maxAge: [],
        role: ['']
      });
    }
  
    applyFilters() {
        const minAge = this.filterForm.get('minAge')?.value;
        const maxAge = this.filterForm.get('maxAge')?.value;
        const role = this.filterForm.get('role')?.value;
  
      this.apiService.getFilteredEmployees(minAge, maxAge, role).subscribe(
        data => {
          this.filteredEmployees = data;
        },
        error => {
          console.error('Error fetching filtered employees:', error);
        }
      );
    }
  }