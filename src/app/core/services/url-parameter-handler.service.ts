import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable(
)
export class UrlParameterHandlerService {
  _UrlParam = new BehaviorSubject<string>("");
  constructor() { }

  set UrlParam(state: string) {
    this._UrlParam.next(state);
  }
  get UrlParam() {
    return this._UrlParam.value;
  }
}
