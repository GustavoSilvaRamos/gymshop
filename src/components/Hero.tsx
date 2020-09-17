import Link from 'next/link'
export function Hero() {
  return (
    <div className="min-h-screen fundo">
      <div className="container flex justify-between w-screen py-5 mx-auto">
        <div>
          <h1 className="text-2xl font-bold text-white ">CASA DO ATLETISMO</h1>
        </div>
        <div>
          <ul className="flex space-x-8 text-base font-semibold tracking-wide text-white">
            <Link href="index">
              <a className="linker">Inicio</a>
            </Link>
            <Link href="shop">
              <a className="linker">Loja virtual</a>
            </Link>
            <Link href="aboutus">
              <a className="linker">Sobre nós</a>
            </Link>
            <Link href="contact">
              <a className="linker">Contato</a>
            </Link>
            <Link href="cart">
              <a className="linker">Carrinho</a>
            </Link>
          </ul>
        </div>
      </div>
      <div className="container flex flex-col w-full pt-32 mx-auto">
        <h1 className="text-5xl font-semibold text-white ">
          <span className="text-5xl font-normal text-white">FAÇA TREINO</span>
          <br />
          COM O NOSSO <br /> EQUIPAMENTO
        </h1>
        <p className="w-5/12 pt-5 text-lg leading-relaxed tracking-wider text-gray-300">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium.
        </p>
        <div className="pt-10">
          <Link href="shop">
            <a>
              <button className="text-lg font-semibold leading-relaxed tracking-wider text-gray-300 border-b-2 border-gray-600 hover:text-white hover:border-white">
                EXPLORE TODOS OS ARTIGOS
              </button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}
