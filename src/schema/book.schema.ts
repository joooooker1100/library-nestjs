import { Schema } from "mongoose";
import { v4 as uuidv4 } from 'uuid';

export const bookSchemaName : string = "books";

export const bookSchema = new Schema({
    _id:{type : String,default:uuidv4},
    bookName :String,
    year :Number,
    author : String,
    Publisher :[String] 
})