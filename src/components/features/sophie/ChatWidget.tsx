"use client";

import { Send, Bot, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useChat, suggestedPrompts } from "@/hooks/use-chat";
import { FadeIn } from "@/components/animations/FadeIn";

export function ChatWidget() {
  const { messages, input, setInput, isTyping, chatEndRef, handleSend } = useChat();

  return (
    <FadeIn direction="left" delay={0.2}>
      <div className="bg-white border border-slate-100 rounded-[2.5rem] shadow-premium overflow-hidden h-[600px] flex flex-col relative group">
        {/* Chat Header */}
        <div className="p-6 bg-sgs-navy text-white flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20">
              <Bot className="w-7 h-7" />
            </div>
            <div>
              <h4 className="font-black tracking-tight leading-none mb-1">Sophie IA</h4>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 bg-sgs-green rounded-full animate-pulse"></div>
                <p className="text-[10px] font-black uppercase tracking-widest text-white/50">Online agora</p>
              </div>
            </div>
          </div>
          <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
            <div className="w-1 h-1 bg-white/30 rounded-full mx-0.5"></div>
            <div className="w-1 h-1 bg-white/30 rounded-full mx-0.5"></div>
            <div className="w-1 h-1 bg-white/30 rounded-full mx-0.5"></div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-grow overflow-y-auto p-8 space-y-6 bg-slate-50/30">
          {messages.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div className={cn(
                "max-w-[85%] p-6 rounded-[1.5rem] text-sm font-medium leading-relaxed shadow-sm",
                m.role === "user"
                  ? "bg-primary text-white rounded-tr-none shadow-primary/10"
                  : "bg-white text-slate-700 rounded-tl-none border border-slate-100"
              )}>
                {m.content}
              </div>
            </motion.div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white p-6 rounded-[1.5rem] rounded-tl-none flex items-center gap-3 border border-slate-100 shadow-sm">
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Sophie está pensando...</span>
              </div>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-6 border-t border-slate-100 bg-white">
          <div className="flex flex-wrap gap-2 mb-6">
            {suggestedPrompts.map((p, i) => (
              <button
                key={i}
                onClick={() => handleSend(p)}
                className="text-[10px] font-black uppercase tracking-widest bg-slate-50 border border-slate-100 px-4 py-2 rounded-full hover:border-primary/30 hover:bg-primary/5 hover:text-primary transition-all text-slate-400"
              >
                {p}
              </button>
            ))}
          </div>
          <div className="relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend(input)}
              placeholder="Pergunte algo à Sophie..."
              className="w-full bg-slate-50 border border-slate-100 rounded-[1.25rem] px-6 py-4 text-sm font-bold focus:outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary/20 transition-all pr-14 text-sgs-navy"
            />
            <button
              onClick={() => handleSend(input)}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
