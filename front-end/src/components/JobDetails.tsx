import React from "react";
import { IJob } from "../utils/types";

interface JobDetailsProps {
  job: IJob;
}

export default function JobDetails({ job }: JobDetailsProps) {
  return (
    <div className="Job-Detail-Section">
      <h2>{job.title}</h2>
      <img src={job.cover_image} alt="job" />
      <p>
        <b>Price:</b> {job.price}
      </p>
      <p>
        <b>Orders Active:</b> 3
      </p>
      <p>
        <b>Orders Completed:</b> 4
      </p>
    </div>
  );
}
