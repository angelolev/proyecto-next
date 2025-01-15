import { products } from "@/data/products";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    return NextResponse.json(
      { products, message: "Los productos fueron cargados" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error al cargar los productos" },
      { status: 500 }
    );
  }
}
