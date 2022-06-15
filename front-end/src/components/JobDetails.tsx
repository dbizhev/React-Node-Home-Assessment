import { useJobContext } from '../context/jobs.context';



export default function JobDetails() {
  const { job } = useJobContext()


  if (!job) return <p>Loading</p>
  const activeOrders = job.orders.filter(({ active }) => active).length;
  const completedOrders = job.orders.filter(({ completed }) => completed).length;

  return (
    <div className="Job-Detail-Section">
      <h2>{ job?.title }</h2>
      <img src={ job?.cover_image } alt="job" />
      <p>
        <b>Price:</b> { job?.price }
      </p>
      <p>
        <b>Orders Active:</b> { activeOrders }
      </p>
      <p>
        <b>Orders Completed:</b> { completedOrders }
      </p>
    </div>
  );
}
