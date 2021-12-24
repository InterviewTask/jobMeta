import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { TimeagoModule } from 'ngx-timeago';
import { FileUploadService } from './services';


const Modoules=[
  NgSelectModule,
  TimeagoModule,


]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    ...Modoules
  ],
  providers:[
    FileUploadService
  ],
  exports:[...Modoules]
})
export class SharedModule { }
