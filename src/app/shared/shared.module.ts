import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { TimeagoModule } from 'ngx-timeago';


const Modoules=[
  NgSelectModule,
  TimeagoModule

]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...Modoules
  ],
  exports:[...Modoules]
})
export class SharedModule { }
