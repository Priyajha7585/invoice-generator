import React from "react";

function App() {
  const handlePrint = () =>
  {
    window.print()
  }
  return (
    <>
      <main className="m-5 p-5 lg:max-w-xl lg:mx-auto bg-white rounded shadow">
            {/* Header */}
        <header className="flex flex-col items-center justify-center mb-5">
          <div>
            <h1 className="font-bold uppercase tracking-wide text-4xl mb-3">INVOICE GENERATOR</h1>
          </div>
          <div>
            <ul className="flex items-center justify-between flex-wrap">
              <li><button onClick={handlePrint} className="btn btn-print">Print</button></li>
              <li><button className="btn btn-download">Download</button></li>
              <li><button className="btn btn-send">Send</button></li>
            </ul>
          </div>
        </header>
        {/* End of header */}

        {/* Your details */}
        <section className="flex flex-col items-center justify-end">
          {/* <input type="text" name="text" id="text" placeholder="Enter your name" required/> */}
          <h2 className="text-xl uppercase">Priya Jha</h2>
          <p>Your Address</p>
        </section>
        {/* End of your details */}

        {/* Client details */}
        <section>
          <h2 className="text-xl uppercase">Client's Name</h2>
          <p>Client's Address</p>
        </section>
        {/* End of client details */}

        {/* Dates */}
        <article>
          <ul>
            <li>Invoice number : </li>
            <li>Invoice date : </li>
            <li>Due date : </li>
          </ul>
        </article>
        {/* End of Dates */}

        {/* Table */}

        {/* End of Table */}

        {/* Notes */}
        <section>
          <p>Notes to the client...</p>
        </section>
        {/* End of Notes */}

        {/* Footer */}
        <footer>
          <ul>
            <li>Your name : </li>
            <li>Your email : </li>
            <li>Phone number : </li>
            <li>Bank : </li>
            <li>Account holder name : </li>
            <li>Account number : </li>
            <li>Website : </li>
          </ul>
        </footer>
        {/* End of Footer */}
      </main>
    </>
  );
}

export default App;
