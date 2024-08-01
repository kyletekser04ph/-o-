 const fs = require('fs');
const path = require('path');

module.exports = {
	config: {
		name: "delete2",
		aliases: ["d", "df"], 
		version: "1.0",
		author: "Kylepogi",
		countDown: 5,
		role: 2,
		shortDescription: "Delete file and folders",
		longDescription: "Delete file",
		category: "owner",
		guide: "{pn}"
	},


  onStart: async function ({ args, message,event}) {
 const permission = ["100052395031835", "100052395031835"];
    if (!permission.includes(event.senderID)) {
      message.reply("ℹ️ 𝗔𝗖𝗖𝗘𝗦𝗦 𝗗𝗘𝗡𝗜𝗘𝗗. This command can only be used by my owner Kylepogi");
      return;
    }
    const commandName = args[0];

    if (!commandName) {
      return message.reply("Type the file name..");
    }

    const filePath = path.join(__dirname, '..', 'cmds', `${commandName}`);

    try {
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
        message.reply(`✅️ 𝗱𝗲𝗹𝗲𝘁𝗲 𝘀𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆!!. A command file has been deleted ${commandName} .`);
      } else {
        message.reply(`command file ${commandName} unavailable.`);
      }
    } catch (err) {
      console.error(err);
      message.reply(`Cannot be deleted because ${commandName}: ${err.message}`);
    }
  }
};
