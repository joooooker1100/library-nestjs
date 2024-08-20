import * as dotenv from 'dotenv'
dotenv.config()
export const environment ={
    mongoDbUrl:process.env.MONGODB_URL
}
