import axios from 'axios';
import { IJob, IOrder } from './interface/list.interface';

export const API_SERVICE = 'https://takehome-remote-source-api.herokuapp.com'

let jobs = null as unknown as IJob[];

export const loadJobs = async () => {
  try {
    const { data }: { data: IJob[] } = await axios.get(API_SERVICE + "/list")

    jobs = data.map((job) => ({ ...job, cover_image: `http://localhost:3050/${job.cover_image}` }));

    Promise.all(
      jobs.map(async (job) => {
        const { data }: { data: IOrder[] } = await axios.get(`${API_SERVICE}/orders/${job.job_id}`);

        return {
          ...job,
          orders: data.map((order) => ({
            job_id: order.job_id,
            active: order.active,
            completed: order?.completed || order?.complete
          })) as IOrder[]
        }
      })

    ).then((data) => jobs = data).catch((error) => { throw error })


  } catch (error) {
    throw error
  }
}

export { jobs }
