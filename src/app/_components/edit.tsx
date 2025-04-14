"use client";

import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";
import React from "react";

const Edit = ({ id }: { id: string }) => {
  return (
    <Button size="sm" variant="outline">
      <Pencil className="w-4 h-4 mr-1" />
      Edit
    </Button>
  );
};

export default Edit;
