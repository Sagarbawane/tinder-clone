import { TINDER_ADDRESS, TINDER_ABI } from "../../lib/constants";
import Moralis from "moralis/node";
import { ethers } from "ethers";

const mintMatchNft = async (req, res) => {
  await Moralis.start({
    serverUrl: "https://zljjkjqi5hwu.usemoralis.com:2053/server",
    appId: "a63Nt1HzuhH6ggchpphCm9wIwT2Tsc2I0OmBkKgf",
    masterKey: "SIyUl7Ge7ExbD32lXPm39oE51MIt5E2WmD9lhk9f",
  });

  const metadata = {
    name: `${req.body.names[0]} & ${req.body.names[1]}`,
    description: `${req.body.names[0].split(" ")[0]} & ${
      req.body.names[1].split(" ")[0]
    } just matched!`,
    image: `ipfs://QmY4tKpDGzVHzaSkQc5gzVMCMNoznZqaX15DXkyL2bPp8Z`,
  };

  const toBtoa = Buffer.from(JSON.stringify(metadata)).toString("base64");
  const metadataFile = new Moralis.File("file.json", { base64: toBtoa });

  await metadataFile.saveIPFS({ useMasterKey: true });

  const metadataURI = metadataFile.ipfs();

  const provider = ethers.getDefaultProvider(
    "https://eth-rinkeby.alchemyapi.io/v2/g0MsUmOcXtSd57BfJlWQzPGttoq_acIY",
    {
      chainId: 4,
      name: "rinkeby",
    }
  );

  const walletWithProvider = new ethers.Wallet(
    "758cb3d970820f1f375ecb7ae9cc6e12d65b771c133651530b4a334d7bb8e619",
    provider
  );

  const contract = new ethers.Contract(
    TINDER_ADDRESS,
    TINDER_ABI,
    walletWithProvider
  );

  const tx = await contract.mintNFT(
    req.body.walletAddresses[0],
    req.body.walletAddresses[1],
    metadataURI
  );

  const txReceipt = await tx.wait();

  res.status(200).send({
    message: "success",
    data: { tx: tx, txReceipt: txReceipt },
  });
};

export default mintMatchNft;
