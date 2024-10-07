import { IsString, IsBoolean } from 'class-validator';

export class CreateLanguageDto {
  @IsString()
  name: string;
  @IsBoolean()
  active: boolean;
}
