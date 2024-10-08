import { NextResponse } from "next/server";
import db from "../../../lib/db";

export async function POST(request) {
  try {
    const {title, abbreviation} = await request.json();

    const unit = await db.unit.create({
      data: {title, abbreviation}
    })

    return NextResponse.json(unit);
  }
  catch(error){
    console.log(error);
    return NextResponse.json({
      error,
      message: 'Failed to create a unit'
    }, {
      status: 500
    });
  }

}