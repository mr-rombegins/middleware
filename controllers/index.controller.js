const welcome = (req, res) => {
  res.send("Welcome!");
};

const greet = (req, res) => {
  res.send("Hello, Everyone");
};

const protected = (req, res) => {
  res.send("You can see this because you are authenticated.");
};

module.exports = {
  welcome,
  greet,
  protected,
};
