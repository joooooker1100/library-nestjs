import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { bookSchemaName } from "src/schema/book.schema";
import { BookInterface } from "../interfaces/book.interface";
import { BookModel } from "../book.model";



@Injectable()
export class BookService{
 constructor(
   @InjectModel(bookSchemaName)private bookModel: Model<BookModel>
 ){}
 public async createBook(book : BookInterface){
   await this.bookModel.create(book)
 }
 public async updateBook(id:string, book : BookInterface){
   await this.bookModel.updateOne({ _id:id },{$set:book})
 }
 public async deleteBook(id:string){
   await this.bookModel.deleteOne({ _id:id })
 }
 public async getBook(id:string){
  return await this.bookModel.findOne({ _id:id })
 }
 public async getAllBook(){
  return await this.bookModel.find()
 }
}