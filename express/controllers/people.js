const people = require("../data");

const getPeople = (req, res) => {
  res.status(200).json({ people });
};

const addPeople = (req, res) => {
  const { id, name } = req.body;

  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "Please provide the name" });
  }
  res
    .status(201)
    .json({ success: true, msg: "Success", data: [...people, { id, name }] });
};

const updatePeople = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  if (!id) {
    return res
      .status(400)
      .json({ success: false, msg: "Please provide the id" });
  }

  people.map((item) => {
    if (item.id == id) {
      item.name = name;
    }
  });

  res.status(201).json({
    msg: "user updated successfully",
  });
};

const deletePeople = (req, res) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({ success: false, msg: "please provide the id" });
  }

  const newpeople = people.filter((item) => item.id !== id);
  res.status(200).json({
    success: true,
    msg: "User deleted successfully",
    data: newpeople,
  });
};

module.exports = {
  getPeople,
  addPeople,
  updatePeople,
  deletePeople,
};
