const { User } = require("../../../models");
const bcrypt = require("bcryptjs");

module.exports = async (req, res) => {
  const { email, password } = req.body;
  let user = await User.findOne({
    where: { email },
  });
  if (!user || !bcrypt.compareSync(password, user.password)) {
    // condition if user not found or wrong password
    res.status(404).json({
      success: false,
      message: "user not found",
      data: null,
    });
  }
  delete user.password;
  res.status(200).json({
    success: true,
    message: "login success",
    data: user,
  });
};
