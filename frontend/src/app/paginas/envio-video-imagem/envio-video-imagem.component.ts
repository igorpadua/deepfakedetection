import {Component} from '@angular/core';
import {NgbAccordionButton} from "@ng-bootstrap/ng-bootstrap";
import {Upload, UploadTipoArquivo} from "../../modal/upload";
import {FormsModule} from "@angular/forms";
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {UploadService} from "../../service/upload.service";

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

  constructor() {}

  enviar() {
  }

  protected readonly Object = Object;
  protected readonly UploadTipoArquivo = UploadTipoArquivo;
}
