import React from 'react';
import { Button, Carousel, ConfigProvider } from 'antd';


// Define styles for the content of the carousel
const contentStyle: React.CSSProperties = {
  margin: 0,
  padding: '10px',
  color: '#000',
  textAlign: 'center',
  background: '#fff',
};

interface CarouselItem {
  type: string;
  image: string;
  name: string;
  startbid: number;
  currentBid?: number;
  nextBid?: number;
  endsIn?: string;
  bidsCount?: number;
  biddersCount?: number;
}

interface CarouselProsProps {
  items: CarouselItem[];
}

// Function to group items for the carousel
const groupItems = (items: CarouselItem[], itemsPerGroup: number): CarouselItem[][] => {
  const groups = items.reduce<CarouselItem[][]>((result, item, index) => {
    const groupIndex = Math.floor(index / itemsPerGroup);
    if (!result[groupIndex]) {
      result[groupIndex] = [];
    }
    result[groupIndex].push(item);
    return result;
  }, []);

  // Ensure there are exactly 3 slides, even if some are empty
  while (groups.length < 3) {
    groups.push([]);
  }

  return groups;
};

// Define your custom theme for the Carousel component
const theme = {
  components: {
    Carousel: {
      dotActiveWidth: 24,  
      dotGap: 30,          
      dotHeight: 2,      
      dotOffset: 12,     
      dotWidth: 16,      
    },
  },
};

const CarouselPros: React.FC<CarouselProsProps> = ({ items }) => {
  const groupedItems = groupItems(items, 4);

  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  return (
    <ConfigProvider theme={theme}>
      <Carousel afterChange={onChange} autoplay dots={true} dotPosition='bottom'>
        {groupedItems.map((group, index) => (
          <div key={index} style={contentStyle}>
            <div className="flex justify-around"> 
              {group.map((item, itemIndex) => (   
                <div key={itemIndex} className="w-[23%] p-8 text-left rounded space-y-2 shadow-md border-b-2 rounded-bl-[5rem] rounded-tr-[5rem] relative overflow-hidden group hover:shadow-xl transition-shadow bg-white">
                  {item.endsIn && !item.endsIn.includes('Ended') && !item.endsIn.includes('Starts') && (
                    <div className="absolute top-4 right-6 flex items-center gap-1 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full z-10">
                      <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                      LIVE
                    </div>
                  )}
                  <div className="text-center text-xs text-gray-500 uppercase tracking-wider">{item.type}</div>
                  <img src={item.image} alt={item.name} className="w-[250px] h-[250px] object-cover mx-auto mb-2" />
                  <div className="font-semibold text-[18px] text-center">{item.name}</div>
                  <div className="border-t pt-2 space-y-1">
                    <div className="text-sm">Starting bid: <span className='font-semibold'>{item.startbid.toLocaleString()} USD</span></div>
                    
                    {item.currentBid && (
                      <div className="flex justify-between items-center">
                        <span className="text-sm">💰 Current Bid:</span>
                        <span className="font-bold text-[#B41712]">${item.currentBid.toLocaleString()}</span>
                      </div>
                    )}
                    
                    {item.nextBid && (
                      <div className="flex justify-between items-center text-xs text-gray-500">
                        <span>⬆️ Next Bid:</span>
                        <span>${item.nextBid.toLocaleString()}</span>
                      </div>
                    )}

                    {item.endsIn && (
                      <div className="flex justify-between items-center text-sm font-medium text-orange-600 bg-orange-50 px-2 py-1 rounded mt-1">
                        <span>⏳ Ends in:</span>
                        <span className="font-mono">{item.endsIn}</span>
                      </div>
                    )}

                    {(item.bidsCount !== undefined || item.biddersCount !== undefined) && (
                      <div className="text-[10px] text-gray-400 flex justify-between pt-1">
                        <span>👥 {item.bidsCount || 0} bids</span>
                        <span>{item.biddersCount || 0} bidders</span>
                      </div>
                    )}
                  </div>
                  <Button className="w-full mt-2 bg-[#B41712] hover:bg-[#8e120e] text-white border-none h-10 font-medium">Join the Auction</Button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </Carousel>
    </ConfigProvider>
  );
};

export default CarouselPros;
