import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { fetchJobOrders, fetchJobs } from '../utils/helpers';
import { IJob, IOrder, IJobsWithOrders } from "../utils/types";

interface JobContextProps {
  jobs: IJob[];
  orders: IOrder[];
  getOrders: (jobId: number) => void;
}

const JobContext = createContext<JobContextProps>({} as JobContextProps);

export const useJobContext = () => useContext(JobContext);

const JobContextProvider: React.FC<{ children: React.ReactElement }> = ({ children }) => {
  const [jobs, setJobs] = useState<IJob[]>([]);
  const [orders, setOrders] = useState<IOrder[]>([])

  const getJobsWithOrder = useCallback((jobId: number) => {

    const job = jobs.find((job) => job.job_id === jobId);
    if (!job) return null
    console.log({
      ...job,
      orders: orders.filter((order) => order.job_id === job?.job_id)
    });



  }, [orders, jobs])


  useEffect(() => {
    (async () => {
      try {
        const jobs = await fetchJobs();
        setJobs(jobs)
        if (jobs.length) {
          for (const job of jobs) {
            const order = await fetchJobOrders(job.job_id);
            setOrders([...orders, ...order])
          }
        }
      } catch (error) {
        console.log(error);
      }
    })()

  }, [jobs, orders])

  return (
    <JobContext.Provider value={ { jobs, orders, getOrders: getJobsWithOrder } }>{ children }</JobContext.Provider>
  )
};


export default JobContextProvider;