import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Upload} from "../modal/upload";
import {RespostaUpload} from "../modal/resposta-upload";

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  url = '/api/upload';

  constructor(private http: HttpClient) { }

  uploadFile(upload: Upload): Observable<RespostaUpload> {
    return this.http.post<RespostaUpload>(this.url, upload)
  }
}
