import { useState, useCallback } from "react";

export const useTransition = ({ delay = 0 } = {}) => {
  const [isPending, setPending] = useState(false);

  const startTransition = useCallback(
    async (asyncCallBack) => {
      const timeoutId = setTimeout(() => {
        setPending(true);
      }, delay);
      const result = await asyncCallBack();
      clearTimeout(timeoutId);
      setPending(false);
      return result;
    },
    [delay],
  );

  return [startTransition, isPending];
};
