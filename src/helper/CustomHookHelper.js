import { useState } from "react";

export const useTransition = () => {
  const [isPending, setPending] = useState(false);

  const startTransition = async (asyncCallBack) => {
    setPending(true);
    const result = await asyncCallBack();
    setPending(false);
    return result;
  };
  return [startTransition, isPending];
};
