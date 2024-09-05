import { NextResponse } from "next/server";
import db from "../../../lib/db";

export async function POST(request) {
  try {
    const {name, location, warehouseType, description} = await request.json();

    const warehouse = await db.warehouse.create({
      data: {name, location, warehouseType, description}
    })

    return NextResponse.json(warehouse);
  }
  catch(error){
    console.log(error);
    return NextResponse.json({
      error,
      message: 'Failed to create a warehouse'
    }, {
      status: 500
    });
  }

}