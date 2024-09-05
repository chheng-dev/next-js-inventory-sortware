import { NextResponse } from "next/server";
import db from "../../../lib/db";

export async function POST(request) {
  try {
    const { name, phone, email, address, contactPerson, supplierCode, paymentTerm, taxID, notes } = await request.json();

    // Ensure db.supplier is correctly referenced and exists
    if (!db.supplier) {
      throw new Error("Supplier model is not defined in db.");
    }

    const supplier = await db.supplier.create({
      data: {
        name,
        phone,
        email,
        address,
        contactPerson,
        supplierCode,
        paymentTerm,
        taxID,
        notes
      }
    });

    return NextResponse.json(supplier);
  } catch (error) {
    console.error("Error creating supplier:", error);
    return NextResponse.json(
      {
        error: error.message || "Unknown error",
        message: "Failed to create a supplier",
      },
      { status: 500 }
    );
  }
}
