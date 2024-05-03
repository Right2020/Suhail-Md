const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348166210998";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_41_05_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNyxcbiAgICAgICAgODksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDY1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE1LFxuICAgICAgICAyNDksXG4gICAgICAgIDExMSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAzMCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA1NyxcbiAgICAgICAgNTgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjMzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwLFxuICAgICAgICAyOSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxODAsXG4gICAgICAgIDMwLFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjMsXG4gICAgICAgIDM3LFxuICAgICAgICAzNCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgODQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTYxLFxuICAgICAgICAzNyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyOSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTUwLFxuICAgICAgICA1NyxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMixcbiAgICAgICAgMTU1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICA2MixcbiAgICAgICAgMjU0LFxuICAgICAgICA4NyxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjAyLFxuICAgICAgICA4MCxcbiAgICAgICAgNixcbiAgICAgICAgMTg1LFxuICAgICAgICA0OCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTExLFxuICAgICAgICA3NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDQ3LFxuICAgICAgICA5NSxcbiAgICAgICAgODIsXG4gICAgICAgIDMzLFxuICAgICAgICA2OCxcbiAgICAgICAgNSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgODMsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzEsXG4gICAgICAgIDEsXG4gICAgICAgIDIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNTcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMyxcbiAgICAgICAgMTI0LFxuICAgICAgICA4OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDM1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDExMyxcbiAgICAgICAgODYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDcxLFxuICAgICAgICA1MyxcbiAgICAgICAgODUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNSxcbiAgICAgICAgMTQwLFxuICAgICAgICAzN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTM2LFxuICAgICAgICA2MixcbiAgICAgICAgNzMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMzksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAzMSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE2LFxuICAgICAgICAxODYsXG4gICAgICAgIDY1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDkwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgOTcsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTMyLFxuICAgICAgICA0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNDQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTk1LFxuICAgICAgICA0MixcbiAgICAgICAgMTM3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTM2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNzMsXG4gICAgICAgIDI5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDc0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNDEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTEzLFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA3MVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTE4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNDMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTI3LFxuICAgICAgICA4MSxcbiAgICAgICAgMjksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDU5LFxuICAgICAgICA3NyxcbiAgICAgICAgOTEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTk2LFxuICAgICAgICA2OCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjI1LFxuICAgICAgICA1NCxcbiAgICAgICAgMjcsXG4gICAgICAgIDM2LFxuICAgICAgICAxODAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMzYsXG4gICAgICAgIDc0LFxuICAgICAgICAyMCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjU0LFxuICAgICAgICAzNSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICA0MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTUzLFxuICAgICAgICA1NCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgODEsXG4gICAgICAgIDg1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDg5LFxuICAgICAgICAxMzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDgyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIm95NmtrRzU2MXFrZ0M3dmdOb2ZCZHpEWHFMWnNySVlXODRKOWh6c3NEelk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlMtN0lXQWhFUWNDUC16bjUxQ3B1aHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiODAwOTZhYmYtOWFhNi00ZmIxLTg3ZDYtNjU0MDc3YjE4MGVlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExOSxcbiAgICAgIDExMixcbiAgICAgIDE5MCxcbiAgICAgIDQ2LFxuICAgICAgMjI5LFxuICAgICAgMTcyLFxuICAgICAgMjIyLFxuICAgICAgNTQsXG4gICAgICAyMTgsXG4gICAgICAyMzEsXG4gICAgICAxNjgsXG4gICAgICAxNDMsXG4gICAgICA0NixcbiAgICAgIDE5OCxcbiAgICAgIDMxLFxuICAgICAgMTg2LFxuICAgICAgMzIsXG4gICAgICA4MyxcbiAgICAgIDIzNCxcbiAgICAgIDEyNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDUsXG4gICAgICAyNDUsXG4gICAgICAxMjMsXG4gICAgICA1MyxcbiAgICAgIDEzLFxuICAgICAgNTIsXG4gICAgICAxMjAsXG4gICAgICAyMTMsXG4gICAgICAxNjIsXG4gICAgICAxODAsXG4gICAgICAxMjYsXG4gICAgICAxNTIsXG4gICAgICAxMjEsXG4gICAgICA0LFxuICAgICAgMTU0LFxuICAgICAgMjM5LFxuICAgICAgMTY4LFxuICAgICAgMTEwLFxuICAgICAgMTM3LFxuICAgICAgNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIxUUpQTEdYN1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODE2NjIxMDk5ODoxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlJpZ2h0IER3cml0ZXJcIixcbiAgICBcImxpZFwiOiBcIjE1MjgxNjk0OTY1ODQyOjEwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xDVm9zTUNFSTdRMWJFR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwieDhGc3YzdDBGSmxPaGRycnlITXhlczR4bGh0QjNROVdKcE1BcHhKZjlUQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJqTDdzdjFReGhkTGVZNGZUMGtIcG81ZCtFNlFzSFNaSkNxSkdWNkJuSWIzNWNEZzl0a2QzRU4zRkF5VVBnMFM1ZW9zRGhTdmErNjhGaDB5Wmh3M2xBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIxZGVrbnlpQTBVYm5jM2tWU1JjV2Q3R0xrSmxab3F4ak1rNW0rQ21JRmFEYW8yOTJiYnhLaUNpM1puN0xXdGNXc3A4dUZtUG52V2lOZFl4Ym5vYVFnUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTY2MjEwOTk4OjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNDhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNDc3NjA4MVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Right Dwriter",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
