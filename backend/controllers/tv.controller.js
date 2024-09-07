import fetchFromTMDB from "../services/tmdb.service.js";

export async function getTrendingTv(req, res) {
  try {
    const data = await fetchFromTMDB(
      "https://api.themoviedb.org/3/trending/tv/day?language=pt-BR"
    );
    const randomMovie =
      data.results[Math.floor(Math.random() * data.results.length)];

    res.json({ success: true, content: randomMovie });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Erro no servidor interno." });
  }
}

export async function getTvTrailers(req, res) {
  const { id } = req.params;

  try {
    const data = await fetchFromTMDB(
      `https://api.themoviedb.org/3/tv/${id}/videos?language=en-US`
    );
    res.json({ success: true, trailers: data.results });
  } catch (error) {
    if (error.message.includes("404")) {
      return res.status(404).send(null);
    }

    res
      .status(500)
      .json({ success: false, message: "Erro no servidor interno." });
  }
}

export async function getTvDetails(req, res) {
  const { id } = req.params;
  try {
    const data = await fetchFromTMDB(
      `https://api.themoviedb.org/3/tv/${id}?language=en-US`
    );

    res.json({ success: true, content: data });
  } catch (error) {
    if (error.message.includes("404")) {
      return res.status(404).send(null);
    }

    res
      .status(500)
      .json({ success: false, message: "Erro no servidor interno." });
  }
}

export async function getSimilarTv(req, res) {
  const { id } = req.params;
  try {
    const data = await fetchFromTMDB(
      `https://api.themoviedb.org/3/tv/${id}/similar?language=pt-BR&page=1`
    );

    res.status(200).json({ success: true, similarMovies: data.results });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Erro no servidor interno." });
  }
}

export async function getTvsByCategory(req, res) {
  const { category } = req.params;
  try {
    const data = await fetchFromTMDB(
      `https://api.themoviedb.org/3/tv/${category}?language=pt-BR&page=1`
    );

    res.status(200).json({ success: true, content: data.results });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Erro no servidor interno." });
  }
}
