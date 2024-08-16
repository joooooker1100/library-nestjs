import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { userSchemaName } from "src/schema/user.schema";
import { UserInterface } from "../interfaces/user.interface";
import { UserModel } from "../user.model";
@Injectable()
export class UserService{
 constructor(
   @InjectModel(userSchemaName)private userModel: Model<UserModel>
 ){}
 private async checkIfAnyUser(code: number ): Promise<boolean> {
  const existingUser = await this.userModel.find({code});
  return existingUser.some(user => user.code);
}

 public async createUser(user : UserInterface){
  const isAnyUser = await (this.checkIfAnyUser(user.code))
  if(isAnyUser){
    console.log("This user exists ")
  }else{

    await this.userModel.create(user)
  }
 }
 public async updateUser(id:string, user : UserInterface){
   await this.userModel.updateOne({ _id:id },{$set:user})
 }
 public async deleteUser(id:string){
   await this.userModel.deleteOne({ _id:id })
 }
 public async getUser(id:string){
  return await this.userModel.findOne({ _id:id })
 }
 public async getAllUser(){
  return await this.userModel.find()
 }
}