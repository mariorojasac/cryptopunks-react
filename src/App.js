import { useEffect, useState } from "react";
import "./App.css";
import CollectionCard from "./components/CollectionCard";
import Header from "./components/Header";
import {useState, useEffect} from "react";

function App() {





  return (
    <div className="app">
      <Header />
      <CollectionCard
        id={0}
        name={"Bandana Punk"}
        traits={[{ value: 7 }]}
        image="https://nftlabs.mypinata.cloud/ipfs/bafkreiasgnibw32isqfyjnv5lhj4wxzp6izayculjlo4ampmmfla3j4tj4"
      />
    </div>
  );
}

export default App;
