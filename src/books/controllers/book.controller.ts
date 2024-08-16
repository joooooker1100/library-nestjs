import { Body, Controller, Get, Post } from "@nestjs/common";
import { Delete, Param, Put } from "@nestjs/common/decorators/http";
import { BookDto } from "../dto/book.dto";
import { BookService } from "../servises/book.service";

@Controller('books')
export class BookController{

    constructor(private bookService:BookService){}
   @Post("")
   public async createBook(@Body() book : BookDto){
    await this.bookService.createBook(book)
   }
   @Get(":id")
   public async getBook(@Param("id") id: string) {
    return await this.bookService.getBook(id);
    
   }
   @Delete(":id")
   public async deleteBook(@Param("id") id: string){
    await this.bookService.deleteBook(id)
   }
   @Put(":id")
   public async editBook(@Param("id") id: string, @Body() book : BookDto){
        await this.bookService.updateBook(id,book)
   }
   @Get()
   public async getAllBooks(){
    return await this.bookService.getAllBook();
   }
} 