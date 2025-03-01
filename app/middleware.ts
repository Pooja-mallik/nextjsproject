import {NextApiResponse,type NextApiRequest} from "next";
import { NextRequest, NextResponse } from "next/server";
export function middleware(req:NextRequest){
    console.log("middleware");
    return NextResponse.next();
}
