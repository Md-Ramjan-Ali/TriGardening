"use client";
import React, { useState, useRef, useEffect } from 'react';
import { Plus, Search, Upload, Send, Mic, ImageIcon, Check, ChevronRight, Menu, X } from 'lucide-react';
import Image from 'next/image';
import { FaCamera } from 'react-icons/fa';

interface Message {
  id: number;
  type: 'user' | 'bot';
  content: string;
  image?: string;
  quickReplies?: string[];
  selectedReply?: string;
  timestamp: Date;
}

interface ChatHistory {
  id: number;
  title: string;
  preview: string;
  timestamp: Date;
}

const ChatbotPage = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: 'bot',
      content: ' আমি TriGardening এর স্মার্ট প্ল্যান্ট কেয়ার বটি। আমাকে আপনার গাছের ছবি পাঠান অথবা সমস্যার বর্ণনা দিন। আমি আপনাকে সাহায্য করতে পারবো।',
      timestamp: new Date()
    }
  ]);

  const [inputText, setInputText] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [chatHistory, setChatHistory] = useState<ChatHistory[]>(() => [
    {
      id: 1,
      title: 'How to fix yellow leaves',
      preview: 'আমার গাছের পাতা হলুদ হয়ে যাচ্ছে...',
      timestamp: new Date(Date.now() - 86400000)
    },
    {
      id: 2,
      title: 'Mango plant leaf issue',
      preview: 'আম গাছের পাতায় দাগ পড়েছে...',
      timestamp: new Date(Date.now() - 172800000)
    },
    {
      id: 3,
      title: 'টমেটো গাছের যত্ন',
      preview: 'টমেটো গাছের জন্য কি ধরনের...',
      timestamp: new Date(Date.now() - 259200000)
    }
  ]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!inputText.trim() && !uploadedImage) return;

    const userMessage: Message = {
      id: messages.length + 1,
      type: 'user',
      content: inputText || 'আমি একটি ছবি পাঠিয়েছি',
      image: uploadedImage || undefined,
      timestamp: new Date()
    };

    setMessages([...messages, userMessage]);
    setInputText('');
    setUploadedImage(null);

    setTimeout(() => {
      const botMessage: Message = {
        id: messages.length + 2,
        type: 'bot',
        content: uploadedImage
          ? 'আপনার গাছের ছবি বিশ্লেষণ করা হচ্ছে। এই পাতায় কিছু দাগ দেখা যাচ্ছে যা সম্ভবত ফাঙ্গাল ইনফেকশন। নিচের সমাধানগুলো দেখুন:'
          : 'আপনার প্রশ্নের উত্তর দেওয়ার জন্য আমি প্রস্তুত। আপনি কি জানতে চান?',
        quickReplies: uploadedImage
          ? [
            'কারণ সম্পর্কে আরো জানতে চাই',
            'ঔষধ সুপারিশ করুন',
            'প্রতিরোধের উপায়গুলো বলুন',
            'পাতার রোগ সম্পর্কে জানতে চাই'
          ]
          : [
            'পানি দেওয়ার নিয়ম',
            'মাটির যত্ন',
            'সার প্রয়োগ',
            'রোগ প্রতিরোধ'
          ],
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1500);
  };

  const handleQuickReply = (messageId: number, reply: string) => {
    setMessages(messages.map(msg =>
      msg.id === messageId ? { ...msg, selectedReply: reply } : msg
    ));

    const userMessage: Message = {
      id: messages.length + 1,
      type: 'user',
      content: reply,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);

    setTimeout(() => {
      const botMessage: Message = {
        id: messages.length + 2,
        type: 'bot',
        content: 'ধন্যবাদ আপনার প্রশ্নের জন্য। এই বিষয়ে বিস্তারিত তথ্য দিচ্ছি। আপনার গাছের সুস্বাস্থ্যের জন্য এই পদক্ষেপগুলো অনুসরণ করুন। আরও কিছু জানতে চাইলে আমাকে জিজ্ঞাসা করুন।',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleNewChat = () => {
    setMessages([
      {
        id: 1,
        type: 'bot',
        content: 'নতুন চ্যাট শুরু হয়েছে। আমি কীভাবে আপনাকে সাহায্য করতে পারি?',
        timestamp: new Date()
      }
    ]);

    // add an entry to chat history so setChatHistory is used and history reflects the new chat
    setChatHistory(prev => [
      {
        id: (prev[0]?.id ?? 0) + 1,
        title: 'New Chat',
        preview: 'নতুন চ্যাট শুরু করা হয়েছে',
        timestamp: new Date()
      },
      ...prev
    ]);
  };

  return (
    <div className="flex min-h-[88vh] bg-gray-100">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-80' : 'w-0'} transition-all duration-300 bg-[#7A9B57] text-white shrink-0 overflow-hidden`}>
        <div className="h-full flex flex-col p-4">
          <div className="flex items-center justify-between gap-2 mb-6 pb-4 border-b border-green-600">
            <div className="w-10 h-10 flex items-center justify-center">
              <Image src="/images/chat (1).png" alt="Logo" width={30} height={30} />
            </div>
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 cursor-pointer"
            >
              {sidebarOpen ? <Image src="/images/chat (2).png" alt="Logo" width={30} height={30} /> : ""}
            </button>

          </div>

          <button
            onClick={handleNewChat}
            className="flex items-center gap-2 w-full hover:bg-green-500 px-4 py-3 rounded-lg mb-2 transition-colors"
          >
            <Plus className="w-5 h-5" />
            <span className="font-medium">New Chat</span>
          </button>

          <div className="relative mb-2">
            <input
              type="text"
              placeholder="Search Chat"
              className="w-full text-white placeholder-white px-4 py-2 rounded-lg pl-10 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <Search className="w-5 h-5 absolute left-3 top-2.5 text-white" />
          </div>

          <button className="flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-green-600 rounded-lg mb-6 transition-colors">
            <ImageIcon className="w-5 h-5" />

            <span>Uploaded Media</span>
          </button>

          <div className="flex-1 overflow-y-auto">
            <h3 className="text-xl font-bold mb-3 px-2 text-white">History</h3>
            <div className="space-y-2">
              {chatHistory.map(chat => (
                <div
                  key={chat.id}
                  className="px-3 py-3 hover:bg-green-600 rounded-lg cursor-pointer transition-colors"
                >
                  <h4 className="font-medium text-sm mb-1">{chat.title}</h4>
                  <p className="text-xs text-white line-clamp-1">{chat.preview}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        <div className="bg-white shadow-sm px-4 py-3 flex items-center gap-3">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {sidebarOpen ? "" : <Menu className="w-6 h-6" />}
          </button>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#2D5016] rounded-full flex items-center justify-center">
              <Image src="/images/chat (1).png" alt="Logo" width={30} height={30} />
            </div>
            <div>
              <h2 className="font-bold text-gray-900">Plant Care AI</h2>
              <p className="text-xs text-gray-500">Online • Always ready to help</p>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`flex gap-3 max-w-2xl ${message.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${message.type === 'bot' ? 'bg-[#2D5016]' : 'bg-gray-300'}`}>
                  {message.type === 'bot' ? (
                    <Image src="/images/chat (1).png" alt="Logo" width={30} height={30} />
                  ) : (
                    <span className="text-white text-xl">👤</span>
                  )}
                </div>

                <div className={`flex flex-col ${message.type === 'user' ? 'items-end' : 'items-start'}`}>
                  <div className={`rounded-2xl px-5 py-3 ${message.type === 'user' ? 'bg-green-600 text-white' : 'bg-white text-gray-800 shadow-sm'}`}>
                    {message.image && (
                      <Image src={message.image} width={200} height={200} alt="Uploaded" className="rounded-lg mb-2 max-w-xs" />
                    )}
                    <p className="text-sm leading-relaxed">{message.content}</p>
                  </div>

                  {message.quickReplies && !message.selectedReply && (
                    <div className="mt-3 space-y-2 w-full">
                      {message.quickReplies.map((reply, index) => (
                        <button
                          key={index}
                          onClick={() => handleQuickReply(message.id, reply)}
                          className="flex items-center justify-between w-full bg-white hover:bg-green-50 text-gray-700 px-4 py-3 rounded-lg text-sm transition-colors shadow-sm border border-gray-200"
                        >
                          <span>{reply}</span>
                          {index === 1 ? <Check className="w-4 h-4 text-green-600" /> : <ChevronRight className="w-4 h-4" />}
                        </button>
                      ))}
                    </div>
                  )}

                  {message.selectedReply && (
                    <div className="mt-2 flex items-center gap-2 text-xs text-green-600">
                      <Check className="w-4 h-4" />
                      <span>Selected: {message.selectedReply}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {uploadedImage && (
          <div className="px-4 py-2 bg-gray-50 border-t">
            <div className="relative inline-block">
              <Image src={uploadedImage} width={500} height={500} alt="Preview" className="h-20 rounded-lg" />
              <button
                onClick={() => setUploadedImage(null)}
                className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        <div className="bg-white border-t px-4 py-4">
          <div className="flex items-center gap-3 max-w-5xl mx-auto">
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              className=""
            >
              <div className="flex gap-2">
                <div className="bg-[#2D5016] p-3 rounded-full">
                  <FaCamera className="w-6 h-6 text-white " />
                </div>
                <div className="bg-[#2D5016] p-3 rounded-full">
                  <Upload className="w-5 h-5 text-white" />
                </div>
              </div>
            </button>

            <div className="flex-1 relative">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="আপনার বার্তা লিখুন অথবা গাছের ছবি পাঠান। আপনার গাছ সম্পর্কে বিস্তারিত..."
                className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-full focus:outline-none "
              />
              <button type="button" className="absolute top-0 right-2 p-3 hover:bg-gray-100 rounded-full transition-colors">
                <Mic className="w-6 h-6 text-[#2D5016]" />
              </button>
            </div>



            <button
              type="button"
              onClick={handleSend}
              className="p-3 bg-[#2D5016] hover:bg-green-700 rounded-full transition-colors"
            >
              <Send className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatbotPage;