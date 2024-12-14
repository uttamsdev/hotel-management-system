import { toast } from "sonner";

export const handleDelete = async ({ url, setIsLoading, setOpen, refetch }) => {
  try {
    setIsLoading(true);
    const res = await fetch(url, { method: "DELETE" });
    const result = await res.json();
    if (result.success) {
      toast.success(result.message);
      refetch();
    }
    console.log(result);
  } catch (error) {
    console.log(error);
  } finally {
    setIsLoading(true);
    setOpen(false);
  }
};
