import { NextResponse } from "next/server";
import db from "../../../lib/db";

export async function POST(request) {
  try {
    const {name} = await request.json();

    const brand = await db.brand.create({ 
      data: {name}
    })
    
    return NextResponse.json(brand);
  }
  catch(error){
    console.log(error);
    return NextResponse.json({
      error,
      message: 'Failed to create a brand'
    }, {
      status: 500
    });
  }

}