import Head from "next/head";
import Image from "next/image";
import { Navbar } from "../components/Navbar";
import Coin from "../components/Coin";
import bitcoin from "../public/images/bitcoin.png";
export default function Home({ resCoin }) {
  return (
    <div className="bg-gradient-to-r from-gray-700 via-gray-800 to-black ">
      <Head>
        <title>Next Crypto</title>
      </Head>
      <Navbar />
      <div className="my-5 flex flex-col justify-center text-gray-400 font-semibold">
        <Image
          src={bitcoin}
          width={50}
          height={50}
          className="object-contain"
        />
        <div className="leading-loose tracking-widest text-lg text-center">
          CRYPTO
        </div>
        <div className=" text-sm tracking-wider text-center -mt-2">Tacker</div>
      </div>
      <div className="container bg-gray-900 border border-green-200 mx-auto p-2">
        {/* --------------mapping all the coins----------- */}
        {resCoin.map((coin) => {
          return (
            <Coin
              key={coin.id}
              name={coin.name}
              id={coin.id}
              image={coin.image}
              symbol={coin.symbol}
              marketcap={coin.total_volume}
              volume={coin.market_cap}
              price={coin.current_price}
              priceChange={coin.price_change_percentage_24h}
            />
          );
        })}
      </div>
    </div>
  );
}
export const getServerSideProps = async () => {
  const data = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false' \
  -H 'accept: application/json"
  );
  const resCoin = await data.json();
  return {
    props: {
      resCoin,
    },
  };
};
