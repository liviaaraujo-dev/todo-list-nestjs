import { IsString } from "@nestjs/class-validator";

export class TodoCreateDto{
    @IsString()
    title: string;

}
