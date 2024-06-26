import NextAuth from "next-auth/next";

declare module "next-auth"{
    interface Session{
        user:{
            id : number,
            name : string,
            email : string,
            access_token : string,
            expires_in : string,
        }
    }
}