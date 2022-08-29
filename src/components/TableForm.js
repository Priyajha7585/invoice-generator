import React, {useState,useEffect} from 'react';
import {v4 as uuidv4} from 'uuid';
import {AiOutlineDelete, AiOutlineEdit} from 'react-icons/ai'

function TableForm({description, setDescription, quantity, setQuantity, price, setPrice, amount, setAmount, list, setList}) {
    
    const [isEditing, setIsEditing] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        const newItem = {
            id: uuidv4(),
            description,
            quantity,
            price,
            amount,
        }
        setDescription("")
        setQuantity("")
        setPrice("")
        setAmount("")
        setList([...list, newItem])
        setIsEditing(false)
        console.log(list)
    }
    useEffect(()=>{
        const calculateAmount = (amount) => {
            setAmount(quantity * price)
        }
        calculateAmount(amount)
    }, [amount, setAmount, quantity, price])

    // Edit function
    const editRow = (id) => {
        const editingRow = list.find((row) => row.id === id)
        setList(list.filter((row)=>row.id!==id))
        setIsEditing(true)
        setDescription(editingRow.description)
        setQuantity(editingRow.quantity)
        setPrice(editingRow.price)
    }

    // Delete Function
    const deleteRow = (id) => {
        setList(list.filter((row) => row.id!==id))
    }

  return (
    <>
        <form onSubmit={handleSubmit}>
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
                <p>{amount}</p>
            </div>
        </div>
        <button type="submit" className="bg-blue-500 text-white font-bold mb-5 py-2 px-8 rounded shadow border-2 border-blue-500
          hover:bg-transparent hover:text-blue-500 transition-all duration-300">{isEditing===false ? <>Add Table Item</> : <>Edit Table Item</>}</button>
        </form>
        {/* Table Items */}
        <table width="100%" className="mb-10">
            <thead>
                <tr className="bg-gray-100 p-1">
                <td className="font-bold">Item Description</td>
                <td className="font-bold">Quantity</td>
                <td className="font-bold">Price</td>
                <td className="font-bold">Amount</td>
                </tr>
            </thead>
            {list.map(({id, description, quantity, price, amount}) => (
                <React.Fragment key={id}>
                    <tbody>
                        <tr>
                        <td>{description}</td>
                        <td>{quantity}</td>
                        <td>{price}</td>
                        <td>{amount}</td>
                        <td><button onClick={()=>editRow(id)}>
                        <AiOutlineEdit className="text-green-500 font-bold text-xl"/></button></td>
                        <td><button onClick={()=>deleteRow(id)}>
                        <AiOutlineDelete className="text-red-500 font-bold text-xl"/></button></td>
                        </tr>
                    </tbody>
                </React.Fragment>
            ))}
        </table>
    </>
  )
}

export default TableForm