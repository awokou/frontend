import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdatEmployeeComponent } from './updat-employee/updat-employee.component';
import { EmployeesComponent } from './employees.component';

const routes: Routes = [
    {
        path: 'employees',
        component: EmployeesComponent,
        children: [
            {
                path: 'add',
                component: CreateEmployeeComponent
            },
            {
                path: 'update/:id',
                component: UpdatEmployeeComponent
            },
        ]
    },
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class EmployeesRoutingModule { }