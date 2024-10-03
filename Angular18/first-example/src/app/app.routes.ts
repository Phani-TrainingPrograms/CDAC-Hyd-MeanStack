import { Routes } from '@angular/router';
import { SecondComponent } from './Components/second/second.component';
import { CalcComponent } from './Components/calc/calc.component';
import { ReversePipe } from './Pipes/reverse.pipe';
import { PipeExampleComponent } from './Components/pipe-example/pipe-example.component';
import { BindingComponent } from './Components/binding/binding.component';

export const routes: Routes = [
    { path : '', component : SecondComponent },
    { path : 'Calc', component : CalcComponent },
    { path : 'PipesExample', component : PipeExampleComponent },
    { path : 'Binding', component : BindingComponent }
];
