import { IsString, Length, IsEmail, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @Length(3, 12)
  username: string;

  @IsString()
  @Length(8, 30)
  password: string;

  @IsString()
  @Length(2, 50)
  displayName: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  @IsOptional()
  img: string;

  @IsNotEmpty()
  @IsString()
  bio: string;

  @IsNotEmpty()
  @IsString()
  birth: string;
}
