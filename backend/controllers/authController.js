const login = async (req, res) => {
  try {
    res.json({
      message: "Login Success ✅",
      user: {
        name: "Demo User",
        email: req.body.email
      }
    });
  } catch (err) {
    res.status(500).json({ message: "Login Failed ❌" });
  }
};

const register = async (req, res) => {
  try {
    res.json({
      message: "Registered Successfully ✅",
      user: {
        name: req.body.name,
        email: req.body.email
      }
    });
  } catch (err) {
    res.status(500).json({ message: "Register Failed ❌" });
  }
};

module.exports = { login, register };