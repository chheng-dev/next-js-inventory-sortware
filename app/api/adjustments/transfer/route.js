import { NextResponse } from "next/server";
import db from "../../../../lib/db";

export async function POST(request) {
  try {
    const {transferStockQty, warehouseId, recievingBrandId, adjustmentNotes} = await request.json();

    const transferStockAdjustment = await db.transferStockAdjustment.create({ 
      data: {transferStockQty, warehouseId, recievingBrandId, adjustmentNotes}
    })
    return NextResponse.json(transferStockAdjustment);
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