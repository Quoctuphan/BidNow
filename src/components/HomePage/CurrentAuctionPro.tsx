import CarouselPros from './CarouselPros';
import { ImHammer2 } from 'react-icons/im';

const CurrentAuctionPro = () => {
    const items = [{
        type: "The auction is currently ongoing", 
        date: "10/07/2024", 
        time: "12/02/2024", 
        image: "", 
        name: "1.07 carat heart-shaped loose diamond certified IGI VS1", 
        startbid: 100,
    },{
        type: "The auction is currently ongoing", 
        date: "10/07/2024", 
        time: "12/02/2024", 
        image: "", 
        name: "1.07 carat heart-shaped loose diamond certified IGI VS1", 
        startbid: 100,
    }, {
        type: "The auction is currently ongoing", 
        date: "10/07/2024", 
        time: "12/02/2024", 
        image: "", 
        name: "1.07 carat heart-shaped loose diamond certified IGI VS1", 
        startbid: 100,
    }, {
        type: "The auction is currently ongoing", 
        date: "10/07/2024", 
        time: "12/02/2024", 
        image: "", 
        name: "1.07 carat heart-shaped loose diamond certified IGI VS1", 
        startbid: 100,
    },
    {
        type: "The auction is currently ongoing", 
        date: "10/07/2024", 
        time: "12/02/2024", 
        image: "", 
        name: "1.07 carat heart-shaped loose diamond certified IGI VS1", 
        startbid: 100,
    },{
        type: "The auction is currently ongoing", 
        date: "10/07/2024", 
        time: "12/02/2024", 
        image: "", 
        name: "1.07 carat heart-shaped loose diamond certified IGI VS1", 
        startbid: 100,
    }, {
        type: "The auction is currently ongoing", 
        date: "10/07/2024", 
        time: "12/02/2024", 
        image: "", 
        name: "1.07 carat heart-shaped loose diamond certified IGI VS1", 
        startbid: 100,
    }, {
        type: "The auction is currently ongoing", 
        date: "10/07/2024", 
        time: "12/02/2024", 
        image: "", 
        name: "1.07 carat heart-shaped loose diamond certified IGI VS1", 
        startbid: 100,
    }, 
    {
        type: "The auction is currently ongoing", 
        date: "10/07/2024", 
        time: "12/02/2024", 
        image: "", 
        name: "1.07 carat heart-shaped loose diamond certified IGI VS1", 
        startbid: 100,
    },{
        type: "The auction is currently ongoing", 
        date: "10/07/2024", 
        time: "12/02/2024", 
        image: "", 
        name: "1.07 carat heart-shaped loose diamond certified IGI VS1", 
        startbid: 100,
    }, {
        type: "The auction is currently ongoing", 
        date: "10/07/2024", 
        time: "12/02/2024", 
        image: "", 
        name: "1.07 carat heart-shaped loose diamond certified IGI VS1", 
        startbid: 100,
    }, {
        type: "The auction is currently ongoing", 
        date: "10/07/2024", 
        time: "12/02/2024", 
        image: "", 
        name: "1.07 carat heart-shaped loose diamond certified IGI VS1", 
        startbid: 100,
    }];


  return (
    <div className='text-center space-y-2'>
        <h1 className='text-[#B41712] font-semibold text-[36px]'>Current Auctioned Products</h1>
        <div className="flex justify-center gap-5 m-2">
                    <hr className='bg-gray-600 w-32 h-1 rounded-sm mt-3' />
                    <ImHammer2 size={32} className="text-mainBgColor" />
                    <hr className='bg-gray-600 w-32 h-1 rounded-sm mt-3' />
        </div>
        
        <CarouselPros items={items}/>

    </div>
  )
}

export default CurrentAuctionPro