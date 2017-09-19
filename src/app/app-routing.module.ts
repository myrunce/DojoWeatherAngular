import { DallasComponent } from './dallas/dallas.component';
import { BurbankComponent } from './burbank/burbank.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { DcComponent } from './dc/dc.component';
import { SeattleComponent } from './seattle/seattle.component';
import { SanJoseComponent } from './san-jose/san-jose.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'SanJose', component: SanJoseComponent },
  { path: 'Seattle', component: SeattleComponent },
  { path: 'DC', component: DcComponent },
  { path: 'Chicago', component: ChicagoComponent },
  { path: 'Burbank', component: BurbankComponent },
  { path: 'Dallas', component: DallasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
