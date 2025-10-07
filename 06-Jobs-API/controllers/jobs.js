const getAllJobs = (req, res) => {
  res.send("get All jobs");
};

const getJob = (req, res) => {
  res.send("get single job");
};

const creaeteJob = (req, res) => {
  res.send("create a job");
};

const updateJob = (req, res) => {
  res.send("update a job");
};

const deleteJob = (req, res) => {
  res.send("delete a job");
};

module.exports = {
  getAllJobs,
  getJob,
  creaeteJob,
  updateJob,
  deleteJob,
};
