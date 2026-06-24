import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  const body = await req.json();
console.log(body);
  const user = await prisma.user.findUnique({
    where: {
      email: body.email,
    },
  });
console.log("user", user);
  if (!user) {
    return NextResponse.json(
      { message: "حساب کاربری با این ایمیل یافت نشد!" },
      { status: 400 },
    );
  }
  if (!user.hashedPassword) {
  return NextResponse.json(
    { message: "رمز عبور برای این حساب ثبت نشده است" },
    { status: 400 }
  );
}
  const isValid = await bcrypt.compare(body.password, user.hashedPassword);
console.log("pass ", user.hashedPassword);
if (!isValid) {
  return NextResponse.json(
    { message: "رمز عبور اشتباه است!" },
    { status: 400 },
  );
}
  const response = NextResponse.json({
    message: "success",
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role:user.role
    },
  });
   response.cookies.set(
     "user",
     JSON.stringify({
       id: user.id,
       name: user.name,
       email: user.email,
       role: user.role,
     }),
     {
       httpOnly: true,
       secure: process.env.NODE_ENV === "production",
       sameSite: "lax",
       path: "/",
       maxAge: 60 * 60 * 24 * 7, // 7 روز
     },
   );
  return response;

}
