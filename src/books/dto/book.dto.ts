import { IsString } from "class-validator";
import { IsArray, IsNotEmpty, IsNumber } from "class-validator";
import { BookInterface } from "../interfaces/book.interface";

export class BookDto implements BookInterface{
    @IsString()
    @IsNotEmpty()
    public bookName: string;
    @IsNumber()
    @IsNotEmpty()
    public year: number;
    @IsString()
    @IsNotEmpty()
    public author: string;
    @IsArray()
    public Publisher: string[];
    
}