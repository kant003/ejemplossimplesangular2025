import { Routes } from '@angular/router';
import { Ejemplo0Component } from './components/ejemplo0/ejemplo0.component';
import { Ejemplo1Component } from './components/ejemplo1/ejemplo1.component';
import { Ejemplo2Component } from './components/ejemplo2/ejemplo2.component';
import { Ejemplo4Component } from './components/ejemplo4/ejemplo4.component';
import { Ejemplo3Component } from './components/ejemplo3/ejemplo3.component';
import { Ejemplo5Component } from './components/ejemplo5/ejemplo5.component';
import { Ejemplo6Component } from './components/ejemplo6/ejemplo6.component';
import { Ejemplo7Component } from './components/ejemplo7/ejemplo7.component';
import { Ejemplo8Component } from './components/ejemplo8/ejemplo8.component';
import { Ejemplo9Component } from './components/ejemplo9/ejemplo9.component';
import { Ejemplo10Component } from './components/ejemplo10/ejemplo10.component';
import { Ejemplo3BComponent } from './components/ejemplo3-b/ejemplo3-b.component';
import { Ejemplo4BComponent } from './components/ejemplo4-b/ejemplo4-b.component';
import { Ejemplo11Component } from './components/ejemplo11/ejemplo11.component';
import { Ejemplo12Component } from './components/ejemplo12/ejemplo12.component';
import { Ejemplo13Component } from './components/ejemplo13/ejemplo13.component';
import { Ejemplo14Component } from './components/ejemplo14/ejemplo14.component';
import { Ejemplo15Component } from './components/ejemplo15/ejemplo15.component';
import { Ejemplo16Component } from './components/ejemplo16/ejemplo16.component';
import { Ejemplo17Component } from './components/ejemplo17/ejemplo17.component';
import { Ejemplo18Component } from './components/ejemplo18/ejemplo18.component';
import { Ejemplo19Component } from './components/ejemplo19/ejemplo19.component';
import { Ejer1Component } from './components/ejercicios/ejer1/ejer1.component';
import { Ejer2Component } from './components/ejercicios/ejer2/ejer2.component';
import { Ejer3Component } from './components/ejercicios/ejer3/ejer3.component';

export const routes: Routes = [
    {path:'ejemplo0', component: Ejemplo0Component},
    {path:'ejemplo1', component: Ejemplo1Component},
    {path:'ejemplo2', component: Ejemplo2Component},
    {path:'ejemplo3', component: Ejemplo3Component},
    {path:'ejemplo3B', component: Ejemplo3BComponent},
    {path:'ejemplo4', component: Ejemplo4Component},
    {path:'ejemplo4B', component: Ejemplo4BComponent},
    {path:'ejemplo5', component: Ejemplo5Component},
    {path:'ejemplo6', component: Ejemplo6Component},
    {path:'ejemplo7', component: Ejemplo7Component},
    {path:'ejemplo8', component: Ejemplo8Component},
    {path:'ejemplo9', component: Ejemplo9Component},
    {path:'ejemplo10', component: Ejemplo10Component},
    {path:'ejemplo11', component: Ejemplo11Component},
    {path:'ejemplo12', component: Ejemplo12Component},
    {path:'ejemplo13', component: Ejemplo13Component},
    {path:'ejemplo14', component: Ejemplo14Component},
    {path:'ejemplo15', component: Ejemplo15Component},
    {path:'ejemplo16', component: Ejemplo16Component},
    {path:'ejemplo17', component: Ejemplo17Component},
    {path:'ejemplo17/:id', component: Ejemplo17Component},
    {path:'ejemplo18', component: Ejemplo18Component},
    {path:'ejemplo19', component: Ejemplo19Component},
    
    
    {path:'ejer1', component: Ejer1Component},
    {path:'ejer2', component: Ejer2Component},
    {path:'ejer3', component: Ejer3Component},


];
