import React from "react";

function App() {
  const handlePrint = () =>
  {
    window.print()
  }
  return (
    <>
      <main>
            {/* Header */}
        <header>
          <div>
            <h2>INVOICE GENERATOR</h2>
          </div>
          <div>
            <ul>
              <li><button onClick={handlePrint}>Print</button></li>
              <li>Download</li>
              <li>Send</li>
            </ul>
          </div>
        </header>
        {/* End of header */}

        {/* Your details */}
        <section>
          {/* <input type="text" name="text" id="text" placeholder="Enter your name" required/> */}
          <h2>Priya Jha</h2>
          <p>Your Address</p>
        </section>
        {/* End of your details */}

        {/* Client details */}
        <section>
          <h2>Client's Name</h2>
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
