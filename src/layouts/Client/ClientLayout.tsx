
import Footer from "./FooterClient";
import Header from "./HeaderClient";
import { Link, Outlet } from "react-router-dom";
import contactImage from "@/assets/images/contact.png"
import { useEffect, useState } from "react";
import ChatAI from "@/components/ChatAI";
import { Assistant } from "@/assistant/googleAi";
type Message = {
    role: string,
    content: string
}

function ClientLayout() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [messages, setMessages] = useState< Message[]>([]);
    const [input, setInput] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const assistant = new Assistant();
    const addMessage = (message : Message) => {
        setMessages((prev) => [...prev, message])
    }

    useEffect(() => {
        async function GenerateContent() {
            setIsLoading(true);
            try {
            const result =  await assistant.chat(input)
            addMessage({ role: 'assistant', content: result || '' })
            console.log("Messages:", messages);
            } catch (error) {
                addMessage({role: 'assistant', content: 'Xin lỗi! đã có lỗi xãy ra với hệ thống vui lòng thử lại sau'})
            }finally{
               setIsLoading(false)
            }
     
        }
        if (input.trim().length > 0) {
            GenerateContent();
        }
    }, [input]);

    const handleAlert = () => (
          alert("Chức năng này chưa phát triển")
    )
    const handleOpenChat = () => {
        setIsOpen(!isOpen);
    }

    const onSend = (data: string) => {
          setInput(data);
          addMessage({role: 'user', content: data})
    }

    return (
        <div className="relative">
            <div>
                <div className=" fixed top-0 right-0 w-full z-10">
                    <Header />
                </div>
                <div className="my-4 mt-24 ">
                 
                    {/* <Home /> */}
                <Outlet />
                </div>
              
                <Footer />
            </div>
            <div className="fixed text-center items-center right-6 bottom-20 space-y-5">
                {
                        isOpen && <ChatAI isLoading={isLoading} className="absolute bottom-20 right-[3rem]" messages={messages} onSend={onSend} />
                }
                <button onClick={() => handleOpenChat()} className="m-auto">
                    <img  className="w-10" src="/technical-support.png" alt="icon-chatbox"/>
                </button>
                
                <Link to={""} onClick={handleAlert}><img className="w-12" src={contactImage} alt="" /></Link>
            </div>
        </div>
    )
}

export default ClientLayout;