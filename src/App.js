import React from "react";
import ClientDetails from "./components/ClientDetails";
import Dates from "./components/Dates";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainDetails from "./components/MainDetails";
import Notes from "./components/Notes";
import Table from "./components/Table";

function App() {
  const handlePrint = () =>
    {
      window.print()
    }
  return (
    <>
      <main className="m-5 p-5 xl:max-w-4xl xl:mx-auto bg-white rounded shadow">
        
        <Header handlePrint={handlePrint}/>
        <MainDetails />
        <ClientDetails />
        <Dates />
        <Table />
        <Notes />
        <Footer />
        
      </main>
    </>
  );
}

export default App;
