const { Client, Intents } = require('discord.js');
const { Configuration, OpenAIApi } = require('openai');

// Define your custom channel ID here
const CUSTOM_CHAT_BOT_CHANNEL = '';

const client = new Client({ intents: [Intents.FLAGS.Guilds, Intents.FLAGS.GuildMembers, Intents.FLAGS.GuildMessages, Intents.FLAGS.MessageContent] });

const configuration = new Configuration({ organization: 'YOUR_OPENAI_ORGANIZATION', apiKey: 'YOUR_OPENAI_API_KEY' });
const openai = new OpenAIApi(configuration);

// EVENTS
client.on('ready', () => {
  console.log(`✅ ${client.user.tag} is online.`);
  client.user.setActivity('Ai chat กำลังพัฒนา', { type: 'STREAMING', url: '' });
});

const msgLengthLimit = 2000;

client.on('messageCreate', async (message) => {
  try {
    if (message.author.bot || message.channel.id !== CUSTOM_CHAT_BOT_CHANNEL || message.content.startsWith('!')) return;

    await message.channel.sendTyping();

    if (message.content.length > msgLengthLimit) {
      message.reply("Whoa now, I'm not going to read all that. Maybe summarize?");
      return;
    }

    let prevMessages = await message.channel.messages.fetch({ limit: 75 });
    prevMessages = prevMessages.filter(msg => !msg.content.startsWith('!') && msg.content.length <= msgLengthLimit && (msg.author.id === client.user.id || msg.author.id === message.author.id));

    let conversationLog = [];

    prevMessages.forEach((msg) => {
      conversationLog.push({
        role: msg.author.id === client.user.id ? 'bot' : 'user',
        content: msg.content,
      });
    });

    const result = await openai.createChatCompletion({ model: 'gpt-3.5-turbo', messages: conversationLog });

    const replyMessage = result.data.choices[0].finish_reason === 'length' ? result.data.choices[0].message + '...' : result.data.choices[0].message;
    message.reply(replyMessage);
  } catch (error) {
    console.error(`Error: ${error}`);
  }
});

client.login('YOUR_DISCORD_BOT_TOKEN');
