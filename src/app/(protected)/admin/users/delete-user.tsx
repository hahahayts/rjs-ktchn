"use client";

import { Button } from "@/components/ui/button";
import { deleteUserById } from "@/data/user";
import { Trash2 } from "lucide-react";
import React from "react";

export const DeleteUser = ({ id }: { id: string }) => {
  return (
    <Button
      size="sm"
      variant="outline"
      className="h-8 w-8 p-0 text-red-600 hover:bg-red-50 border-red-200"
      onClick={() => {
        confirm("Are you sure you want to delete this user?") &&
          deleteUserById(id);
      }}
    >
      <Trash2 className="h-4 w-4" />
    </Button>
  );
};
