import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './employees.component';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeesRoutingModule } from './employees-routing.module';
import { UpdatEmployeeComponent } from './updat-employee/updat-employee.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';

@NgModule({
    declarations: [
        EmployeesComponent,
        CreateEmployeeComponent,
        UpdatEmployeeComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        DataTablesModule,
        //EmployeesRoutingModule,
    ],
})
export class EmployeesModule { }