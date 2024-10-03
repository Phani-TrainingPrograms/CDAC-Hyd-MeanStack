import { Routes } from '@angular/router';
import { EmpmanagerComponent } from './Components/empmanager/empmanager.component';
import { EmpaddComponent } from './Components/empadd/empadd.component';

export const routes: Routes = [
    {path : '', component: EmpmanagerComponent},
    {path : 'AllEmployees', component: EmpmanagerComponent},
    {path : 'AddNew', component: EmpaddComponent}
];
