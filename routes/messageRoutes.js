// routes/messageRoutes.js
const express = require("express");
const { loginToZalo, findUser, sendMessage } = require("../models/zaloModel");
const { saveImage } = require("../models/messageModel");

const router = express.Router();

// API để tìm người dùng và gửi tin nhắn
router.post("/sendmessage", async (req, res) => {
  const { phone, messageContent } = req.body;

  if (!phone || !messageContent) {
    return res
      .status(400)
      .json({ error: "Vui lòng cung cấp số điện thoại và nội dung tin nhắn" });
  }

  try {
    const api = await loginToZalo();
    const user = await findUser(api, phone);

    if (user && user.uid) {
      const sendResult = await sendMessage(api, messageContent, user.uid);
      res.json(sendResult);
    } else {
      res.status(404).json({ error: "Không tìm thấy người dùng." });
    }
  } catch (error) {
    res.status(500).json({ error: "Đã xảy ra lỗi khi gửi tin nhắn" });
  }
});

// API để lưu hình ảnh và gửi tin nhắn với hình ảnh
router.post("/saveimg", async (req, res) => {
  const { imagePath, phone, msg } = req.body;

  if (!imagePath || !phone || !msg) {
    return res
      .status(400)
      .json({
        error:
          "Vui lòng cung cấp đường dẫn hình ảnh, số điện thoại và nội dung tin nhắn",
      });
  }

  try {
    const imagePathToSave = await saveImage(imagePath);
    const api = await loginToZalo();
    const user = await findUser(api, phone);

    if (user && user.uid) {
      const sendResult = await sendMessage(
        api,
        {
          msg: msg,
          attachments: [imagePathToSave],
        },
        user.uid
      );

      res.status(200).json({
        message: "Image saved and message sent successfully!",
        imagePath: imagePathToSave,
        sendResult: sendResult,
      });
    } else {
      res.status(404).json({ error: "Không tìm thấy người dùng." });
    }
  } catch (error) {
    res.status(500).json({
      message: "Đã xảy ra lỗi khi lưu hình ảnh hoặc gửi tin nhắn.",
      error: error.message,
    });
  }
});

module.exports = router;
