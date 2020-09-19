import Link from 'next/link'

export function Footer() {
  return (
    <div className="pt-10 bg-black min-w-screen">
      <div className="container pb-10 mx-auto border-b-2 border-gray-700">
        <div className="container flex justify-between mx-auto">
          <div className="flex flex-col items-start text-white">
            <h3 className="mb-2 text-lg font-semibold text-white">
              LOJA DE ESPORTES
            </h3>
            <p className="w-8/12 text-sm text-gray-300">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
            </p>
          </div>
          <div className="flex flex-col items-start text-white ">
            <h3 className="mb-2 text-lg font-semibold text-white">
              INFORMAÇÕES
            </h3>
            <button className="text-sm text-gray-300 border-b border-gray-300 cursor pointer">
              Termos e Condições
            </button>
            <button className="text-sm text-gray-300 border-b border-gray-300 cursor pointer">
              Política de Privacidade
            </button>
          </div>
          <div className="flex flex-col items-start text-white">
            <h3 className="mb-2 text-lg font-semibold text-white">LOJA</h3>
            <Link href="aboutus">
              <a>
                <button className="text-sm text-gray-300 border-b border-gray-300">
                  Sobre nós
                </button>
              </a>
            </Link>
            <Link href="contact">
              <a>
                <button className="text-sm text-gray-300 border-b border-gray-300">
                  Contato
                </button>
              </a>
            </Link>
          </div>
          <div className="text-white">
            <p>E-mail: gustavosramos1@hotmail.com</p>
            <p>Telefone: 17999999999</p>
          </div>
        </div>
      </div>
      <div className="container flex justify-center w-full pt-5 pb-5 mx-auto">
        <p className="text-xs text-white">
          Desenvolvido por{' '}
          <span className="font-semibold text-white underline cursor pointer">
            Gustavo
          </span>
        </p>
      </div>
    </div>
  )
}
