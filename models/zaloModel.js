// models/zaloModel.js
const { Zalo, MessageType } = require("zca-js");

const zaloConfig = {
  cookie:
      "_ga=GA1.2.1948762887.1733822261; _gid=GA1.2.795699911.1734577882; _ga_RYD7END4JE=GS1.2.1734577882.2.1.1734577925.17.0.0; _zlang=vn; zpsid=fiVP.420139826.5.GoFSc-fFjmNOdBqSva-t1PyynJ7OVuOsqtU5CvugfrE8wIUlwrCuPerFjmK; zpw_sek=zZZ5.420139826.a0.BpmytqCw7cnnwHHrOZeUR3WOUmTX03mhENXAGtfjM0vtRqOe4bLpD2LeK2uq1oDEFavxV1LOkFpfEm3Z85qUR0; __zi=3000.SSZzejyD6zOgdh2mtnLQWYQN_RAG01ICFjIXe9fEM8WycUodaKPRZNcGwQBUJrwCU9_fgJWp.1; __zi-legacy=3000.SSZzejyD6zOgdh2mtnLQWYQN_RAG01ICFjIXe9fEM8WycUodaKPRZNcGwQBUJrwCU9_fgJWp.1; ozi=2000.SSZzejyD6zOgdh2mtnLQWYQN_RAG01ICFjMXe9fFM8yxdUMWbazJY32TggMJIHo1DPohgfD25eK.1; app.event.zalo.me=1076949210766233979",
  imei: "c36f2211-19b7-4898-acfb-1a4477cff2cb-f51bb482c660d0eeadd1f058058a2b35",
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
