import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateBookmarkDTO {
  @IsString()
  title: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsNotEmpty()
  link: string;
}
