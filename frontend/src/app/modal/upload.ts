export enum UploadTipoArquivo {
  select = 'Selecionar',
  Imagem = 'imagem',
  Video = 'video',
}

export interface Upload {
  description: UploadTipoArquivo;
  file_path: string;
}
