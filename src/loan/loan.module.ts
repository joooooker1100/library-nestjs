import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { BookModule } from "src/books/book.module";
import { loanSchema, loanSchemaName } from "src/schema/loan.schema";
import { UserModule } from "src/users/user.module";
import { LoanController } from "./controllers/loan.controller";
import { LoanService } from "./services/loan.service";

@Module({
    imports: [MongooseModule.forFeature([{ name: loanSchemaName, schema: loanSchema }]),
    BookModule,UserModule],
    controllers: [LoanController],
    providers: [LoanService],
})
export class LoanModule {}