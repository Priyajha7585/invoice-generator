import React from 'react'

function TableForm({description, setDescription, quantity, setQuantity, price, setPrice, amount, setAmount}) {
  return (
    <>
        <div className="flex flex-col">
            <label htmlFor="description">Item Description</label>
            <input type="text" name="description" id="description" placeholder="Item description"
                value={description} onChange={(e)=>setDescription(e.target.value)}
            />
        </div>
        <div className="md:grid grid-cols-3 gap-10">
            <div className="flex flex-col">
                <label htmlFor="quantity">Quantity</label>
                <input type="text" name="quantity" id="quantity" placeholder="Quantity"
                    value={quantity} onChange={(e)=>setQuantity(e.target.value)}
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="price">Price</label>
                <input type="text" name="price" id="price" placeholder="Price"
                    value={price} onChange={(e)=>setPrice(e.target.value)}
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="amount">Amount</label>
                <input type="text" name="amount" id="amount" placeholder="Amount"
                    value={amount} onChange={(e)=>setAmount(e.target.value)}
                />
            </div>
        </div>
        
    </>
  )
}

export default TableForm