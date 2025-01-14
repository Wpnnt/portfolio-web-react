import Head from "next/head";
import {
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import wpnnt from "../public/profile.png";
import Image from "next/image";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons font text-xl">developed by <a href='https://github.com/Wpnnt' target="_blank" rel="noreferrer">wpnnt</a> </h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>             
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Paulo Vitor
            </h2>
            <div className="mx-auto bg-gradient-to-b from-[#0505f5] rounded-full w-80 h-80 relative overflow-hidden mt-3 md:h-96 md:w-96">
              <Image src={wpnnt} layout="fill" objectFit="cover" alt="Profile picture" />
            </div>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Junior Developer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
            Dev Júnior com foco em Full-Stack e iniciando como freelancer. Meu objetivo é me tornar um programador pleno em breve, sempre em busca de aprendizado e evolução. Acompanhe minhas redes sociais abaixo para saber mais sobre meus projetos e progressos.
            </p>

            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a href="https://www.linkedin.com/in/paulo-vitor37/" target="_blank" rel="noopener noreferrer">
                <AiFillLinkedin className="hover:text-blue-700" />
              </a>
              <a href="https://github.com/Wpnnt" target="_blank" rel="noopener noreferrer">
                <AiFillGithub className="hover:text-blue-700" />
              </a>
            </div>
          </div>
        </section>
        <section>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            Desde o início, sempre tive uma grande afinidade pela área de desenvolvimento <span className="text-teal-500">web</span>. Atualmente, estou focado em expandir meus conhecimentos e criar novos projetos nessa área. Abaixo, compartilho alguns dos projetos que realizei ao longo do tempo.
            </p>           
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/5 flex-1 ">
              <a href="https://wpnnt.github.io/SpotifyClone/" target="_blank" rel="noreferrer">
                <Image
                  className="object-cover transition-transform duration-500 transform hover:scale-105"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={web1}
                  alt="Spotify Clone project"
                />
              </a>
              <h3 className="text-3xl py-1 dark:text-white">Clone do Spotify</h3>
              <p className="text-black dark:text-white">feito com as tecnologias <span className="text-teal-500">HTML</span> e <span className="text-teal-500">CSS</span>.</p>
            </div>
            <div className="basis-1/5 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web2}
                alt="Tinder Prototype project"
              />
              <a href="https://wpnnt.github.io/Tinder-Prototype/" target="_blank" rel="noreferrer">
                <h3 className="text-3xl py-1 dark:text-white object-cover transition-transform duration-500 transform hover:scale-105 ">Prototipo do Tinder</h3>
              </a>
              <p className="text-black dark:text-white">feito com as tecnologias <span className="text-teal-500">HTML</span>,<span className="text-teal-500">CSS</span> e <span className="text-teal-500">Bootstrap5</span>.</p>
            </div>
            <div className="basis-1/5 flex-1">
              <Image
                className="object-cover transition-transform duration-500 transform hover:scale-105"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web3}
                alt="Simon Game project"
              />
              <a href="https://wpnnt.github.io/Simon-Game-Challenge/" target="_blank" rel="noreferrer">
                <h3 className="text-3xl py-1 dark:text-white transition-transform duration-300 transform hover:scale-105 hover:text-blue-500">
                  Simon Game
                </h3>
              </a>
              <h1 className="text-black dark:text-white">feito com as tecnologias <span className="text-teal-500">JavaScript</span>,<span className="text-teal-500">jQuery</span>,<span className="text-teal-500">CSS5</span> e <span className="text-teal-500">HTML</span>.</h1>
            </div>
            <div className="basis-1/5 flex-1">
              <a href="https://wpnnt.github.io/Drum-Kit/" target="_blank" rel="noreferrer">
                <Image
                  className="object-cover transition-transform duration-500 transform hover:scale-105"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={web4}
                  alt="Drum Kit project"
                />
                <h3 className="text-3xl py-1 dark:text-white transition-transform duration-300 transform hover:scale-105 hover:text-blue-500">Drum Kit</h3>
              </a>
              <p className="text-black dark:text-white"> feito com as tecnologias <span className="text-teal-500">HTML</span>,<span className="text-teal-500">CSS</span> e <span className="text-teal-500">JavaScript</span>.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
