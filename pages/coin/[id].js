import Image from "next/image";
function Detail_coin({ coin }) {
  return (
    <div className="absolute inset-0 container m-auto border border-l-8 border-r-8 p-6 border-blue-500 flex flex-col justify-center items-center bg-gradient-to-r from-black via via-gray-800 to-gray-900 text-gray-300">
      <div className="p-5 mb-9">
        {/* --------image-------- */}
        <Image
          src={coin.image.large}
          width={200}
          height={200}
          alt={coin.name}
          className="mb-2 object-contain"
        />
      </div>
      <div className="tracking-wider font-bold uppercase mb-2 text-blue-500">
        {coin.name}
        {/* --------name-------- */}
      </div>
      <div className="flex flex-between space-x-4 mb-2">
        {" "}
        {/* --------symbol & current-------- */}
        <p className="tracking-wider font-semibold uppercase">{coin.symbol}</p>
        <p className="tracking-wider font-semibold uppercase">
          {coin.genesis_date}
        </p>
      </div>
      <div className="tracking-wider font-semibold uppercase">
        {/* --------market cap-------- */}
        Market Cap: ${coin.market_data.current_price.usd}
      </div>
    </div>
  );
}

export default Detail_coin;

export const getServerSideProps = async (context) => {
  const { id } = context.query;
  const data = await fetch(`https://api.coingecko.com/api/v3/coins/${id}
  `);
  const coin = await data.json();

  return {
    props: {
      coin,
    },
  };
};
