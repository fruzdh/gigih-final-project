const { registerService, loginService } = require("../services/user.service");
const { textValidation } = require("../helpers/validation/text");
const { colorValidation } = require("../helpers/validation/color");

const registerController = async (req, res) => {
  try {
    const { username, password, profileColor } = req.body;
    textValidation({ username: username, password: password });
    colorValidation("profileColor", profileColor);

    const data = await registerService(username, password, profileColor);
    res.status(201).json({
      status: "success",
      data: data,
    });
  } catch (e) {
    res.status(e.errorCode || 500).json({
      status: "fail",
      message: e.errorCode ? e.message : "something wrong from our side",
    });
  }
};

const loginController = async (req, res) => {
  try {
    const { username, password } = req.body;
    textValidation({ username: username, password: password });

    const data = await loginService(username, password);
    res.status(200).json({
      status: "success",
      data: data,
    });
  } catch (e) {
    res.status(e.errorCode || 500).json({
      status: "fail",
      message: e.errorCode ? e.message : "something wrong from our side",
    });
  }
};

module.exports = { registerController, loginController };