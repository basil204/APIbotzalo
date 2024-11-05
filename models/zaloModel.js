// models/zaloModel.js
const { Zalo, MessageType } = require("zca-js");

const zaloConfig = {
  cookie:
    "_ga=GA1.2.373527398.1726126492; ozi=2000.QOBlzDCV2uGerkFzm09Iq6FTvVt42r3HBDtY_uuBLTKkrUZxEJ0.1; _ga_RYD7END4JE=GS1.2.1726163400.2.1.1726163403.57.0.0; __zi=3000.SSZzejyD6zOgdh2mtnLQWYQN_RAG01ICFjIXe9fEM8WycUodaKPRZNcGwQFRHbw9UvZZfpam.1; __zi-legacy=3000.SSZzejyD6zOgdh2mtnLQWYQN_RAG01ICFjIXe9fEM8WycUodaKPRZNcGwQFRHbw9UvZZfpam.1; _zlang=vn; _gid=GA1.2.1032222532.1730780610; zpsid=Vz7U.420139826.3.R5oxEcVpEhbL832WQ_CwkHA0I8rLmmkANii8ZsbLYLIAY-4PPZoda03pEha; zpw_sek=4De4.420139826.a0.62YFqTb8X1xhcuu7-4Y47g9guNNxSgPOYn3SJeuYp5M1VlLsxHcnBufvjd-8TRayf4OYhJIb_CLvIL23y2-47W; app.event.zalo.me=1076949210766233979",
  imei: "af1defef-e496-4839-985b-23b14a4be011-e8db1a910ee088b469ecfd2b6a9b9da5",
  userAgent:
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36",
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
