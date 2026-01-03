function Payment() {
    return ( 
        <div className="w-[380px] h-fit text-center text-[#545454] space-y-4 px-3 pt-2 pb-8 m-auto border-2 shadow-md ">
            <h1 className="font-semibold text-2xl ">Palce Bid</h1>
            <p className="text-lg text-left font-medium">Please deposit 10% of the minimum product value before participating in the auction. Money will be refunded if you do not win the bid!</p>
            <div className=" p-4 text-left mx-4 space-x-6 grid grid-cols-2 border-2 rounded-md font-medium">
                {/* form */}
                <div className="col-span-1 space-y-1"> 
                    <p>Buyer's Premium</p>
                    <p>Subtotal</p> 
                </div>
                <div className="col-span-1 space-y-1">
                    <p>$172.50 (10%)</p>
                    <p>$172.50</p> 
                    </div>
                {/* button */}
                
            </div>
            <button className="w-[330px] mb-5 bg-[#b41712] hover:opacity-85 hover:ring-offset-pink-900 text-lg text-white p-2 rounded-lg">
                <span> Send
            </span></button>
        </div>  
     );
}

export default Payment;