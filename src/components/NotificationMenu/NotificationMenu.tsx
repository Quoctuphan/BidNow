import { ReactNode } from "react";

//  Determines the data type of props that a component can receive (2)
interface MenuProps {
    className?: string;
    title?:string;
    children?: Exclude<ReactNode, null | undefined >; 
  }
const NotificationMenu: React.FC<MenuProps> = ({children,className, title}) =>{
    return ( 
        <div className={className}>
            <div className="w-full mb-2 py-2 px-4 h-[40px] font-bold text-left text-sky-500 text-lg">
              <h1 className="h-full">{title}</h1>
            </div>
            {children}
        </div>
     );
}
    

export default NotificationMenu;