import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(requset: Request) {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return NextResponse.error();
  }
  const body = await requset.json();
  const { title, description, imageSrc, Categorys, price } = body;
  Object.keys(body).forEach((value: any) => {
    if (!body[value]) {
      NextResponse.error();
    }
  });

  const menu = await prisma.menu.create({
    data: {
      title,
      description,
      imageSrc,
      price: parseInt(price, 10),
      Categorys,
      userId: currentUser.id,
    },
  });
  return NextResponse.json(menu);
}
