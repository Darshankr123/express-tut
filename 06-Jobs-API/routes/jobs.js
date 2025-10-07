const { Router } = require("express");
const {
  getAllJobs,
  creaeteJob,
  getJob,
  updateJob,
  deleteJob,
} = require("../controllers/jobs");

const jobsRouter = Router();

jobsRouter.route("/").get(getAllJobs).post(creaeteJob);
jobsRouter.route("/:id").get(getJob).patch(updateJob).delete(deleteJob);

module.exports = jobsRouter;
