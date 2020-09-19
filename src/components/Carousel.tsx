export function Carousel({ imgSrc, desc, price }) {
  return (
    <button className="flex flex-col items-center justify-center px-6 pt-3 pb-5 text-center transition duration-500 ease-in-out border-4 border-gray-300 hover:border-gray-700">
      <img src={imgSrc} alt="" />
      <p className="text-xl font-bold">{desc}</p>
      <p className="font-bold text-gray-500">{price}</p>
    </button>
  )
}
