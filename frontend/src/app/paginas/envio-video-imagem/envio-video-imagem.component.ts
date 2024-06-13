import {Component} from '@angular/core';
import {NgbAccordionButton} from "@ng-bootstrap/ng-bootstrap";
import {Upload, UploadTipoArquivo} from "../../modal/upload";
import {FormsModule} from "@angular/forms";
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {UploadService} from "../../service/upload.service";
import {catchError, EMPTY} from "rxjs";
import {ToastrService} from "ngx-toastr";
import {File} from "node:buffer";
import {RespostaUpload} from "../../modal/resposta-upload";

@Component({
  selector: 'app-envio-video-imagem',
  standalone: true,
  imports: [
    NgbAccordionButton,
    FormsModule,
    NgClass,
    NgForOf,
    NgIf,
  ],
  templateUrl: './envio-video-imagem.component.html',
  styleUrl: './envio-video-imagem.component.scss'
})
export class EnvioVideoImagemComponent {

  upload: Upload = {
    description: UploadTipoArquivo.select,
    file_path: ''
  }

  mudouArquivo(event: any) {
    this.upload.file_path = event.target.files[0];
  }

  constructor(private uploadService: UploadService, private toastr: ToastrService) {}

  enviar() {
    this.uploadService.uploadFile(this.upload)
      .pipe(catchError(err => {
        this.toastr.error(err.error.message, err.statusText);
        return EMPTY;
      }))
      .subscribe((res: RespostaUpload) => {
        this.toastr.success(`${res.score}` , res.target);
      })
  }

  protected readonly Object = Object;
  protected readonly UploadTipoArquivo = UploadTipoArquivo;
}
