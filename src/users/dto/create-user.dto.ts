/* eslint-disable prettier/prettier */
import { IsEmail, isEmail, IsString, Length} from 'class-validator';

export class CreateUserDto {
  @IsString({message: "Email must be a string"})
  @IsEmail({}, {message: "Email is incorrect"})
  readonly email: string;  
  
  @IsString({message: "Password must be a string"})
  @Length(6, 18, {message:  "Password length must be >6 and <18"})
  readonly password: string;
}
