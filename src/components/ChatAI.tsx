import { useEffect, useMemo, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import TextareaAutosize from "react-textarea-autosize";
import Loader from "@/components/Loader/Loader.tsx";

export default function ChatAI({ messages, onSend, isLoading = false, ...props }: { messages: {content: string, role: string}[], onSend: (data: string) => void, isLoading: boolean, className?: string }) {
  const [input, setInput] = useState<string>('');
  // const [data, setData] = useState<{content: string, role: string}[]>(messages);
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);
  const messageGroups =   
      {role: 'assistant', content: 'Tôi có thể giúp gì bạn?'}

  const resultGroups = useMemo(()=> {
      return [messageGroups ,...messages].reduce<{content: string, role: string}[][]>((acc, curr) => {
          if(curr.role === 'user' || acc.length === 0) acc?.push([])
            acc[acc.length - 1].push(curr)
          return acc
        }, [])
  }, [messages])

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  useEffect(() => {
    if (!isLoading) {
      textAreaRef.current?.focus();
    }
  }, [isLoading]);

  const handleSendMessage = () => {
    if (input.trim() === '') return;
    if (input.length > 0) {
      setInput('');
      onSend(input);
    } 
  }
  const handleEnterPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage()
    }
  }
  return (
    <div className={`w-80 h-96 bg-white border border-gray-200 shadow-2xl rounded-2xl flex flex-col overflow-hidden ${props.className || ''}`}>
      <Loader width="w-8" isLoading={isLoading} />
      <div className="flex-1 p-2 overflow-y-auto h-full scroll-smooth [&>*:nth-last-of-type(2)]:min-h-[100%]">
        {
            //resultGroups
                  resultGroups.map((group, index: number) => (
                    <div key={index} className="mt-4 flex flex-col gap-2 ">
                      {
                        group.map((item, index: number) => (
                            <div key={index} className={`px-3 py-2 shadow-sm text-sm text-left rounded-2xl w-fit max-w-[85%] ${item.role !== 'user' ? 'self-start bg-gray-100 text-gray-800 rounded-tl-none' : 'self-end bg-blue-600 text-white rounded-tr-none'}`}>
                              <ReactMarkdown>{item.content}</ReactMarkdown>
                            </div>
            ))
                      }
                    </div>
                  ))
        }
      <div ref={bottomRef} />
      </div>
      {/* // Input area */}
      <div className="p-3 bg-white border-t border-gray-100">
        <div className="flex items-center gap-2">
            <TextareaAutosize ref={textAreaRef}
              className="flex-1 p-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 resize-none h-11 leading-snug" 
              placeholder="Type your message..." 
              onChange={(e) => setInput(e.target.value)}
              minRows={1}
              maxRows={5}
              value={input}
              disabled={isLoading}
              onKeyDown={handleEnterPress
              }
            /> 
            <button onClick={handleSendMessage} disabled={isLoading} className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-sm font-medium rounded-xl transition-colors shadow-sm shrink-0">
              Send
            </button>
        </div>
      </div>
    </div>
  );
}
