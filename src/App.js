import React, { useState } from "react";
import ClientDetails from "./components/ClientDetails";
import Dates from "./components/Dates";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainDetails from "./components/MainDetails";
import Notes from "./components/Notes";
import Table from "./components/Table";

function App() {
  const [showInvoice, setShowInvoice] = useState(true);
  const [name, setName] = useState("Priya Jha");
  const [address, setAddress] = useState("Surat, Gujarat");
  const [email, setEmail] = useState("priyajha7585@gmail.com");
  const [phone, setPhone] = useState("7984256476");
  const [bankName, setBankName] = useState("Kotak Bank");
  const [bankAccount, setBankAccount] = useState("89243798236732");
  const [website, setWebsite] = useState("www.priyajha.com");
  const [clientName, setClientName] = useState("Innovaccer");
  const [clientAddress, setClientAddress] = useState("Noida, Uttar Pradesh");
  const [invoiceNumber, setInvoiceNumber] = useState("1001");
  const [invoiceDate, setInvoiceDate] = useState("2022-08-01");
  const [dueDate, setDueDate] = useState("2022-09-01");
  const [notes, setNotes] = useState("Please make my payment");
  const handlePrint = () =>
    {
      window.print()
    }
  return (
    <>
      <main className="m-5 p-5 md:max-w-xl md:mx-auto lg:max-w-2xl xl:max-w-4xl  bg-white rounded shadow">
        
        {
          showInvoice ?
          (<div>
          <Header handlePrint={handlePrint}/>
          <MainDetails name={name} address={address}/>
          <ClientDetails clientName={clientName} clientAddress={clientAddress}/>
          <Dates invoiceNumber={invoiceNumber} invoiceDate={invoiceDate} dueDate={dueDate} />
          <Table />
          <Notes notes={notes} />
          <Footer name={name} email={email} phone={phone} website={website} bankName={bankName} bankAccount={bankAccount} />
          <button onClick={()=>setShowInvoice(false)} className="mt-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500
          hover:bg-transparent hover:text-blue-500 transition-all duration-300">Edit Information</button>
        </div>)
        :
        (
          <>
          {/* name, address, email, phone, bank name, bank account number, website, client name,
          client address, invoice number, invoice date, due date, notes */}
          <div className="flex flex-col justify-center">
          
          <article className="md:grid grid-cols-2 gap-10">
            <div className="flex flex-col">
              <label htmlFor="name">Enter your name</label>
              <input name="name" id="name" type="text" placeholder="Enter your name"
              value={name} onChange={(e)=>setName(e.target.value)} autoComplete="off"/>
            </div>
            <div className="flex flex-col">
              <label htmlFor="address">Enter your address</label>
              <input name="address" id="address" type="text" placeholder="Enter your address"
              value={address} onChange={(e)=>setAddress(e.target.value)} autoComplete="off"/>
            </div>
          </article>
          
          <article className="md:grid grid-cols-3 gap-10">
          <div className="flex flex-col">
            <label htmlFor="email">Enter your email</label>
            <input name="email" id="email" type="email" placeholder="Enter your email"
            value={email} onChange={(e)=>setEmail(e.target.value)} autoComplete="off"/>
          </div>
          <div className="flex flex-col">
            <label htmlFor="website">Enter your website</label>
            <input name="website" id="website" type="url" placeholder="Enter your website"
            value={website} onChange={(e)=>setWebsite(e.target.value)} autoComplete="off"/>
          </div>
          <div className="flex flex-col">
            <label htmlFor="phone">Enter your phone</label>
            <input name="phone" id="phone" type="text" placeholder="Enter your phone"
            value={phone} onChange={(e)=>setPhone(e.target.value)} autoComplete="off"/>
          </div>
          </article>
          
          <article className="md:grid grid-cols-2 gap-10">
            <div className="flex flex-col">
              <label htmlFor="bankName">Enter your bank name</label>
              <input name="bankName" id="bankName" type="text" placeholder="Enter your bank name"
              value={bankName} onChange={(e)=>setBankName(e.target.value)} autoComplete="off"/>
            </div>
            <div className="flex flex-col">
              <label htmlFor="bankAccount">Enter your bank account number</label>
              <input name="bankAccount" id="bankAccount" type="text" placeholder="Enter your bank account number"
              value={bankAccount} onChange={(e)=>setBankAccount(e.target.value)} autoComplete="off"/>
            </div>
          </article>
          
          <article className="md:grid grid-cols-2 gap-10 md:mt-10">
            <div className="flex flex-col">
              <label htmlFor="clientName">Enter client's name</label>
              <input name="clientName" id="clientName" type="text" placeholder="Enter client's name"
              value={clientName} onChange={(e)=>setClientName(e.target.value)} autoComplete="off"/>
            </div>
            <div className="flex flex-col">
              <label htmlFor="clientAddress">Enter client's address</label>
              <input name="clientAddress" id="clientAddress" type="text" placeholder="Enter client's address"
              value={clientAddress} onChange={(e)=>setClientAddress(e.target.value)} autoComplete="off"/>  
            </div>
          </article>

          <article className="md:grid grid-cols-3 gap-10">
          <div className="flex flex-col">
            <label htmlFor="invoiceNumber">Invoice number</label>
            <input name="invoiceNumber" id="invoiceNumber" type="text" placeholder="Invoice number"
            value={invoiceNumber} onChange={(e)=>setInvoiceNumber(e.target.value)} autoComplete="off"/>  
          </div>
          <div className="flex flex-col">
            <label htmlFor="invoiceDate">Invoice date</label>
            <input name="invoiceDate" id="invoiceDate" type="date" placeholder="Invoice date"
            value={invoiceDate} onChange={(e)=>setInvoiceDate(e.target.value)} autoComplete="off"/>   
          </div>
          <div className="flex flex-col">
            <label htmlFor="dueDate">Due date</label>
            <input name="dueDate" id="dueDate" type="date" placeholder="Due date"
            value={dueDate} onChange={(e)=>setDueDate(e.target.value)} autoComplete="off"/>   
          </div>
          </article>

          

          

          

          

          <label htmlFor="notes">Additional Notes</label>
          <textarea name="notes" id="notes" cols="30" rows="10" 
          placeholder="Additional notes to the client" value={notes} onChange={(e)=>setNotes(e.target.value)}>
          </textarea>

          <button onClick={()=>setShowInvoice(true)} className="bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500
          hover:bg-transparent hover:text-blue-500 transition-all duration-300">Preview Invoice</button>
          </div>
          </>
        )
        }
        
      </main>
    </>
  );
}

export default App;
