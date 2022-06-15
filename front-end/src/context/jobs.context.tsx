import React, { createContext, useContext, useEffect, useState } from 'react';
import { fetchJobOrders, fetchJobs } from '../utils/helpers';
import { IJob, IJobsWithOrders } from "../utils/types";

interface JobContextProps {
  jobs: IJob[];

  getJob: (jobId: number) => void;
  job: IJobsWithOrders | null;
}

const JobContext = createContext<JobContextProps>({} as JobContextProps);

export const useJobContext = () => useContext(JobContext);

const JobContextProvider: React.FC<{ children: React.ReactElement }> = ({ children }) => {
  const [jobs, setJobs] = useState<IJob[]>([]);

  const [job, setJob] = useState<IJob | null>(null)


  useEffect(() => {
    (async () => {
      try {
        const data = await fetchJobs();
        if (data.length) {
          const jobs: IJob[] = []
          for (const job of data) {
            const orders = await fetchJobOrders(job.job_id);

            const newJob = {
              ...job,
              orders
            }
            jobs.push(newJob)
          }
          setJobs(jobs)

        }
      } catch (error) {
        console.log(error);
      }

    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getJob = (jobId: number) => {
    const foundJob = jobs.find((job) => job.job_id === jobId);
    setJob(foundJob!)
  }




  return (
    <JobContext.Provider value={ { jobs, getJob, job } }>{ children }</JobContext.Provider>
  )
};


export default JobContextProvider;