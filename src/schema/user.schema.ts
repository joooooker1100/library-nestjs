import { Schema } from "mongoose";
import { v4 as uuidv4 } from 'uuid';

export const userSchemaName : string = "users";

export const userSchema = new Schema({
    _id:{type : String,default:uuidv4},
    name :String,
    lastName :String,
    code : Number,
    mobile :Number 
})