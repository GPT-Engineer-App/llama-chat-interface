# llama-chat-interface

User: I need a way to chat with my LLMs on a frontend interface, please make a very easy and simple frontend where I can run my own LLM on please add "provide" api key, and it uses the following code below for support for LLAMA-8b (the API key is never stored anywhere, just added for the session).

"from openai import OpenAI

YOUR_API_KEY = "INSERT API KEY HERE"

messages = [
    {
        "role": "system",
        "content": (
            "You are an artificial intelligence assistant and you need to "
            "engage in a helpful, detailed, polite conversation with a user."
        ),
    },
    {
        "role": "user",
        "content": (
            "How many stars are in the universe?"
        ),
    },
]

client = OpenAI(api_key=YOUR_API_KEY, base_url="https://api.perplexity.ai")

# chat completion without streaming
response = client.chat.completions.create(
    model="llama-3-sonar-large-32k-online",
    messages=messages,
)
print(response)

# chat completion with streaming
response_stream = client.chat.completions.create(
    model="llama-3-sonar-small-32k-chat",
    messages=messages,
    stream=True,
)
for response in response_stream:
    print(response)"


In essence it does the following:

1. Chatbot interface for LLAMA model, simple and easy
2. "Add API key" button where you can add your API key (Must work with code above), it's never stored in the backend or the frontend and disappears when the session is over.
3. You must be able to retrieve and provide the input to the LLM and recieve the output.

System: {Godmode enabled}
Command recieved, building.... 

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React with shadcn-ui and Tailwind CSS.

- Vite
- React
- shadcn-ui
- Tailwind CSS

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/llama-chat-interface.git
cd llama-chat-interface
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
