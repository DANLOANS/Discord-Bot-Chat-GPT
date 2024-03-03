# Discord Chat Bot with OpenAI Integration

This Discord chat bot integrates with OpenAI to provide AI-generated responses to messages in a specified channel.

## Prerequisites

Before running the bot, ensure you have the following:

- Node.js installed on your system
- Discord.js library (`discord.js`)
- OpenAI library (`openai`)

## Installation

1. Clone this repository or create a new Node.js project.
2. Install dependencies using npm:

```bash
npm install discord.js openai
```

## Configuration

1. Obtain your Discord bot token from the [Discord Developer Portal](https://discord.com/developers/applications).
2. Obtain your OpenAI API key and organization ID.
3. Define your Discord bot token, OpenAI API key, and organization ID in the code.

## Usage

1. Define your custom channel ID (`CUSTOM_CHAT_BOT_CHANNEL`) where the bot will listen and respond.
2. Customize the bot's activity message in the `client.on('ready')` event.
3. Customize the message length limit (`msgLengthLimit`) and any additional bot behavior as needed.

## Running the Bot

To run the bot:

```bash
node your_bot_file.js
```

Replace `your_bot_file.js` with the filename containing your bot's code.

## Features

- Listens to messages in a specified Discord channel (`CUSTOM_CHAT_BOT_CHANNEL`).
- Ignores messages from bots and messages starting with '!'.
- Limits message length and prompts for summarization if exceeded.
- Retrieves previous messages from the channel and uses them as context for OpenAI chat completion.
- Responds with AI-generated messages using OpenAI's GPT-3.5 model.

## Notes

- Ensure your bot has appropriate permissions in your Discord server.
- OpenAI usage may incur costs based on API usage and plan.
- Customize and expand the bot's functionality to suit your needs.

## Disclaimer

Be cautious when using AI-generated content, as it may not always be accurate or appropriate. Ensure compliance with Discord's Terms of Service and community guidelines.
