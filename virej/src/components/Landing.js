import "./landing.css";
import { Box, Image } from "@chakra-ui/react";

function Landing() {
  return (
    <div className="App">
      <div className="topGradient-1"></div>
      <div className="topGradient-2"></div>
      <div className="topGradient-3"></div>

      <Image
        className="spiralBG"
        src={"https://i.imgur.com/FNYoEkE.png"}
        alt=""
      />

      <div className="landingContainer">
        <h1 className="landingTitle">
          "Own a piece of
          <br />
          Artificial Intelligence."
        </h1>
        <h2 className="landingSubtitle">Imaginate & Generate</h2>
        <p className="landingDescription">
          These are AI generated image NFTs which a user can create by typing a
          phrase and making a NFT of the image.
        </p>

        <Box
          style={{
            position: "absolute",
            width: "658.5px",
            height: "658.5px",
            left: "55%",
            top: "10px",
            zIndex: "1",
          }}
        >
          <Image src={"https://i.imgur.com/Ev99hGI.png"} alt="Dan Abramov" />
        </Box>

        <Box
          className="poweredBy"
          style={{
            position: "absolute",
            width: "250px",
            left: "-14px",
            top: "551.44px",
            zIndex: "1",
          }}
        >
          <Image src={"https://i.imgur.com/cryDzR0.png"} alt="Dan Abramov" />
        </Box>
        <button className="mintButton">Mint your NFT {">"}</button>
      </div>
    </div>
  );
}

export default Landing;
