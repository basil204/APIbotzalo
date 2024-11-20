// models/zaloModel.js
const { Zalo, MessageType } = require("zca-js");

const zaloConfig = {
  cookie:
    "_ga=GA1.2.629126569.1732096434; _gid=GA1.2.76076698.1732096434; _ga_RYD7END4JE=GS1.2.1732096434.1.1.1732096435.59.0.0; _zlang=vn; zpsid=FnWO.420139826.4.j8HE_8DetYAnkzGxZsZU8lORh1QnMEyHkb3i58tERS_Xpaw8WkLi7-HetY8; zpw_sek=mjCo.420139826.a0.G2jLluA6tz2mLTN9euRVqFcakhkWlFsLuRAbvEdWkEctu8QIwhQdXVZNwhRbk-Bo_uXvOs_aUK0eXr1Yl-7Vq0; __zi=3000.SSZzejyD2un_sgFndLmBcMZNvQk6KGJPFC3lvuG56fSosAoxbWzKspRQuVQH15pOCv_eyvLENzivc-dqC3ap.1; __zi-legacy=3000.SSZzejyD2un_sgFndLmBcMZNvQk6KGJPFC3lvuG56fSosAoxbWzKspRQuVQH15pOCv_eyvLENzivc-dqC3ap.1; app.event.zalo.me=1076949210766233979",
  imei: "8de1bcf9-d29b-4056-8f56-fbd71ef4cae8-f51bb482c660d0eeadd1f058058a2b35",
  userAgent:
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
};

const zaloOptions = {
  selfListen: false,
  checkUpdate: true,
};

const zalo = new Zalo(zaloConfig, zaloOptions);

const loginToZalo = async () => {
  try {
    console.log("Đang đăng nhập vào Zalo...");
    const api = await zalo.login();
    console.log("Đăng nhập thành công!");
    return api;
  } catch (error) {
    console.error("Lỗi đăng nhập vào Zalo:", error);
    throw new Error("Không thể đăng nhập vào Zalo");
  }
};

const findUser = async (api, phone) => {
  console.log(`Đang tìm người dùng với số điện thoại: ${phone}`);
  return await api.findUser(phone);
};

const sendMessage = async (api, messageContent, userId) => {
  return await api.sendMessage(messageContent, userId, MessageType.Message);
};

module.exports = {
  loginToZalo,
  findUser,
  sendMessage,
};
