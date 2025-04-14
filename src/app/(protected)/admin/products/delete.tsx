"use client";

import { Button } from "@/components/ui/button";
import { deleteProductById } from "@/data/products";
import { Trash2 } from "lucide-react";

interface DeleteProps {
  id: string;
}

const Delete = ({ id }: DeleteProps) => {
  return (
    <Button
      onClick={() =>
        confirm("Are you sure you want to delete this product?") &&
        deleteProductById(id)
      }
      size="sm"
      variant="destructive"
    >
      <Trash2 className="w-4 h-4 mr-1" />
      Delete
    </Button>
  );
};

export default Delete;
