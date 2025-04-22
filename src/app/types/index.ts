import {  Menu, User } from "@prisma/client";


export type SafeUser = Omit<
  User,
  "createdAt" | "updatedAt"
> & {
  createdAt: string | null;
  updatedAt: string | null;
};
export type SafeMenu = Omit<
  Menu,
  "createdAt" 
> & {
  createdAt: string ;
};