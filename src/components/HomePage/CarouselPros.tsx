import React from 'react';
import { Button, Carousel, ConfigProvider } from 'antd';
const coinImage = "./../src/assets/images/coin.png"

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
  date: string;
  time: string;
  image: string;
  name: string;
  startbid: number;
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
                <div key={itemIndex} className="w-[23%] p-8 text-left rounded space-y-2 shadow-md border-b-2 rounded-bl-[5rem] rounded-tr-[5rem] ">
                  <div className="text-center">{item.type}</div>
                  <div className="text-center font-semibold">{item.date} - {item.time}</div>
                  <img src={coinImage} alt={item.name} className="w-[250px] h-[250px] object-cover mx-auto mb-2" />
                  <div className="font-semibold text-[18px] text-center">{item.name}</div>
                  <div className="">Starting bid: <span className='font-semibold'>{item.startbid} USD</span></div>
                  <Button className="mt-2 px-4 py-2 bg-[#B41712] text-white rounded">Join the Auction</Button>
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
