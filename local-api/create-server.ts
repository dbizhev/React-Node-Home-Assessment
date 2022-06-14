import axios from "axios";
import express from "express";
import { API_SERVICE, jobs } from './jobs.data';

// This is the API-Service that provides the job/order data
// Endpoints are as follows
// GET /list
// GET /job/:jobId
// GET /orders/:jobId

const createServer = function () {
  const app = express();

  app.use(express.static("public"))

  /*
   * Candidate will finish the implementation of this endpoint
   *
   */
  app.get("/list", (req, res) => {
    try {
      return res.status(200).json(jobs);
    } catch (error) {
      res.json(error);
    }
  });

  /*
   * Candidate will finish the implementation of this endpoint
   *
   */
  app.get("/job/:jobId", async (req, res) => {
    try {
      const job = jobs.find((job) => job.job_id === +req.params.jobId);
      if (!job) return res.status(404).json(`No record found`);
      return res.status(200).json(job);
    } catch (error) {
      res.json(error);
    }
  });
  app.get("/orders/:jobId", async (req, res) => {
    try {
      const { data } = await axios.get(
        `${API_SERVICE}/orders/${req.params.jobId}`
      );
      if (!data) return res.status(404).json(`No record found`);
      res.status(200).json(data);
    } catch (error) {
      res.json(error);
    }
  });

  return app;
};

export default createServer;
