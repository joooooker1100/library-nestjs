import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BookModule } from './books/book.module';
import { LoanModule } from './loan/loan.module';
import { UserModule } from './users/user.module';
import { environment } from './environments/environment';

@Module({
  imports: [LoanModule,UserModule,BookModule,MongooseModule.forRoot(environment.mongoDbUrl)],

})
export class LibraryModule {}
