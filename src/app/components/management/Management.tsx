"use client";

import { SafeMenu, SafeUser } from "@/app/types";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import ListMenu from "./ListMenu";

interface HeaderProps {
  currentUser: SafeUser | null;
  itemMenu?: SafeMenu[];
}

const Management: React.FC<HeaderProps> = ({ currentUser, itemMenu }) => {
  const router = useRouter();

  useEffect(() => {
    if (!currentUser || currentUser.role !== "Admin") {
      router.push("/");
    }
  }, [currentUser, router]);

  return (
    <div>
      <ListMenu itemMenu ={itemMenu}/>
    </div>
  );
};

export default Management;
