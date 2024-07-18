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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923079534395";




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
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_15_07_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTU1LFxuICAgICAgICA5MyxcbiAgICAgICAgMzMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTY4LFxuICAgICAgICA4NyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE4NixcbiAgICAgICAgOSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNzEsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDk4LFxuICAgICAgICA4NSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgODIsXG4gICAgICAgIDU1LFxuICAgICAgICAzOCxcbiAgICAgICAgMTY1LFxuICAgICAgICA4NCxcbiAgICAgICAgMTAzLFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMTgzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDg5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjM1LFxuICAgICAgICA1OCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNjksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDg1LFxuICAgICAgICAzOSxcbiAgICAgICAgODksXG4gICAgICAgIDIzLFxuICAgICAgICAyMixcbiAgICAgICAgMTY0LFxuICAgICAgICAyMyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNzQsXG4gICAgICAgIDI0LFxuICAgICAgICAxODUsXG4gICAgICAgIDc0LFxuICAgICAgICAyOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDg3LFxuICAgICAgICAyMTksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTIwLFxuICAgICAgICA1MSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMDksXG4gICAgICAgIDIwMixcbiAgICAgICAgMjQxLFxuICAgICAgICAzNSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNyxcbiAgICAgICAgMzQsXG4gICAgICAgIDg4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMTksXG4gICAgICAgIDI0MixcbiAgICAgICAgMTg1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDY4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE4NixcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNixcbiAgICAgICAgMTQxLFxuICAgICAgICAxNixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxODksXG4gICAgICAgIDE4NixcbiAgICAgICAgMTE3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTc2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE3NixcbiAgICAgICAgODUsXG4gICAgICAgIDU5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDQwLFxuICAgICAgICA0NSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjIyLFxuICAgICAgICA3OSxcbiAgICAgICAgMTI4LFxuICAgICAgICA4OSxcbiAgICAgICAgMzEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTM1LFxuICAgICAgICA0MixcbiAgICAgICAgMjUsXG4gICAgICAgIDg1LFxuICAgICAgICAxNDksXG4gICAgICAgIDE4NCxcbiAgICAgICAgNTIsXG4gICAgICAgIDM3LFxuICAgICAgICAxOCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNCxcbiAgICAgICAgMTIsXG4gICAgICAgIDk2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDQ4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgOTQsXG4gICAgICAgIDQzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjIzLFxuICAgICAgICA0NyxcbiAgICAgICAgMCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDQyLFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEsXG4gICAgICAgIDEyNixcbiAgICAgICAgODAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNDgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjQ1LFxuICAgICAgICAzLFxuICAgICAgICA5OSxcbiAgICAgICAgNzEsXG4gICAgICAgIDk4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDM1LFxuICAgICAgICA3OSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDk5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA2NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDg1LFxuICAgICAgICA1NyxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDY5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDMzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDc5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMzUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMyxcbiAgICAgICAgOCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTUsXG4gICAgICAgIDg4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTk3LFxuICAgICAgICA1MixcbiAgICAgICAgMTYzLFxuICAgICAgICAxODcsXG4gICAgICAgIDcwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDcyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDEzLFxuICAgICAgICA2NSxcbiAgICAgICAgMTkxLFxuICAgICAgICA3NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE3LFxuICAgICAgICA5OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDEwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDg1LFxuICAgICAgICA3NyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxODgsXG4gICAgICAgIDE0MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTIxLFxuICBcImFkdlNlY3JldEtleVwiOiBcInVjdjJ6c2N1WlNpdTZac3dVcFpOaHFpbDY2eFlheE81RGJaU2wrOElwa2c9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMDM1NzQyNjYxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI5MDVGNURFNThBOTgyQ0U1MUQ4RTA3MEZCQzQ2MjIyQ1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA4NTQ4OTlcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMwMzU3NDI2NjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjlDRjAzQTY4Q0M0MThFMTJGRUUzOEM4NUM0Qzc1RTA4XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDg1NDg5OVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzAzNTc0MjY2MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMUI3NzFGMThDNzY4NUFCMjlCRjlDQkJCNkM3NDhGRjVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwODU0OTAyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMDM1NzQyNjYxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJERTQyM0ZCOTY1NDc5Q0I1MkJGRTk0RkM1MTk2ODBERFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA4NTQ5MDJcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiWmZTZDQ3MmFRak9PaEEzMlMyUmhmQVwiLFxuICBcInBob25lSWRcIjogXCI5ZGY3M2IwNy1mODc1LTQ4ODQtODc1Ni1iMmI1ZTNmMTcyYWVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNSxcbiAgICAgIDIyNyxcbiAgICAgIDQ0LFxuICAgICAgMTU1LFxuICAgICAgOTEsXG4gICAgICAyMCxcbiAgICAgIDIxNixcbiAgICAgIDcwLFxuICAgICAgMTM4LFxuICAgICAgMTksXG4gICAgICAxNDgsXG4gICAgICAzNixcbiAgICAgIDExMyxcbiAgICAgIDU2LFxuICAgICAgODAsXG4gICAgICA1LFxuICAgICAgOTQsXG4gICAgICAxMDYsXG4gICAgICAxMzYsXG4gICAgICAzOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4MixcbiAgICAgIDI0MSxcbiAgICAgIDE0NixcbiAgICAgIDIxNyxcbiAgICAgIDE4NCxcbiAgICAgIDE4NCxcbiAgICAgIDQzLFxuICAgICAgMjI0LFxuICAgICAgMjQzLFxuICAgICAgODMsXG4gICAgICAzNyxcbiAgICAgIDIyOCxcbiAgICAgIDE3NyxcbiAgICAgIDE3LFxuICAgICAgMTcxLFxuICAgICAgMTE0LFxuICAgICAgNjgsXG4gICAgICAxMTAsXG4gICAgICAxNTMsXG4gICAgICAxMjZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQ1A5WEVTNTJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzAzNTc0MjY2MToxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMjU2NjIzOTY4MDkzNTY6MUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJ1c2VyIG5hbWUgLi4sLOKYuu+4j/CfmIpcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQbmtpcndFRU83U3lMUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkNaaGFwSmZ0SlZzQmNkVUdDMDh1OHFBWGpaeitGVjFXUXFvRXNhcTNVems9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiMWwxWkF5SDlEaUcveXZZM3hQR0doSDJzMkk4RXYzeE5wYThOVk5mQWJidlFCRVBvdGwzK2Z4enN2bE9aWm9TNU9aU2JIWDVoYVNDVzQvU0ZZcUZlQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiRTEwMEtEWVZZaEdZRHRvQW5lZ3FUL3JQL0tlV21JMnRubm5ubnpodXB0bFhjYXo4LzVoNm1pdW9LS0hHREppamR1MEUrOGd6eFJhaDlrcE5YbVF6aHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMDM1NzQyNjYxOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDU3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA4NTQ4OTcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFJUEZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlQRi5qc29uIjogIntcImtleURhdGFcIjpcInh4N3dNSjY1ZWRYOU02a3ArRzdRVy9PTVozN3FhTzhlTFA4ci8wOWFPbDQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTE5OTc0NzcwNSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIwODU0OTAxMTAxXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


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
