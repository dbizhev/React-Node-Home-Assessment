export interface IJob {
  job_id: number;
  title: string;
  price: number;
  cover_image: string;
}

export interface IOrder {
  job_id: number;
  active: boolean;
  completed: boolean;
}


export interface IJobsWithOrders extends IJob {
orders: IOrder[]
}