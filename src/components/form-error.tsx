import { TriangleAlertIcon } from "lucide-react";

export const FormError = ({ message }: { message: string | undefined }) => {
  return (
    <div className="flex items-center gap-3 bg-destructive/15  p-3 rounded-sm text-sm text-destructive">
      <TriangleAlertIcon />
      <p>{message}</p>
    </div>
  );
};
