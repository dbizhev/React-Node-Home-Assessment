import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import JobDetails from '../components/JobDetails';
import JobListing from '../components/JobListing';
import { useJobContext } from '../context/jobs.context';

const JobListingPage = () => {
  const { jobs, getJob, job } = useJobContext()

  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  useEffect(() => {
    if (id) {
      getJob(+id)
    } else {
      getJob(1)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, jobs]);

  const goToNextJob = () => {
    if (+id! === jobs.length) {
      navigate("/1")
    } else if (!id) {
      navigate(`/1`)
    } else {
      navigate(`/${+id! + 1}`)
    }

  };

  const goToPreviousJob = () => {
    navigate(-1)
  };

  if (!jobs.length) return <div className="Loading-View">Loading...</div>;
  if (!job) return <p>Waiting for job...</p>

  return (
    <div className="App">
      <div className="App-Body">
        <div className="App-Card">
          { !!jobs.length && <JobDetails /> }
          <JobListing />
        </div>
        <div className="App-Footer">
          <button onClick={ goToPreviousJob } className="App-Link">
            Previous
          </button>
          <button onClick={ goToNextJob } className="App-Link">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default JobListingPage
