interface auctionedItemProps {
    auctionName: string;
    endTime: string | number;
    imgSrc: string;
    startPrice: string | number;
    finalPrice: string | number;
}

function AuctionedItem({ auctionName, endTime, imgSrc, startPrice, finalPrice }: auctionedItemProps) {
    return (
        <div>
            <img src={imgSrc} alt={auctionName} />
            <div>
                <p>{auctionName}</p>
                <p>End Time: {endTime}</p>
                <p>Starting Price: {startPrice}USD</p>
                <p>Final Price: {finalPrice}USD</p>
            </div>
        </div>
    )
}

export default AuctionedItem;