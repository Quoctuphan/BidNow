import { Button } from 'antd';
import { motion } from 'framer-motion';
import React from 'react';
interface SliderAuctionProps{
    data: any[];
}

function SliderAuction({ data }: SliderAuctionProps) {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
    };

    if (currentIndex > data.length - 3) {
        setCurrentIndex(0);
    }

    return (
        <div className="mt-2 max-w-screen-xl mx-auto">
            <div className="w-11/12">
                <div className="relative">
                    <div className="flex space-x-4">
                        {data.slice(currentIndex, currentIndex + 3).map((card:any, index:any) => (
                            <motion.div
                                key={index}
                                className="flex-none w-1/3 p-4 bg-white rounded-lg shadow-md"
                                initial={{ opacity: 0, x: index === 0 ? -100 : index === 1 ? 0 : 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <img className="w-full h-32 object-cover mb-4 rounded-lg" src={card.image} alt="Card" />
                                <h3 className="text-lg font-bold">{card.title}</h3>
                                <p className="text-gray-500">{card.description}</p>
                            </motion.div>
                        ))}
                    </div>
                    <div className="flex items-center justify-between mt-4 relative bottom-44">
                        <Button
                            className="w-8 h-8 rounded-full bg-gray-300 relative right-4 items-center"
                            onClick={handlePrev}
                        >
                            &lt;
                        </Button>
                        <Button
                            className="w-8 h-8 rounded-full bg-gray-300 relative left-10 items-center"
                            onClick={handleNext}
                        >
                            &gt;
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SliderAuction;