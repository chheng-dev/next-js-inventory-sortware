import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const {
      warehouseTitle, 
      categoryId, 
      sku,
      barcode,
      quantity, 
      unitId, 
      brandId, 
      supplierId,
      buyingPrice, 
      sellingPrice,
      reOrderPoint,
      warehouseId,
      weight,
      demension,
      taxRate,
      description,
      note,
      imageUrl
    } = await request.json();

    const item = {
      warehouseTitle,
      categoryId, 
      sku,
      barcode,
      quantity, 
      unitId, 
      brandId, 
      supplierId,
      buyingPrice, 
      sellingPrice,
      reOrderPoint,
      warehouseId,
      weight,
      demension,
      taxRate,
      description,
      note,
      imageUrl
    }; 
    console.log(item);

    return NextResponse.json(item);
  }
  catch(error){
    console.log(error);
    return NextResponse.json({
      error,
      message: 'Failed to create a item'
    }, {
      status: 500
    });
  }

}