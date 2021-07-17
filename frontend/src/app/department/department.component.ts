import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  constructor(private service:SharedService) { }

  Departments: any=[];
  @Input() dep:any;
  DepartmentId: any;
  DepartmentName: any;


  ngOnInit(): void {
    this.refreshDeps();
    // this.DepartmentId = this.dep.DepartmentId;
    // this.DepartmentName = this.dep.DepartmentName;
  }

  refreshDeps() {
    this.service.getDeps().subscribe(
      data => {
        console.log('sucesso pá', data);
        this.Departments = data;
      },
      error => {
        console.log('erro aqui', error);
      }
    )
  }

  addDepartment() {
    let val = {
      DepartmentId: this.DepartmentId,
      DepartmentName: this.DepartmentName,
    };
    this.service.postDep(val).subscribe(
      res => {
        console.log('this is the response', res);
      }
    )
  }

}
