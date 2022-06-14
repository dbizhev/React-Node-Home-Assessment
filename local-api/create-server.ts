import axios from 'axios';
import express from "express";
import { IJob } from './interface/list.interface';

// This is the API-Service that provides the job/order data
// Endpoints are as follows
// GET /list
// GET /job/:jobId
// GET /orders/:jobId
const API_SERVICE = 'https://takehome-remote-source-api.herokuapp.com'

const createServer = function () {
  const app = express()
  let jobs = null as unknown as IJob;

  (async () => {
    try {
      const { data } = await axios.get(API_SERVICE + "/list")
      jobs = data;

    } catch (error) {
      throw error
    }
  })()




  /*
   * Candidate will finish the implementation of this endpoint
   *
   */
  app.get('/list', (req, res) => {
    try {
      console.log(jobs);
      return res.status(200).send(jobs)
    } catch (error) {
      res.status(500).send(error)
    }
  })

  /*
   * Candidate will finish the implementation of this endpoint
   *
   */
  app.get('/job/:jobId', async (req, res) => {
    res.send('Currently Not Implemented')
  })

  app.get('/orders/:jobId', async (req, res) => {
    try {
      const { data } = await axios.get(`${API_SERVICE}/orders/${req.params.jobId}`);
      if (!data) return res.status(404).send(`No record found`);
      res.status(200).json(data)
    } catch (error) {
      res.send(error)
    }
  })

  return app
}

export default createServer;
