import { useState, useCallback } from "react";

export const useTransition = () => {
  const [isPending, setPending] = useState(false);

  const startTransition = useCallback(
    async (asyncCallBack) => {
      setPending(true);
      const result = await asyncCallBack();
      setPending(false);
      return result;
    },
    [],
  );

  return [startTransition, isPending];
};
