import { ApiService } from './services/api.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TimeagoModule } from 'ngx-timeago';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    TimeagoModule.forRoot()
  ],
  providers: [
    ApiService
  ]
})
export class CoreModule { }
