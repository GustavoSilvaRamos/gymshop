import Link from 'next/link'

export function Apres() {
  return (
    <div className="fundo2">
      <div className="container flex flex-col pt-20 mx-auto">
        <h1 className="text-5xl font-semibold text-white ">
          PONTO DE PARTIDA PARA SEU TREINO
        </h1>
        <p className="pt-5 text-base text-gray-300">
          A nossa nova coleção vai elevar o seu treino ao nível superior
        </p>
        <div className="pt-16 pb-20">
          <Link href="shop">
            <a>
              <button className="px-24 py-4 font-semibold text-black bg-white">
                CONFIRA
              </button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}
