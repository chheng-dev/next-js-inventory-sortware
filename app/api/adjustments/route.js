import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const {transferStockQty, givingWarehouseId, recievingBrandId, adjustmentNotes} = await request.json();

    const warehouse = {transferStockQty, givingWarehouseId, recievingBrandId, adjustmentNotes}; 
    console.log(warehouse);

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