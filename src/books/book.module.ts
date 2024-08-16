import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { bookSchema, bookSchemaName } from "src/schema/book.schema";
import { BookController } from "./controllers/book.controller";
import { BookService } from "./servises/book.service";

@Module({
    imports:[MongooseModule.forFeature([
        {schema:bookSchema,
        name:bookSchemaName
        }
    ])
],  controllers: [BookController],
    providers: [BookService],
    exports: [MongooseModule,BookService],
})
export class BookModule{

}