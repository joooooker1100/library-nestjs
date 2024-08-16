import { Schema } from "mongoose"
import { v4 as uuidv4 } from 'uuid';

export const loanSchemaName:string = "loans" 
export const loanSchema = new Schema(
    {
        _id:{type : String,default:uuidv4},
        bookId :{type :String, required:true },
        userId:{type:String , required:true},
        loanDate:{type:Date , default:Date.now},
        isLoaned: { type: Boolean, default: false },
        resetDate:{type:Date }
    }
)