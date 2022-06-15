import { useJobContext } from '../context/jobs.context';


export default function JobListing() {
  const { jobs, job: currentJob } = useJobContext()
  if (!jobs.length) return <p className="NoJobs-Text">No jobs to show</p>;

  return (
    <div className="Jobs-Section">
      <h3 className="Jobs-Header">Jobs in System</h3>
      <hr />
      { jobs.map((job) => {
        const isJobSelected = currentJob?.job_id === job.job_id;
        return (
          <p
            key={ job.job_id }
            className={ `Job-Title ${isJobSelected ? "selected" : ""}` }
          >
            { job.title }
          </p>
        );
      }) }
    </div>
  );
}
