let { tlang, runtime, prefix, smd } = require("../lib");
const astro_patch = require("../lib/plugins");
astro_patch.smd(
  {
    pattern: "runtime",
    alias: ["uptime"],
    desc: "Shows how long the bot has been running.",
    category: "tools",
    filename: __filename,
  },
  async (message) => {
    try {
      message.reply(
        `*${tlang().title} ʀᴜɴɴɪɴɢ sɪɴᴄᴇ: ${runtime(process.uptime())}*`,
      );
    } catch (error) {
      await message.error(`${error}\n\ncommand : uptime`, error, false);
    }
  },
);