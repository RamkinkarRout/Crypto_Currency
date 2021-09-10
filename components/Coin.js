import Image from "next/image";
// import logo from "../public/images/logo.png";
import Link from "next/link";
function Coin({
  id,
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
}) {
  return (
    <Link href="/coin/[id]" as={`/coin/${id}`}>
      <a>
        <div className="justify-between p-5 items-center inline-flex text-base font-bold text-gray-300 h-20 w-full hover:bg-gray-500">
          {/* ---------icon and name---------- */}
          <div
            className="flex w-32 
      "
          >
            <Image
              src={image}
              width={30}
              height={30}
              alt={name}
              className="object-contain "
            />
            <p className="tracking-wide ml-3 ">{name}</p>
          </div>
          {/* -----------symbol----------- */}
          <div className=" uppercase tracking-wide ">{symbol}</div>
          {/* -------------------price------------ */}
          <div className=" ">${price}</div>
          {/* -------------------volume---------------- */}
          <div className=" ">${volume.toLocaleString()}</div>
          {/* ---------------price change-------------- */}
          {priceChange < 0 ? (
            <div className="  text-red-600">{priceChange.toFixed(2)}%</div>
          ) : (
            <div className=" text-green-600">{priceChange.toFixed(2)}%</div>
          )}

          {/* --------------mkt cap---------- */}
        </div>
      </a>
    </Link>
  );
}

export default Coin;
