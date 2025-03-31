import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: "600",
});

export const Header = ({ label }: { label: string }) => {
  return (
    <h1
      className={cn(
        "inline-block mx-auto text-3xl font-semibold",
        font.className
      )}
    >
      {label}
    </h1>
  );
};
