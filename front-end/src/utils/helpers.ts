import { IJob, IOrder } from "./types";
import axios from "axios";

export const fetchJobs = async (): Promise<IJob[]> => {
	try {
		const { data } = await axios.get("/list");
		return data as IJob[];
	} catch (error) {
		console.log(error);
		return [] as IJob[];
	}
};

export const fetchJobOrders = async (jobId: number): Promise<IOrder[]> => {
	try {
		const { data } = await axios.get(`/orders/${jobId}`);
		return data as IOrder[];
	} catch (error) {
		console.log(error);
		return [] as IOrder[];
	}
};
