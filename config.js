//#ENJOY BRO😍
// Credit: 𝑫𝑹𝑲-𝑹𝑨𝑮𝑵𝑨 by      𝙎-𝙏𝞢𝞜
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "salvatoremrsenku@gmail.com";
global.location = "Port-au-Prince, Haiti";
global.mongodb = process.env.MONGODB_URL || "mongodb+srv://Rayan:<Emmanuel237>@cluster0.8twd0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null"; 
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://testbot_2m27_user:Az7LOxZBevfQ7qiZ2aKDwQ4325uumm4v@dpg-crngb4o8fa8c738fs4b0-a.oregon-postgres.render.com/testbot_2m27";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "America/Port-au-Prince";
global.github = process.env.GITHUB || "https://github.com/Bot-hostin/DRK-RAGNA-1.0";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vakp0UnICVfe3I2Fe72w";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vakp0UnICVfe3I2Fe72w";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/vRR63CN.jpeg,https://i.imgur.com/ovCfp9J.jpeg,https://i.imgur.com/edzo5dj.jpeg";
global.devs = "https://wa.me/50931461936 , https://wa.me/50931461936";
global.sudo = process.env.SUDO || "50955216986;
global.owner = process.env.OWNER_NUMBER || "50949100359";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/yBSoUuw.jpeg,https://i.imgur.com/XrUDzUl.jpeg,https://i.imgur.com/edjZiEx.jpeg,https://i.imgur.com/cdS2R7I.jpeg,https://i.imgur.com/u9FxdwH.jpeg,https://i.imgur.com/HEFIrto.jpeg,https://i.imgur.com/Fc0gIpE.jpeg,https://i.imgur.com/iaJtsma.jpeg,https://i.imgur.com/17yE9Uy.jpeg,https://i.imgur.com/ERGVvpZ.png"
global.waPresence = process.env.WAPRESENCE || " ";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "false";
global.read_status_from = process.env.READ_STATUS_FROM || "false";

global.api_smd = "https://drk-tech-2.onrender.com/;
global.scan = "https://drk-tech-2.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0pSdVV2Y1U3UXdWTGtwck9XTnJqN0JmL0phTzdwSEt0cUtBaHdUT3hsST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUmNVeHRmVGpPN2JWaXVVZTArT3FsRWZNZmxvdGphYVo2Q1hQVXVhU2pSWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZQmk4WEV1WjI4NCtaOW1PajVNa2tyZEtvQWs4Y3d1MkRDYUFJWVRmWTNFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJoeGdhblhFZU82YytXYytmbVdaVmNjdnp4VjBybFdUc2FoQnVtWktsYkZBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtPTlg5QytuZVg1b2xFajQvK3E3V3pnMXVtazFaQTIyUmpkZDh1ZUlkMzQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Inh2NldDZUo2MjM3OWxQTWEwKy96VlQrMVEwbnIyZDZGajRhRk5NUmp6UTA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0diMGowdmdtSGdYMU9QTUFxYXlIM3VFZzBMcG43eEo5a2Vmc3h5NFNtWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0ZTcyt5NkJVNkxtZTg0UjVMUUlCNzR4end4YndvYlliV1lTV2N0Qm9pND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlYZVFiYzRKeWRpZVR0UkhrS1F2eXVXVmc2NWJxTkZEdWtmVVVqNnJsZTRua3RJQ0gyODFGQzRaTFVKME9HR0ZuTmlObVBvZW5QeW9XTHJWeDRaMEJBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTg4LCJhZHZTZWNyZXRLZXkiOiJxYThUaWdHaFlTbEhHbGZJVnJQeXFlcm9hSFZjc1loRFRUNVNMV21PSzY0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjUwOTU1NjU2MTkxQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjczQkE4QjdGNTk1RkNDNDExNzYzODIwNjRGOTI1NzVCIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NDM3NzEzOTR9LHsia2V5Ijp7InJlbW90ZUppZCI6IjUwOTU1NjU2MTkxQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFCQ0YxNDA3OEY3REExMDAwRDQ0QjNCMDgyODQ2MTU2In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NDM3NzEzOTV9LHsia2V5Ijp7InJlbW90ZUppZCI6IjUwOTU1NjU2MTkxQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkExRDc5QTNFQUJBODg3NjlFMDFDQjM0MjQxMjkxNkNFIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NDM3NzEzOTZ9LHsia2V5Ijp7InJlbW90ZUppZCI6IjUwOTU1NjU2MTkxQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjczNjVCNTE2MUIxMTA3MUI4OUY3NkJBQ0M0Njg0NzBGIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NDM3NzEzOTZ9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ik00cVFrV0JEUXN1QnVBTWVuV0hoUlEiLCJwaG9uZUlkIjoiYzMzOThiOTUtMjA1Ni00YjBlLWI4ZTgtZjNkOTY2NWI0ODUxIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJ1YjAyRkluTkdhRnJqZWIvcUpXM1ZTc3l6ND0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNWlMwY2NOaUFWbHF4eTUvWngvdVFkd2srbkU9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiUUNBMVM1TE0iLCJtZSI6eyJpZCI6IjUwOTU1NjU2MTkxOjJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J+MueKDn+KDovCfkZEgxJDDhvCdmqrwnZCK4LyS8J2Zji3wnZmP8J2eovCdnpzwn4y54oOf4oOi8J+RkW4yIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKeit5NmtCRVBPdHY3OEdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ5V3Q3OUZtelNkcTdiNk5yWmx5NFcyb2tTa0lCRC9BOWpTalFsRE5JbGl3PSIsImFjY291bnRTaWduYXR1cmUiOiJHNGNHcHA4cWhLSDk5Q090QW9hUTF2VzduR1dqN251bUdRMlFvODYyR1o2MnpJNGJEVExSWTI3WHd5eVc0RVMxalIycWpOWVdORDBicitUdzdoNlZDUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiOTJ6Q041RFFRV1hRRW16SmI0YXV6a0NVckRhcEowbUJTa2tnYTFkeTZNWmh4QW9QODRuODErQUw5WWVEaFYwSlpSa1gzNkxqZlAzMnZ3d2luSG9mQVE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI1MDk1NTY1NjE5MToyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmNscmUvUlpzMG5hdTIramEyWmN1RnRxSkVwQ0FRL3dQWTBvMEpRelNKWXMifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NDM3NzEzOTMsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBUFI3In0=
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF 𝑫𝑹𝑲-𝑹𝑨𝑮𝑵𝑨`",
  author: process.env.PACK_AUTHER || " 𝙎-𝙏𝞢𝞜",
  packname: process.env.PACK_NAME || "𝑫𝑹𝑲-𝑹𝑨𝑮𝑵𝑨",
  botname: process.env.BOT_NAME || "ST┘𝑫𝑹𝑲-𝑹𝑨𝑮𝑵𝑨𖤐",
  ownername: process.env.OWNER_NAME || "🌹⃟⃢👑 ĐÆ𝚪𝐊༒𝙎-𝙏𝞢𝞜🌹⃟⃢👑",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "STEN").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
}); 
