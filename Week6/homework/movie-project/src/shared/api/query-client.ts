import { QueryClient } from "@tanstack/react-query";

const IS_PROD = import.meta.env.PROD;

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      retry: IS_PROD ? 2 : false,
      refetchOnWindowFocus: false,
    },
  },
});
