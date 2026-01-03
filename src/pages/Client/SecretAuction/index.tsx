import ProductDetail from "@/components/ProductDetail";
import SliderAuction from "./SliderAuction";
import { Button } from "antd";
import { Link } from "react-router-dom";
const auctionData = [
    {
        image: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
        title: 'Card 1',
        description: 'Info which directs to the other page.',
    },
    {
        image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
        title: 'Card 2',
        description: 'Info which directs to the other page.',
    },
    {
        image: 'https://images.pexels.com/photos/1128678/pexels-photo-1128678.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
        title: 'Card 3',
        description: 'Info which directs to the other page.',
    },
    {
        image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
        title: 'Card 4',
        description: 'Info which directs to the other page.',
    },
    {
        image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
        title: 'Card 5',
        description: 'Info which directs to the other page.',
    },
    {
        image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
        title: 'Card 7',
        description: 'Info which directs to the other page.',
    }
];
function SecretAuction(){
    return(
        <div>
            <ProductDetail/>
            <div className="max-w-screen-xl mx-auto">
                <div className="info">
                    <p className="text-2xl font-bold text-gray-600 mb-4">Related Paintings</p>
                </div>
                <SliderAuction data={auctionData} />
                <div>
                    <p className="text-2xl font-bold text-gray-600 mb-4">Related Searches</p>
                </div>
                <div>
                    <Button className="m-2"><Link to={''}>Auctions in Orlando</Link></Button>
                    <Button className="m-2"><Link to={''}>Auctions in Orlando</Link></Button>
                    <Button className="m-2"><Link to={''}>Auctions in Orlando</Link></Button>
                </div>
            </div>
        </div>
    )
}

export default SecretAuction;