type PresideAuction = {
  id: string;
  auctionName: string;
  host: string;
  date: string | Date;
  time: string | Date;
  session: number;
  isPresiding: boolean;
}

export {type PresideAuction};