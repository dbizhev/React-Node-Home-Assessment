import React, { useEffect, useState } from "react";
import { fetchJobOrders } from "../utils/helpers";
import { IJob, IOrder } from "../utils/types";

interface JobDetailsProps {
  job: IJob;
}

export default function JobDetails({ job }: JobDetailsProps) {
  const [jobOrders, setJobOrders] = useState<IOrder[] | null>(null);

  const fetchOrders = async () => {
    setJobOrders(null);
    try {
      const orders = await fetchJobOrders(job.job_id);
      setJobOrders(orders);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, [job]);

  console.log(jobOrders);

  const activeOrders = jobOrders?.filter(({ active }) => active);
  const completedOrders = jobOrders?.filter(({ completed }) => completed);

  return (
    <div className="Job-Detail-Section">
      <h2>{job.title}</h2>
      <img src={job.cover_image} alt="job" />
      <p>
        <b>Price:</b> {job.price}
      </p>
      <p>
        <b>Orders Active:</b> 3
      </p>
      <p>
        <b>Orders Completed:</b> 4
      </p>
    </div>
  );
}
