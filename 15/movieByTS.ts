interface Movie {
  title: string;
}

interface MovieInfos {
  articleList: Movie[];
}

interface MovieRank {
  title: string;
  rank: number;
}

const url =
  "https://raw.githubusercontent.com/wapj/jsbackend/main/movieinfo.json";

async function fetchMovieData(url: string): Promise<MovieInfos> {
  const response: Response = await fetch(url);
  if (!response.ok) {
    throw new Error("요청에 실패. 상태 코드: " + response.status);
  }
  const data: Promise<MovieInfos> = await response.json();
  return data;
}

function validateMovieData(data: MovieInfos) {
  if (!data.articleList || data.articleList.length === 0) {
    throw new Error("데이터가 없습니다.");
  }
}

function extractMovieInfos(articleList: Array<Movie>): Array<MovieRank> {
  return articleList.map(
    (article: Movie, index: number): MovieRank => ({
      title: article.title,
      rank: index + 1,
    }),
  );
}

function displayMovies(movieRank: Array<MovieRank>): void {
  for (const movie of movieRank) {
    console.log(`[${movie.rank}위] ${movie.title}`);
  }
}

async function movies(): Promise<void> {
  try {
    const data: MovieInfos = await fetchMovieData(url);
    validateMovieData(data);
    const movieRanks: Array<MovieRank> = extractMovieInfos(data.articleList);
    displayMovies(movieRanks);
  } catch (error: unknown) {
    // 무조건 TS에서 Unknown
    if (error instanceof Error) console.error("에러 발생: ", error.message);
    else console.error("알 수 없는 에러");
  }
}

movies();
