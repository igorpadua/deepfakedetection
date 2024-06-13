import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Upload} from "../modal/upload";

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  url = '/api/upload';

  constructor(private http: HttpClient) { }

  uploadFile(upload: Upload): Observable<Upload> {
    return this.http.post<Upload>(this.url, upload)
  }
}
