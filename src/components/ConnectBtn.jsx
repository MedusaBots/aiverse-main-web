
import './connectBtn.css';

// function App() {
  const ConnectWalletButton = () => {

  const detectProvider = () => {
    let provider;
    if(window.ethereum) {
      provider= window.ethereum;
    }
    else if (window.web3){
      provider=window.web3.currentProvider;
    }
    else{window.alert("Metamask not installed");}
    return provider;

  }
  
  const login = async () => {
    const provider = detectProvider();
    if (provider) {
      if(provider !== window.ethereum){
        console.error("Not Window.ehereum provider")
      }
      await provider.request({
         method: "eth_requestAccounts",
      });}}
      login();
  return (
    <div className="btnBox">
     <button onClick={login} className="text" type="submit"> Connect Wallet</button>
    </div>
  );
}

export default  ConnectWalletButton;
