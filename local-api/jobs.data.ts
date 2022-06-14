import axios from 'axios';
import { IJob } from './interface/list.interface';

export const API_SERVICE = 'https://takehome-remote-source-api.herokuapp.com'

let jobs = null as unknown as IJob[];

export const loadJobs = async () => {
  try {
    const { data }: { data: IJob[] } = await axios.get(API_SERVICE + "/list")

    jobs = data.map((job) => ({ ...job, cover_image: `http://localhost:3050/${job.cover_image}` }));

  } catch (error) {
    throw error
  }
}

export { jobs }