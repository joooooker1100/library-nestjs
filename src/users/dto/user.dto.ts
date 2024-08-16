import {IsAlpha, IsNotEmpty, IsNumber, IsString } from "class-validator";

import { UserInterface } from "../interfaces/user.interface";


export class UserDto implements UserInterface{
    @IsString()
    @IsNotEmpty()
    public name: string;
    @IsString()
    @IsNotEmpty()
    public lastName: string;
    @IsNumber()
    @IsNotEmpty()
    public code: number;
    @IsNumber()
    @IsNotEmpty()
    public mobile: number;
}
