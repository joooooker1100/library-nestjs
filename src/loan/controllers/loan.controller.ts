import { Controller, Post, Body, Param, Put } from "@nestjs/common";
import { LoanService } from "../services/loan.service";

@Controller('loans')
export class LoanController {
    constructor(private readonly loanService: LoanService) {}

    @Post()
    async createLoan(@Body('bookId') bookId: string, @Body('userId') userId: string) {
        await this.loanService.createLoan(bookId, userId);
    }

    @Put(':bookId/reset')
    async resetLoanStatus(@Param('bookId') bookId: string) {
        await this.loanService.resetLoanStatus(bookId);
    }
}