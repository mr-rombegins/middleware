const authRequire = (req, res, next) => {
  const body = req.body;
  console.log(body);

  if (body.username !== "Prince" || body.password !== "secret") {
    return res.send("Invalid credential");
  }

  next();
};

module.exports = {
  authRequire,
};
