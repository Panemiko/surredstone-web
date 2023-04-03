import Link from 'next/link'
import {
  IoLogoGithub as GithubLogo,
  IoMdMenu as MenuIcon,
} from 'react-icons/io'
import { SiDiscord as DiscordLogo } from 'react-icons/si'

import { Page } from '@/components/Page'

export default function HomePage() {
  return (
    <Page>
      <div className='bg-gradient-to-b from-darker-900 via-darker-800 to-darker-900'>
        <main
          className='bg-cover bg-center'
          style={{ backgroundImage: 'url("./background.jpg")' }}
        >
          {/* This element is needed to apply the blur on the background */}
          <div className='backdrop-blur-sm pb-36'>
            <header className='flex justify-end md:justify-center md:mb-40 p-6 mb-20'>
              <ul className='hidden md:flex gap-16'>
                <li>
                  <Link className='text-darker-300' href='/contact'>
                    Contato
                  </Link>
                </li>
                <li>
                  <Link className='text-darker-300' href='/editions'>
                    Edições
                  </Link>
                </li>
                <li>
                  <Link className='text-darker-300' href='/modpack'>
                    Modpack
                  </Link>
                </li>
                <li>
                  <Link className='text-darker-300' href='/texture'>
                    Textura
                  </Link>
                </li>
              </ul>
              <button className='md:hidden' aria-label='Expandir menu'>
                <MenuIcon className='fill-dark-300 h-6 w-fit' />
              </button>
            </header>
            <h1 className='mb-16 font-black text-4xl md:text-8xl text-dark-50 text-center mx-6'>
              SURREDSTONE
            </h1>
            <p className='text-center text-lg md:text-xl text-dark-50 mx-6'>
              Explorando as possibilidades de um jogo infinito
            </p>
          </div>
        </main>
        <section
          className='py-28 px-4 md:px-0 md:grid md:gap-2 md:grid-cols-12'
          id='about'
        >
          <h1 className='text-green md:col-start-5 md:col-end-9 md:text-4xl font-bold text-center mx-5 text-3xl mb-6'>
            O que é o Surredstone?
          </h1>
          <p className='md:text-xl text-green-50 md:col-start-4 md:col-end-10 text-center'>
            O Surredstone é um servidor de <b>Minecraft</b> focado no{' '}
            <b>survival</b>. Ele é atualmente{' '}
            <b>realizado semestralmente, durante 1 mês</b>. O servidor foi
            criado em 2019, durante as férias de inverno, com participação
            apenas de 3 pessoas.
          </p>
        </section>
        <div className='md:grid md:gap-2 md:grid-cols-12'>
          <hr className='mx-8 md:mx-0 md:col-start-3 md:col-end-11 border-px border-darker-600' />
        </div>
        <section
          id='propose'
          className='md:px-0 md:grid md:gap-2 md:grid-cols-12 py-28 px-4'
        >
          <h1 className='text-cyan md:col-start-5 md:col-end-9 md:text-4xl font-bold text-center text-3xl mb-12'>
            Proposta
          </h1>
          <div className='mb-20 md:mb-0 md:col-start-3 md:col-end-7 md:pr-14'>
            <h2 className='md:text-2xl text-cyan font-semibold text-center text-xl mb-6'>
              Muito mais que Minecraft
            </h2>
            <p className='md:text-lg text-cyan-50 text-center'>
              O Surredstone <b>não se prende</b> apenas ao comum modo
              sobrevivência, ele usa as{' '}
              <b>possibilidades ilimitadas do Minecraft</b> a favor de seus
              jogadores, para proporcionar a melhor experiência possível.
            </p>
          </div>
          <div className='md:col-start-7 md:col-end-11 md:pl-14'>
            <h2 className='md:text-2xl text-cyan font-semibold text-center text-xl mb-6'>
              Os jogadores comandam
            </h2>
            <p className='md:text-lg text-cyan-50 text-center'>
              <b>Nenhuma alteração fundamental</b> é feita no servidor sem a{' '}
              <b>aprovação da maioria dos jogadores</b>, para garantir que não
              haja discórdia entre os players. Eles{' '}
              <b>sugerem, alteram e criam</b> o servidor.
            </p>
          </div>
        </section>
        <section
          id='features'
          className='px-4 pb-28 md:px-0 md:grid md:gap-2 md:grid-cols-12'
        >
          <h1 className='text-pink md:text-4xl md:col-start-5 md:col-end-9 font-bold text-center text-3xl mb-12'>
            Usando tudo de um jogo infinito
          </h1>
          <p className='text-pink-50 md:col-start-4 md:col-end-10 md:text-lg text-center mb-12'>
            Nenhuma das modificações são obrigatórias, mas elas são recomendadas
            para melhorar a experiência padrão do jogo.
          </p>
          <div className='md:col-start-3 md:col-end-7 md:mb-0 md:mx-8 md:py-12 md:px-8 bg-darker-700 py-8 px-4 mb-8 rounded-2xl text-pink-50'>
            <h2 className='md:text-3xl text-center font-bold text-2xl mb-10'>
              Modpack
            </h2>
            <p className='md:text-lg'>
              Já que muitos não possuem acesso ao <b>Lunar Client</b>, montamos
              um modpack para <b>substituir as funcionalidades</b> do Launcher.
              <br />
              Essas modificações incluem: um modpack para{' '}
              <b>substituir as funcionalidades</b> do Launcher.
            </p>
            <br />
            <ol className='list-disc list-inside md:text-lg'>
              <li>Otimizações</li>
              <li>Opção de shaders</li>
              <li>Melhorias para servidores</li>
            </ol>
          </div>
          <div className='md:col-start-7 md:col-end-11 md:mx-8 md:py-12 md:px-8 bg-darker-700 py-8 px-4 rounded-2xl text-pink-50'>
            <h2 className='text-center font-bold md:text-3xl text-2xl mb-10'>
              Textura
            </h2>
            <p className='md:text-lg'>
              A textura é feita para dar a todos no servidor uma experiência
              similar, junto a Elytras customizadas e texturas personalizadas
              para as modificações do servidor.
            </p>
          </div>
        </section>
        <section
          id='join'
          className='px-4 pb-28 md:px-0 md:grid md:gap-2 md:grid-cols-12'
        >
          <h1 className='text-orange md:text-4xl md:col-start-5 md:col-end-9  font-bold text-center text-3xl mb-6'>
            Para entrar
          </h1>
          <p className='text-orange-50 md:text-lg md:col-start-4 md:col-end-10  text-center'>
            Para <b>manter o servidor</b>, é preciso uma hospedagem
            dedicada, então é preciso cada jogador pagar uma parte do valor.
            O jogo é feito na versão <b>Java do Minecraft</b>, portanto, é necessário
            um computador capaz de executar as versões mais recentes.
          </p>
        </section>
        <section
          id='open'
          className='px-4 pb-28 md:px-0 md:grid md:gap-2 md:grid-cols-12'
        >
          <h1 className='text-red md:text-4xl md:col-start-5 md:col-end-9 font-bold text-center text-3xl mb-6'>
            Código aberto
          </h1>
          <p className='text-red-50 text-center md:text-lg md:col-start-4 md:col-end-10'>
            Este projeto é de{' '}
            <Link target='_blank' href='https://github.com/Surredstone'>
              código aberto
            </Link>{' '}
            e contribuições são bem-vindas.
          </p>
        </section>
        <footer className='bg-darker-700 md:flex-row md:justify-evenly py-12 text-center flex flex-col items-center'>
          <span className='text-lg text-purple-100 mb-3'>by Panem</span>
          <div className='flex gap-16'>
            <Link target='_blank' href='https://github.com/Surredstone'>
              <GithubLogo className='text-pink-50 h-8 w-8' />
            </Link>
            <Link target='_blank' href='https://discord.gg/nG5ZbNMKt7'>
              <DiscordLogo className='text-pink-50 h-8 w-8' />
            </Link>
          </div>
        </footer>
      </div>
    </Page>
  )
}
