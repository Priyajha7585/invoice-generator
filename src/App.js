import React from "react";

function App() {
  const handlePrint = () =>
  {
    window.print()
  }
  return (
    <>
      <main className="m-5 p-5 xl:max-w-4xl xl:mx-auto bg-white rounded shadow">
            {/* Header */}
        <header className="flex flex-col items-center justify-center mb-5 xl:flex-row xl:justify-between">
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
        <section className="mt-5">
          <h2 className="text-xl uppercase">Client's Name</h2>
          <p>Client's Address</p>
        </section>
        {/* End of client details */}

        {/* Dates */}
        <article className="my-5 flex items-end justify-end">
          <ul>
            <li><span className="font-bold">Invoice number : </span></li>
            <li><span className="font-bold">Invoice date : </span></li>
            <li><span className="font-bold">Due date : </span></li>
          </ul>
        </article>
        {/* End of Dates */}

        {/* Table */}
          <div className="my-5 ">
            This is the table
          </div>
        {/* End of Table */}

        {/* Notes */}
        <section className="mb-5">
          <p>Notes to the client...</p>
        </section>
        {/* End of Notes */}

        {/* Footer */}
        <footer>
          <ul className="flex flex-wrap items-center justify-center">
            <li><span className="font-bold">Your name :</span> Priya Jha</li>
            <li><span className="font-bold">Your email :</span> priyajha7585@gmail.com</li>
            <li><span className="font-bold">Phone number :</span> 7984256476</li>
            <li><span className="font-bold">Bank :</span> Kotak bank</li>
            <li><span className="font-bold">Account holder name :</span> Priya Jha</li>
            <li><span className="font-bold">Account number :</span> 78328732763287</li>
            <li><span className="font-bold">Website :</span> www.priyajha.com</li>
          </ul>
        </footer>
        {/* End of Footer */}
                {/* Footer */}
                <footer>
          <ul className="flex flex-wrap items-center justify-center">
            <li><span className="font-bold">Your name :</span> Priya Jha</li>
            <li><span className="font-bold">Your email :</span> priyajha7585@gmail.com</li>
            <li><span className="font-bold">Phone number :</span> 7984256476</li>
            <li><span className="font-bold">Bank :</span> Kotak bank</li>
            <li><span className="font-bold">Account holder name :</span> Priya Jha</li>
            <li><span className="font-bold">Account number :</span> 78328732763287</li>
            <li><span className="font-bold">Website :</span> www.priyajha.com</li>
          </ul>
        </footer>
        {/* End of Footer */}
      </main>
    </>
  );
}

export default App;
