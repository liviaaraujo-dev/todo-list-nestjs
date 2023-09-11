import { IsString, IsBoolean, IsInt } from "@nestjs/class-validator";

export class TodoUpdateDto{
    @IsInt()
    id: number

    @IsString()
    title?: string

    @IsBoolean()
    completed?: boolean
}
