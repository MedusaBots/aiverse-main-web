import './App.css';
import Card from "./Card";

function App() {
  return (
    <div className="App">
      <div className="App-header"><h1 className="h1">Aiverse NFT Gives Access</h1></div>
      <div className="carding">
      <Card title="Get Access" style={{marginLeft:"14rem"}}  hrcolor="rgb(230 93 45 / 83%)" color="rgb(230 93 45 / 83%)" text="Digital Begins AI Models"/>
      <Card title="Get Various" style={{marginLeft:"14rem"}} hrcolor="rgb(198 215 54 / 83%)" color="rgb(198 215 54 / 83%)" text="Collections"/>
      <Card title="Get Ownership" style={{marginLeft:"17rem"}} hrcolor="#41bc3bd4" color="#41bc3bd4" text="Land in Metaverse"/>
      </div>
     
    </div>
  );
}

export default App;
