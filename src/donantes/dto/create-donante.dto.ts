import { IsString, IsUrl } from 'class-validator';

export class CreateDonanteDto {
  @IsString()
  id: string;

  @IsString()
  nombre: string;

  @IsString()
  descripcion: string;

  @IsUrl()
  logo: string;

  @IsUrl()
  url: string;
}
