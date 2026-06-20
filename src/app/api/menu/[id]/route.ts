import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const currentUser = await getCurrentUser();
  if (!currentUser) return NextResponse.error();

  const { id } = await params;
  const body = await req.json();

  const { title, description, imageSrc, Categorys, price } = body;

  const menu = await prisma.menu.update({
    where: { id },
    data: {
      title,
      description,
      imageSrc,
      Categorys,
      price: Number(price),
    },
  });

  return NextResponse.json(menu);
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const currentUser = await getCurrentUser();
  if (!currentUser) return NextResponse.error();

  const { id } = await params;

  try {
    await prisma.menu.delete({
      where: { id },
    });

    return NextResponse.json({ message: "Deleted successfully" });
  } catch (error) {
    return NextResponse.json({ message: "Delete failed" }, { status: 500 });
  }
}
