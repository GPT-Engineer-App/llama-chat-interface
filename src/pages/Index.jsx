import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

const Index = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [apiKey, setApiKey] = useState("");

  const handleSendMessage = async () => {
    if (!apiKey) {
      toast.error("Please add your API key first.");
      return;
    }

    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`,
        },
        body: JSON.stringify({ messages: newMessages }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch response from the server.");
      }

      const data = await response.json();
      setMessages([...newMessages, { role: "assistant", content: data.content }]);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-2xl p-4 bg-white rounded shadow">
        <div className="flex justify-between mb-4">
          <h1 className="text-2xl font-bold">LLAMA Chatbot</h1>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Add API Key</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Enter your API Key</DialogTitle>
              </DialogHeader>
              <Input
                type="text"
                placeholder="API Key"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
              />
            </DialogContent>
          </Dialog>
        </div>
        <div className="flex flex-col space-y-4 mb-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`p-2 rounded ${
                message.role === "user" ? "bg-blue-100 self-end" : "bg-gray-100 self-start"
              }`}
            >
              {message.content}
            </div>
          ))}
        </div>
        <div className="flex space-x-2">
          <Input
            type="text"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-grow"
          />
          <Button onClick={handleSendMessage}>Send</Button>
        </div>
      </div>
    </div>
  );
};

export default Index;