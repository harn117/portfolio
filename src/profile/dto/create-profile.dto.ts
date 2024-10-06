import { IsString } from "class-validator";

export class CreateProfileDto {
    @IsString()
    name: string;
    @IsString()
    speciality: string;
    @IsString()
    phone: string;
    @IsString()
    address: string;
    @IsString()
    location: string;
}
