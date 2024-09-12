import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { useState } from "react";

const AuthScreen = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="hero-bg relative">
      {/* Navbar */}
      <header className="max-w-6xl mx-auto flex items-center justify-between p-4 pb-10">
        <img
          src="/netflix-logo.png"
          alt="Netflix Logo"
          className="w-32 md:w-52"
        />
        <Link
          to={"/login"}
          className="font-semibold text-white bg-red-600 py-1 px-4 rounded"
        >
          Entrar
        </Link>
      </header>

      <div className="flex flex-col items-center justify-center text-center py-40 text-white max-w-6xl mx-auto">
        <h1 className="hidden">Netflix</h1>
        <h2 className="text-4xl md:text-7xl font-bold mb-4 max-w-[840px]">
          Filmes, séries e muito mais, sem limites
        </h2>
        <p className="text-xl mb-4 font-semibold">
          A partir de R$ 20,90. Cancele quando quiser.
        </p>
        <p className="mb-4">
          Quer assistir? Informe seu email para criar ou reiniciar sua
          assinatura.
        </p>

        <form
          className="flex flex-col md:flex-row gap-4 w-1/2"
          // onSubmit={handleFormSubmit}
        >
          <input
            type="email"
            placeholder="Email"
            className="p-2 rounded flex-1 bg-black/80 border border-gray-700"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="bg-red-600 text-xl pl-4 py-3 pr-2 rounded flex justify-center gap-2 items-center">
            Começar
            <ChevronRight size={32} />
          </button>
        </form>
      </div>

      <div className="h-2 w-full bg-[#232323]" aria-hidden="true" />

      <section>
        <h2 className="hidden">Em alta</h2>
        <div className="py-10 bg-black text-white">
          <div className="flex max-w-6xl mx-auto items-center justify-center md:flex-row flex-col px-4 md:px-2">
            <div className="flex-1">
              <h3 className="text-4xl md:text-5xl font-extrabold mb-4">
                Aproveite na TV
              </h3>
              <p className="text-lg md:text-xl">
                Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
                aparelhos de Blu-ray e outros dispositivos.
              </p>
            </div>
            <div className="flex-1 relative">
              <img src="/tv.png" alt="TV" className="mt-4 z-20 relative" />
              <video
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-1/2 z-10"
                playsInline
                autoPlay={true}
                muted
                loop
              >
                <source src="/hero-vid.m4v" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h1 className="hidden">Offline</h1>
        <div className="py-10 bg-black text-white">
          <div className="flex max-w-6xl mx-auto items-center justify-center md:flex-row flex-col-reverse px-4 md:px-2">
            {/* left side */}
            <div className="flex-1 relative">
              <div className="relative">
                <img
                  src="/stranger-things-lg.png"
                  alt="Stranger Things img"
                  className="mt-4"
                />

                <div
                  className="flex items-center gap-2 absolute bottom-5 left-1/2 -translate-x-1/2 bg-black
              w-3/4 lg:w-1/2 h-24 border border-slate-500 rounded-md px-2
              "
                >
                  <img
                    src="/stranger-things-sm.png"
                    alt="image"
                    className="h-full"
                  />
                  <div className=" flex justify-between items-center w-full">
                    <div className="flex flex-col gap-0">
                      <span className="text-md lg:text-lg font-bold">
                        Stranger Things
                      </span>
                      <span className="text-sm text-blue-500">
                        Downloading...
                      </span>
                    </div>

                    <img src="/download-icon.gif" alt="" className="h-12" />
                  </div>
                </div>
              </div>
            </div>
            {/* right side */}

            <div className="flex-1 md:text-left text-center">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-balance">
                Baixe séries para assistir offline
              </h2>
              <p className="text-lg md:text-xl">
                Salve seus títulos favoritos e sempre tenha algo para assistir.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="h-2 w-full bg-[#232323]" aria-hidden="true" />

      <section>
        <h1 className="hidden">Aparelhos</h1>
        <div className="py-10 bg-black text-white">
          <div className="flex max-w-6xl mx-auto items-center justify-center md:flex-row flex-col px-4 md:px-2">
            {/* left side */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
                Assista onde quiser
              </h2>
              <p className="text-lg md:text-xl">
                Assista a quantos filmes e séries quiser no celular, tablet,
                laptop e TV.
              </p>
            </div>

            {/* right side */}
            <div className="flex-1 relative overflow-hidden">
              <img
                src="/device-pile.png"
                alt="Device image"
                className="mt-4 z-20 relative"
              />
              <video
                className="absolute top-2 left-1/2 -translate-x-1/2  h-4/6 z-10
               max-w-[63%] 
              "
                playsInline
                autoPlay={true}
                muted
                loop
              >
                <source src="/video-devices.m4v" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>

      <div className="h-2 w-full bg-[#232323]" aria-hidden="true" />

      <section>
        <h1 className="hidden">Para crianças</h1>
        <div className="py-10 bg-black text-white">
          <div
            className="flex max-w-6xl mx-auto items-center justify-center flex-col-reverse md:flex-row
           px-4 md:px-2
        "
          >
            {/* left */}
            <div className="flex-1 relative">
              <img src="/kids.png" alt="Enjoy on your TV" className="mt-4" />
            </div>
            {/* right */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
                Crie perfil para crianças
              </h2>
              <p className="text-lg md:text-xl">
                Deixe as crianças se aventurarem com seus personagens favoritos
                em um espaço feito só para elas, sem pagar a mais por isso.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AuthScreen;
