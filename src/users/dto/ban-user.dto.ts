/* eslint-disable prettier/prettier */
import { IsNumber, IsString } from "class-validator";
export class BanUserDto {
    @IsNumber({}, {message: "userId ust be a number"})
    readonly userId: number;

    @IsString({message: "banReason must be a string"})
    readonly banReason: string;
}