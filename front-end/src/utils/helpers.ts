import { IJob, IOrder } from "./types";

export const fetchJobs = async () =>
  fetch("/list")
    .then((response) => response.json())
    .then((data) => {
      return data as IJob[];
    });

export const fetchJobOrders = async (jobId: number) =>
  fetch(`/orders/${jobId}`)
    .then((response) => response.json())
    .then((data) => {
      return data as IOrder[];
    });
