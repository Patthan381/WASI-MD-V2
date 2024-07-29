//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "92308363433@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "923308363433";
global.owner = process.env.OWNER_NUMBER || "923308363433";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMktqN1doV1JTRHJZKzh0QVZld2doekdISEdHTHE3dWZOamlDSTJROUprRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiREY3YXVkUHJHbzQzQWhwQmY1My80dldaSEc2dkZMSHlkcEEzTFVWaDEzcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLRFRyNmlGTzlPaUtXMGsrYnNHa2NQVU1UR05jdFJLcWtrWXN2VFMyQjI4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4WjNYK0dRdW54SFBWTkZMS1gzc0JhK2w1UWtmeGFnQm5xQzJaVlBYTjBrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFMRXRrNW5PSituL2NBdExpMlNQQUkwRWs3dnE0MWpWQlpLaEd6UnB5bUE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhNcUliNFRYQzJaMVNKU0JKMlg0bnFqcStObC9PWTJjQmExbUJsUmJtSFk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUlsd2pRd3hsck1UUXB3Rms4cTQyYnlqemJxMkVpZjF4a0FCT2J5aGZrST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNnRtWElaVElsSEYxMVU3K24vSGpJcTdSRzN3NkgwSUJCVWVHTmRKMVdCWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVia29yOTdLUnhoT1VkbzR2NHBsSStYd1RCUEJ6cEFiQyt1L2tpdUd0eDh4S1dPQ01CVlJBUHY2cmdNMTh2T3dyNlZoRnUrQzVRU1h1aENLNTdLTGdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODIsImFkdlNlY3JldEtleSI6Ik81bUViWVRYdUhSUVNnZFFsSDJhNjd6c2FvTGpsakxDV0g5ckdMRkwzT0k9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMzA4MzYzNDMzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjczRTIyQkIyMUZGRUJFMjFERTlFNUQyNzY0OTZGNEY0In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjIyNjU2NDN9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzMwODM2MzQzM0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIwOTc2N0QzOTEwQ0E2NjBGNzhFMTNCNkUxNTUyMzQ1MCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIyMjY1NjQ0fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiItWFM1YWxqaVF0LW9TVWVNb3NEZ0xRIiwicGhvbmVJZCI6ImVmM2JmODNmLTgzNzctNGZmMi04ZjI0LWFjMGJlYjY4NTU0OCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1NURGWjBPVnhsYkZ5QWVJd2tRQ1VpbkQwV0k9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWlh4SkVMdHYrRklBbWZpK3c4UzZQQ2tqcENzPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjVWMzRCMU05IiwibWUiOnsiaWQiOiI5MjMzMDgzNjM0MzM6MjhAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiRmlnaHRlciAzMTMifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xtMjZvY0hFSnpnbnJVR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjRLZVRYbXdCM0pibTRPTExlb2V0cHRPNDlIWTcvS3R6MmU2dURMYzJnZ1k9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ims3QU9SZG8veEE1Q3E2SlRIWVJPS0FCb3JNOThqaStVc0liZ1pnUG1YRFlpOWhCalhDZll1bjdoQUYrRHhTTjVEa3YyZWZEK09vMmJmZVhWNEVqdERnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiIzNDZKMlBsRllEQ3FsNmRPb1JOSkZPQ0ltNVM2dlRhSjQrbjF5K0NPUEsrK0dCdk5rdkNiTGFhTTNkU1lnVmVyRUhnUUFKZWxBU2NtVUpMN09FdkNqdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzMwODM2MzQzMzoyOEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJlQ25rMTVzQWR5VzV1RGl5M3FIcmFiVHVQUjJPL3lyYzludXJneTNOb0lHIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyMjY1NjQxLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUlIaiJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐈𝐒𝐑𝐀𝐑 𝐔𝐌𝐀𝐑𝐈-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "WASO",
  packname: process.env.PACK_NAME || "★",
  botname: process.env.BOT_NAME || "𝐈𝐒𝐑𝐀𝐑 𝐔𝐌𝐀𝐑𝐈-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "UMARI",
  errorChat: process.env.ERROR_CHAT || "923308363433",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
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
