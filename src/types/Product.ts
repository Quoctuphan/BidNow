type Product = {
  id: string,
  productName: string,
  image: Array<string>,
  startingPrice: number,
  category: string,
  bidIncrement: number,
  quantity: number,
  seller: string,
  appraiser: string,
  warehouse: string,
  description: string,
  isOnlineAuction: boolean,
  isSealedBidAuction: boolean,
  status: string,
}

export {type Product};