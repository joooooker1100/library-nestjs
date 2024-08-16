import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BookModule } from './books/book.module';
import { LoanModule } from './loan/loan.module';
import { UserModule } from './users/user.module';

@Module({
  imports: [LoanModule,UserModule,BookModule,MongooseModule.forRoot('mongodb://127.0.0.1:27017/librarydb')],

})
export class LibraryModule {}
