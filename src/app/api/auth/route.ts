import NextAuth from "next-auth/next";
import nextAuth, { AuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authOptions : AuthOptions = {
    secret: process.env.NO_SECRET,
    providers: []
}

const handler = nextAuth