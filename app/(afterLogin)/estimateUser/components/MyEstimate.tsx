"use client";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import BlankEstimate from "./BlankEstimate";
import { getTrainerEstimates } from "../layout";
import { sendRequest } from "@/app/api/rootApi";
import MyEstimateCard from "./MyEstimateCard";

export interface MyEstimatePropsU {
  data: {
    estimateId: number;
    name: string;
    price: number;
    ptAddress: string;
  };
}
const fetchMyEstimateU = (id: number | undefined | null) => async () => {
  if (id) {
    return await sendRequest(`user/estimates/${id}`);
  }
};

export default function MyEstimate() {
  const queryClient = useQueryClient();
  const trainerEstimates: getTrainerEstimates | undefined | null =
    queryClient.getQueryData(["trainerEstimates"]);

  const { data, isLoading } = useQuery<MyEstimatePropsU>({
    queryKey: ["myEstimateU"],
    queryFn: fetchMyEstimateU(trainerEstimates?.pages[0].myEstimateId),
    enabled: !!trainerEstimates?.pages[0].myEstimateId,
  });

  return (
    <div className="">
      {data?.data ? <MyEstimateCard data={data} /> : <BlankEstimate />}
    </div>
  );
}
