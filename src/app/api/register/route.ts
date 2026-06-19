import prisma from "@/app/libs/prismadb";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { email, name, password } = body;

    if (!email || !password || !name) {
      return NextResponse.json(
        { message: "تمام فیلدها الزامی هستند" },
        { status: 400 },
      );
    }

    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {
      return NextResponse.json(
        { message: "این ایمیل قبلا ثبت شده است" },
        { status: 400 },
      );
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
      data: {
        email,
        name,
        hashedPassword,
        role: "user",
      },
    });

    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    console.log("REGISTER_ERROR", error);

    return NextResponse.json(
      { message: "خطایی در سرور رخ داده است" },
      { status: 500 },
    );
  }
}
