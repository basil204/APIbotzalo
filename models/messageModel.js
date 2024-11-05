// models/messageModel.js
const axios = require("axios");
const fs = require("fs");
const path = require("path");

const saveImage = async (imagePath) => {
  const response = await axios.get(imagePath, { responseType: "arraybuffer" });
  const imagePathToSave = path.join(__dirname, "..", "scr", "anh.jpg");
  fs.writeFileSync(imagePathToSave, response.data);
  return imagePathToSave;
};

module.exports = {
  saveImage,
};
