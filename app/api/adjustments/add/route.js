import { NextResponse } from "next/server";
import db from "../../../../lib/db";

export async function POST(request) {
  try {
    const {title, addStockQty, notes, recievingWarehouseId} = await request.json();

    const addStockQtyData = await db.addStockAdjustment.create({ 
      data: {title, addStockQty, notes, recievingWarehouseId}
    })

    return NextResponse.json(addStockQtyData);
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