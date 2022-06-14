import { IJob, IOrder } from "./types";
import axios from "axios";

export const fetchJobs = async () =>
  axios.get("/list").then(({ data }) => {
    return data as IJob[];
  });

export const fetchJobOrders = async (jobId: number) =>
  axios.get(`/orders/${jobId}`).then(({ data }) => {
    return data as IOrder[];
  });
