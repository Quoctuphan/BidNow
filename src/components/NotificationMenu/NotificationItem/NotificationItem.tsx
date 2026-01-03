//  Determines the data type of props that a component can receive (2)
interface MenuItemProps {
    className?:string; 
    to?:string; 
    title?:string; 
    detaiTitle?:string;
}
const NotificationItem:React.FC<MenuItemProps> = ({className, title, detaiTitle}) => {
        return(
            <div className={className}>
                <span className="block whitespace-pre text-left font-semibold">{title}</span>
                <span className="block text-left ">{detaiTitle}</span>
            </div>
        )
}

export default NotificationItem