import { IsString, IsNumber } from 'class-validator';

export class CreateSkillDto {
    @IsString()
    id: string;
    @IsString()
    name: string;
    @IsNumber()
    porcentage: number;
}
