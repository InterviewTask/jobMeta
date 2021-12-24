import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IUrlParam } from '../models/url-param.model';

@Injectable(
)
export class UrlParameterHandlerService {
  _UrlParam = new BehaviorSubject<IUrlParam>({external:'',search:'',job_id:''});
  _UrlParam$ = this._UrlParam.asObservable();

  // private messageSource = new BehaviorSubject('default message');
  // currentMessage = this.messageSource.asObservable();

  constructor() { }

  set UrlParam(state: IUrlParam) {
    this._UrlParam.next(state);
    this._UrlParam$=this._UrlParam.asObservable()

  }
  get UrlParam() {
    return this._UrlParam.value;
  }

  setUrlParam(param: IUrlParam) {
    let pre= this._UrlParam.value;
    let state={
      ...pre,
      ...param
    }
    this._UrlParam.next(state);
  }
}
