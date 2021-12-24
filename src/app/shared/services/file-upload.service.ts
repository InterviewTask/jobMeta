import { HttpClient, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IFileUpload } from '../models';
import { environment } from 'src/environments/environment';

@Injectable()
export class FileUploadService {

  constructor(private httpClient: HttpClient) { }

  postFile(fileToUpload: File): Observable<HttpEvent<IFileUpload>>{
    const formData: FormData = new FormData();
    formData.append('content', fileToUpload);
    return this.httpClient.post<IFileUpload>(`${environment.storageUrl}upload/attachment`, formData, {
      reportProgress:true,
      observe: 'events'
    })

  }
}
