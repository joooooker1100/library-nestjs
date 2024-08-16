import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { userSchema, userSchemaName } from "src/schema/user.schema";
import { UserController } from "./controllers/user.controller";
import { UserService } from "./services/user.service";


@Module({
    imports:[MongooseModule.forFeature([
        {schema:userSchema,
        name:userSchemaName
        }
    ])
],
    controllers: [UserController],
    providers: [UserService],
    exports:[UserService]
})
export class UserModule{}