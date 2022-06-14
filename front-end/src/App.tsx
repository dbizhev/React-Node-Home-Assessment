import { useEffect, useState } from "react";
import "./App.css";
import JobDetails from "./components/JobDetails";
import JobListing from "./components/JobListing";
import { fetchJobs } from "./utils/helpers";
import { IJob } from "./utils/types";

function App() {
  const [jobs, setJobs] = useState<IJob[]>([]);
  const [jobIndex, setJobIndex] = useState<number>(0);

  useEffect(() => {
    fetchJobs().then((jobs) => {
      console.log(jobs);
    });
  }, []);

  const goToNextJob = () => {
    if (jobIndex === jobs.length - 1) {
      setJobIndex(0);
      return;
    }

    setJobIndex((prev) => prev + 1);
  };

  const goToPreviousJob = () => {
    if (jobIndex === 0) {
      setJobIndex(jobs.length - 1);
      return;
    }

    setJobIndex((prev) => prev - 1);
  };

  const currentJob = jobs[jobIndex];

  return (
    <div className="App">
      <div className="App-Body">
        <header className="App-header">Funnel Rolodex (MiniDash)</header>
        <div className="App-Card">
          {!!jobs.length && <JobDetails job={currentJob} />}
          <JobListing jobs={jobs} currentJob={currentJob} />
        </div>
        <div className="App-Footer">
          <button onClick={goToPreviousJob} className="App-Link">
            Previous
          </button>
          <button onClick={goToNextJob} className="App-Link">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;