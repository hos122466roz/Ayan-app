// src/app/actions/getCurrentUser.ts
import prisma from "@/app/libs/prismadb";
import { cookies } from "next/headers";


export default async function getCurrentUser() {
    const cookieStore = await cookies();

  const userCookie = cookieStore.get("user");
  const user = userCookie ? JSON.parse(userCookie.value) : null;

  try {
    if (!user?.email) {
      return null;
    }

    const currentUser = await prisma.user.findUnique({
      where: {
        email: user.email,
      },
    });
    if (!currentUser) {
      return null;
    }

    // تبدیل تاریخ‌ها به string برای ارسال به کلاینت
    return {
      ...currentUser,

      updatedAt:
        currentUser.updatedAt?.toISOString() || new Date().toISOString(),
    };
  } catch (error) {
    return null;
  }
}
