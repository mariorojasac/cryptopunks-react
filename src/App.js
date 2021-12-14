import { useEffect, useState } from "react";
import "./App.css";
import CollectionCard from "./components/CollectionCard";
import Header from "./components/Header";
import axios from "axios";
import PunkList from "./components/PunkList";
import './components/PunkList.css';

function App() {
  const [ punkListData, setPunkListData ] = useState([]);

  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get(
        "https://testnets-api.opensea.io/assets?asset_contract_address=0x12e05e76c06527A169af05d77EcbDAe345D8d06d&order_direction=asc"
      );
      console.log(openseaData.data.assets);
      setPunkListData(openseaData.data.assets);
    };
    return getMyNfts();
  }, []);

  return (
    <div className="app">
      <Header />

      <PunkList punkListData={punkListData} />
    </div>
  );
}

export default App;
