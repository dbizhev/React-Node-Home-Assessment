import axios from "axios";
import express from "express";
import { IJob } from './interface/list.interface';
import { jobs } from './jobs.data';

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
      const result = jobs.map((job) => {
        const { orders, ...rest } = job;
        return rest
      })
      return res.status(200).json(result);
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
      const job = jobs.find((job) => job.job_id === +req.params.jobId) as IJob;
      if (!job) return res.status(404).json(`No record found`);
      const { orders, ...rest } = job;
      return res.status(200).json(rest);
    } catch (error) {
      res.json(error);
    }
  });
  app.get("/orders/:jobId", async (req, res) => {
    try {
      const job = jobs.find((job) => job.job_id === +req.params.jobId) as IJob;
      if (!job) return res.status(404).json(`No record found`);
      const { orders } = job
      res.status(200).json(orders);
    } catch (error) {
      res.json(error);
    }
  });

  return app;
};

export default createServer;
