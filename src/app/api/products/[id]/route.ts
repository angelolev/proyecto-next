// app/api/products/[id]/route.ts
import { products } from "@/data/products";
import { NextResponse } from "next/server";
import { type NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const id = (await params).id;
    // const { id } = params;
    const product = products.find((p) => p.id === Number(id));

    if (!product) {
      return NextResponse.json(
        { message: "Producto no encontrado" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { product, message: "Producto encontrado" },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { message: "Error al cargar el producto" },
      { status: 500 }
    );
  }
}
