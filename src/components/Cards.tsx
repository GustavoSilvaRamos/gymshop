import Link from 'next/link'

export function Cards() {
  return (
    <div className="container flex flex-col mx-auto">
      <div className="flex justify-center pt-10">
        <h1 className="text-5xl text-bold">OS MAIS VENDIDOS</h1>
      </div>
      <div className="grid grid-flow-row grid-cols-5 grid-rows-2 gap-10 pt-20 pb-20 ">
        <div className="flex flex-col items-center justify-center px-6 pt-3 pb-5 text-center transition duration-500 ease-in-out border-4 border-gray-300 hover:border-gray-700">
          <img src="bola.png" alt="" />
          <p className="text-xl font-bold">BOLA MEDICINAL DE 8 KG</p>
          <p className="font-bold text-gray-500">$59,00</p>
        </div>
        <div className="flex flex-col items-center justify-center px-6 pt-3 pb-5 text-center transition duration-500 ease-in-out border-4 border-gray-300 hover:border-gray-700">
          <img src="luvas.png" alt="" />
          <p className="text-xl font-bold">LUVA PARA ARTES MARCIAIS</p>
          <p className="font-bold text-gray-500">$39,00</p>
        </div>
        <div className="flex flex-col items-center justify-center px-6 pt-3 pb-5 text-center transition duration-500 ease-in-out border-4 border-gray-300 hover:border-gray-700">
          <img src="alteres.png" alt="" />
          <p className="text-xl font-bold">
            HALTERES AJUSTAVEIS COM PLACAS DURAVEIS
          </p>
          <p className="font-bold text-gray-500">$89,00</p>
        </div>
        <div className="flex flex-col items-center justify-center px-6 pt-3 pb-5 text-center transition duration-500 ease-in-out border-4 border-gray-300 hover:border-gray-700">
          <img src="tenis.png" alt="" />
          <p className="text-xl font-bold">TENIS DE CORRIDA PRETO E BRANCO</p>
          <p className="font-bold text-gray-500">$129,00</p>
        </div>
        <div className="flex flex-col items-center justify-center px-6 pt-3 pb-5 text-center transition duration-500 ease-in-out border-4 border-gray-300 hover:border-gray-700">
          <img src="saco.png" alt="" />
          <p className="text-xl font-bold">SACO DE PANCADA PARA TREINO</p>
          <p className="font-bold text-gray-500">$639,00</p>
        </div>
        <div className="flex flex-col items-center justify-center px-6 pt-3 pb-5 text-center transition duration-500 ease-in-out border-4 border-gray-300 hover:border-gray-700">
          <img src="tenis2.png" alt="" />
          <p className="text-xl font-bold">TENIS DE CORRIDA CINZA MASCULINO</p>
          <p className="font-bold text-gray-500">$129,00</p>
        </div>
        <div className="flex flex-col items-center justify-center px-6 pt-3 pb-5 text-center transition duration-500 ease-in-out border-4 border-gray-300 hover:border-gray-700">
          <img src="alteres2.png" alt="" />
          <p className="text-xl font-bold">KETTLEBEL DE 8 KG</p>
          <p className="font-bold text-gray-500">$89,00</p>
        </div>
        <div className="flex flex-col items-center justify-center px-6 pt-3 pb-5 text-center transition duration-500 ease-in-out border-4 border-gray-300 hover:border-gray-700">
          <img src="garrafa.png" alt="" />
          <p className="text-xl font-bold">GARRAFA DE AGUA FITNESS 1L</p>
          <p className="font-bold text-gray-500">$185,00</p>
        </div>
        <div className="flex flex-col items-center justify-center px-6 pt-3 pb-5 text-center transition duration-500 ease-in-out border-4 border-gray-300 hover:border-gray-700">
          <img src="alteres3.png" alt="" />
          <p className="text-xl font-bold">HALTERES DE 5 KG</p>
          <p className="font-bold text-gray-500">$39,00</p>
        </div>
        <div className="flex flex-col items-center justify-center px-6 pt-3 pb-5 text-center transition duration-500 ease-in-out border-4 border-gray-300 hover:border-gray-700">
          <img src="luvas2.png" alt="" />
          <p className="text-xl font-bold">LUVAS DE BOXE</p>
          <p className="font-bold text-gray-500">$89,00</p>
        </div>
      </div>
      <div className="flex justify-center pb-10">
        <Link href="shop">
          <a>
            <button className="text-black border-b-2 border-black">MAIS</button>
          </a>
        </Link>
      </div>
    </div>
  )
}
