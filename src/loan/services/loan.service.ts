import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { BookService } from "src/books/servises/book.service";
import { loanSchemaName } from "src/schema/loan.schema";
import { UserService } from "src/users/services/user.service";
import { LoanModel } from "../loan.model";

@Injectable()
export class LoanService{
    constructor(@InjectModel(loanSchemaName) private readonly loanModel: Model<LoanModel>,
    private readonly bookService :BookService,
    private readonly userService:UserService ) {}


    private async checkIfAnyLoaned(bookId: string ): Promise<boolean> {
        const existingLoans = await this.loanModel.find({ bookId});
        return existingLoans.some(loan => loan.isLoaned);
    }
    async createLoan(bookId: string, userId: string) {
        
        const[isAnyLoaned ,book,user] = await Promise.all([
            this.checkIfAnyLoaned(bookId),
            this.bookService.getBook(bookId),
            this.userService.getUser(userId)
        ])

        if (!book) {
            console.log('Book not found.');
            return;
        }
        if (!user) {
            console.log('Book not found.');
            return;
        }
        

        if (isAnyLoaned) {
            console.log('This book is already loaned out.');
        }else{
            const newLoan = new this.loanModel({ bookId, userId, isLoaned: true });
            return await newLoan.save();
            }
        
    }
    async resetLoanStatus(bookId: string) {
        const isAnyLoaned= await this.checkIfAnyLoaned(bookId)
        if (isAnyLoaned) {
            return await this.loanModel.updateMany({ bookId }, { isLoaned: false, resetDate: Date.now() });
        } else {
            console.log('No loans to reset.');
        }
    }
}