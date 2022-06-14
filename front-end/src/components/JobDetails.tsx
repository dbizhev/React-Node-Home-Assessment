import React, { useCallback, useEffect, useState } from "react";
import { fetchJobOrders } from "../utils/helpers";
import { IJob, IOrder } from "../utils/types";

interface JobDetailsProps {
  job: IJob;
}

export default function JobDetails({ job }: JobDetailsProps) {
  const [jobOrders, setJobOrders] = useState<IOrder[] | null>(null);

  const fetchOrders = useCallback(async () => {
    setJobOrders(null);
    try {
      const orders = await fetchJobOrders(job.job_id);
      setJobOrders(orders);
    } catch (error) {
      console.log(error);
    }
  }, [job]);

  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

  const activeOrders = jobOrders?.filter(({ active }) => active).length;
  const completedOrders = jobOrders?.filter(
    ({ completed }) => completed
  ).length;

  return (
    <div className="Job-Detail-Section">
      <h2>{job.title}</h2>
      <img src={job.cover_image} alt="job" />
      <p>
        <b>Price:</b> {job.price}
      </p>
      <p>
        <b>Orders Active:</b> {activeOrders}
      </p>
      <p>
        <b>Orders Completed:</b> {completedOrders}
      </p>
    </div>
  );
}
