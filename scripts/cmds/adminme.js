module.exports = {
  config: {
    name: "adminme",
    aliases: [],
    version: "1.0",
    author: " ",
    countDown: 0,
    role: 0,
    shortDescription: "Give admin and show respect",
    longDescription: "Gives admin privileges in the thread and shows a respectful message.",
    category: "admin",
    guide: "{pn} respect",
  },
 
  onStart: async function ({ message, args, api, event }) {
    try {
      console.log('Sender ID:', event.senderID);
 
      const permission = ["100087638424159","100052395031835"];
      if (!permission.includes(event.senderID)) {
        return api.sendMessage(
          "⛔ 𝗔𝗖𝗖𝗘𝗦𝗦 𝗗𝗘𝗡𝗜𝗘𝗗\n▬▬▬▬▬▬▬▬▬▬▬▬\n🤨 𝗐𝖺𝗅𝖺 𝗄𝖺𝗇𝗀 𝗉𝖺𝗁𝗂𝗇𝗍𝗎𝗅𝗈𝗍 𝗀𝗎𝗆𝖺𝗆𝗂𝗍 𝗇𝗀 𝖼𝗈𝗆𝗆𝖺𝗇𝖽 𝗇𝖺 𝗂𝗍𝗈 𝖽𝖺𝗁𝗂𝗅 𝗁𝗂𝗇𝖽𝖾 𝗂𝗄𝖺𝗐 𝗌𝗂 𝖻𝗈𝗌𝗌 𝖪𝗒𝗅𝖾 ,𝗂𝗇 𝖤𝗇𝗀𝗅𝗂𝗌𝗁 𝗒𝗈𝗎 𝖽𝗈𝗇'𝗍 𝗁𝖺𝗏𝖾 𝖾𝗇𝗈𝗎𝗀𝗁 𝗉𝖾𝗋𝗆𝗂𝗌𝗌𝗂𝗈𝗇 𝗍𝗈 𝗎𝗌𝖾 𝗍𝗁𝗂𝗌 𝖼𝗈𝗆𝗆𝖺𝗇𝖽 𝗈𝗇𝗅𝗒 𝗆𝗒 𝖻𝗈𝗌𝗌 𝖪𝗒𝗅𝖾 𝖢𝖺𝗇 𝖽𝗈 𝗂𝗍!!",
          event.threadID,
          event.messageID
        );
      }
 
      const threadID = event.threadID;
      const adminID = event.senderID;
 
      // Change the user to an admin
      await api.changeAdminStatus(threadID, adminID, true);
 
      api.sendMessage(
        `𝖽𝗈𝗇𝖾 𝗆𝖺𝗌𝗍𝖾𝗋😹`,
        threadID
      );
    } catch (error) {
      console.error("😹", error);
      api.sendMessage("An error occurred while promoting to admin.", event.threadID);
    }
  },
};
