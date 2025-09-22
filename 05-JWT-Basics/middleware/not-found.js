const notFound = (req, res) => res.status(404).send("Route dose not exists");

module.exports = notFound;
