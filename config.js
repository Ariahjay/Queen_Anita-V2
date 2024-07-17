//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "234906628353";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "2347043759577";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0trNzJLc3RDb1JtUjNzRVg2Q05oL1lKYUFicU1KM3p2MjlXdnVVWmQwbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNENpeXZDdE5XNjNwc1BiS2dOQ2RmNlNaWnhIN25xY1ptNnlpcmJGZit5ST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTTExrWktyV1VKZ3JsZWJ5SnIwV2NBYU0wSVVyR28ySVpzRVNKSkluN2xVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWT2lUVWdXM2FqVGpGbTNKNVhFK3pZbGRMMml0Y1p6S1RUNW1qTmF2dVQ4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVORlFKalFRYzRLMUVSamFJYUhaYjF4bDYyUmJsbzNtVEs5TVFDc0lQSDg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNjeGUwb0hJR1lNMTNXWndZZHpOSmlhSisvZlVSdHZqVm1PM09yalJHZ3c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSVBPUFJiTlp4RnNlV1k3UkM1N2txczhWSHNCRjd3RTA5bkhwY3dLUW1VTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMm1TTWl1OXFNQnZkREN5VmNma1l3c1RMSERkdGxhbkxLQlh3MXJodS95WT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkR5OVFWczFIYVdZd09HelZscW5sWi90Kys1bG5kRGxkYnhNdXdVVGZHUEthcFBCWmRMcVMvN0RYZldGTHJVbVRCMFZ2aDRLeWxqRE1SRWF0V202amdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTkzLCJhZHZTZWNyZXRLZXkiOiJIUHJYVnIzZEF4dFVlT05oOFhLTi91R1YvOTRTU29TTnRPdFJXUHI4dUxBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NDExMjIwOTQ3M0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI3NzkzNDY1MkVBNTNEMTQwM0Y2NzNDNTY1QTc0NDhEOCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIxMjQxMDkyfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJpVXNQYmgyMlE2Q2hGLW43WTMzNnNBIiwicGhvbmVJZCI6IjAxOGZmZmM2LTZlNWQtNDZlMC05NzViLTdjN2EwMmUwZmUxNyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJEQnM2UkUrOWdOcngzQXNjWTg3OXpCelN3UVU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRkZBNWJsRDc1QURJT2NPWHlacjVqVWhFdnR3PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlFSUDZWUkxaIiwibWUiOnsiaWQiOiIyNTQxMTIyMDk0NzM6NUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTm5HNjZNQkVQV2I0TFFHR0FRZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiS0dwSjFSRkw5TEFjcUhLckFMUFVCMlAwWHkzSk1odHBoM29SK25nUXNWZz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiZVYybURkdEkzR3V6Y2dyekg0azg4KzJZQU93L0FwVXJIUEhCL0VyUENnNDNVSklqeHhtSFh4WXUzYW8xcjRFeWFXUmo0eXdzQUZxU2JXSzRpeEdsQXc9PSIsImRldmljZVNpZ25hdHVyZSI6InNuOTY1YzU3b0ErWVJsSmVGREpSNnpyM0ltOU95TG11RkQxOVE0QmpTVmRqd0xtMDJadGdJanRKNzh6ZDB4bjFXTFIzOTBaM3U3OERGNmV4bnVXa2h3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0MTEyMjA5NDczOjVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCU2hxU2RVUlMvU3dIS2h5cXdDejFBZGo5Rjh0eVRJYmFZZDZFZnA0RUxGWSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMTI0MTA5MCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFET1gifQ==
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0trNzJLc3RDb1JtUjNzRVg2Q05oL1lKYUFicU1KM3p2MjlXdnVVWmQwbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNENpeXZDdE5XNjNwc1BiS2dOQ2RmNlNaWnhIN25xY1ptNnlpcmJGZit5ST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTTExrWktyV1VKZ3JsZWJ5SnIwV2NBYU0wSVVyR28ySVpzRVNKSkluN2xVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWT2lUVWdXM2FqVGpGbTNKNVhFK3pZbGRMMml0Y1p6S1RUNW1qTmF2dVQ4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVORlFKalFRYzRLMUVSamFJYUhaYjF4bDYyUmJsbzNtVEs5TVFDc0lQSDg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNjeGUwb0hJR1lNMTNXWndZZHpOSmlhSisvZlVSdHZqVm1PM09yalJHZ3c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSVBPUFJiTlp4RnNlV1k3UkM1N2txczhWSHNCRjd3RTA5bkhwY3dLUW1VTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMm1TTWl1OXFNQnZkREN5VmNma1l3c1RMSERkdGxhbkxLQlh3MXJodS95WT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkR5OVFWczFIYVdZd09HelZscW5sWi90Kys1bG5kRGxkYnhNdXdVVGZHUEthcFBCWmRMcVMvN0RYZldGTHJVbVRCMFZ2aDRLeWxqRE1SRWF0V202amdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTkzLCJhZHZTZWNyZXRLZXkiOiJIUHJYVnIzZEF4dFVlT05oOFhLTi91R1YvOTRTU29TTnRPdFJXUHI4dUxBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NDExMjIwOTQ3M0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI3NzkzNDY1MkVBNTNEMTQwM0Y2NzNDNTY1QTc0NDhEOCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIxMjQxMDkyfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJpVXNQYmgyMlE2Q2hGLW43WTMzNnNBIiwicGhvbmVJZCI6IjAxOGZmZmM2LTZlNWQtNDZlMC05NzViLTdjN2EwMmUwZmUxNyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJEQnM2UkUrOWdOcngzQXNjWTg3OXpCelN3UVU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRkZBNWJsRDc1QURJT2NPWHlacjVqVWhFdnR3PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlFSUDZWUkxaIiwibWUiOnsiaWQiOiIyNTQxMTIyMDk0NzM6NUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTm5HNjZNQkVQV2I0TFFHR0FRZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiS0dwSjFSRkw5TEFjcUhLckFMUFVCMlAwWHkzSk1odHBoM29SK25nUXNWZz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiZVYybURkdEkzR3V6Y2dyekg0azg4KzJZQU93L0FwVXJIUEhCL0VyUENnNDNVSklqeHhtSFh4WXUzYW8xcjRFeWFXUmo0eXdzQUZxU2JXSzRpeEdsQXc9PSIsImRldmljZVNpZ25hdHVyZSI6InNuOTY1YzU3b0ErWVJsSmVGREpSNnpyM0ltOU95TG11RkQxOVE0QmpTVmRqd0xtMDJadGdJanRKNzh6ZDB4bjFXTFIzOTBaM3U3OERGNmV4bnVXa2h3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0MTEyMjA5NDczOjVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCU2hxU2RVUlMvU3dIS2h5cXdDejFBZGo5Rjh0eVRJYmFZZDZFZnA0RUxGWSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMTI0MTA5MCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFET1gifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-X00anFgosmRhhWP75khXT3BlbkFJlyo7xhWoWhz9Sdoap9Hv",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
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
