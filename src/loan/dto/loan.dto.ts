import { IsString } from "class-validator";
import { LoanInterface } from "../interfaces/loan.interface";

export class LoanDto implements LoanInterface{
    resetDate: Date;
    isLoaned: boolean;
    @IsString()
    bookId: string;
    @IsString()
    userId: string;
    loanDate: Date;
    
}