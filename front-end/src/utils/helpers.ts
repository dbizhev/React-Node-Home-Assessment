export const fetchJobs = async () =>
  fetch("/list")
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
