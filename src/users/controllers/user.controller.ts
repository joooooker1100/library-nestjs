import { Body, Controller, Get, Post } from "@nestjs/common";
import { Delete, Param, Put } from "@nestjs/common/decorators/http";
import { UserDto } from "../dto/user.dto";
import { UserService } from "../services/user.service";
@Controller('users')
export class UserController{

    constructor(private userService:UserService){}
   @Post("")
   public async createUser(@Body() user : UserDto){
    await this.userService.createUser(user)
   }
   @Get(":id")
   public async getUser(@Param("id") id: string) {
    return await this.userService.getUser(id);
    
   }
   @Delete(":id")
   public async deleteUser(@Param("id") id: string){
    await this.userService.deleteUser(id)
   }
   @Put(":id")
   public async editUser(@Param("id") id: string, @Body() user : UserDto){
        await this.userService.updateUser(id,user)
   }
   @Get()
   public async getAllUser(){
    return await this.userService.getAllUser();
   }
} 