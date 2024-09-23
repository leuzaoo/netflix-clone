import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col justify-center items-center text-white"
      style={{ backgroundImage: `url('/404.png')` }}
    >
      <header className="absolute top-0 left-0 p-4 bg-black w-full ">
        <Link to={"/"}>
          <img src="/netflix-logo.png" alt="Netflix" className="h-8" />
        </Link>
      </header>
      <main className="text-center error-page--content z-10">
        <h1 className="text-7xl font-semibold mb-4">Perdido por aqui?</h1>
        <p className="mb-6 text-xl">
          Desculpe, não conseguimos encontrar essa página. Provavelmente achará
          o que está procurando na página principal.
        </p>
        <Link to={"/"} className="text-lg bg-white text-black py-2 px-4 rounded">
          Página Principal
        </Link>
      </main>
    </div>
  );
};
export default NotFoundPage;
