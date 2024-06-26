"use client";
import { useMutation } from "@tanstack/react-query";
import { sendRequest } from "@/app/api/rootApi";
import { useRouter } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";
export const useSubmitTrainer = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: FormData) => {
      const response = await sendRequest(`trainer/estimates`, "post", data);
      return response;
    },
    onSuccess(response) {
      queryClient.invalidateQueries({
        queryKey: ["immeEstimateU"],
        refetchType: "all",
      });
      router.push("/");
    },
    onError(error) {
      console.log("error", error);
    },
  });
};
