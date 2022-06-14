import axios from 'axios';
import { IJob } from './interface/list.interface';

export const API_SERVICE = 'https://takehome-remote-source-api.herokuapp.com'

let jobs = null as unknown as IJob[];

export const loadJobs = async () => {
  try {
    const { data } = await axios.get(API_SERVICE + "/list")
    jobs = data;

  } catch (error) {
    throw error
  }
}

export { jobs }