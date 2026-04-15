"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const url = "https://raw.githubusercontent.com/wapj/jsbackend/main/movieinfo.json";
async function fetchMovieData(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("요청에 실패. 상태 코드: " + response.status);
    }
    const data = await response.json();
    return data;
}
function validateMovieData(data) {
    if (!data.articleList || data.articleList.length === 0) {
        throw new Error("데이터가 없습니다.");
    }
}
function extractMovieInfos(articleList) {
    return articleList.map((article, index) => ({
        title: article.title,
        rank: index + 1,
    }));
}
function displayMovies(movieRank) {
    for (const movie of movieRank) {
        console.log(`[${movie.rank}위] ${movie.title}`);
    }
}
async function movies() {
    try {
        const data = await fetchMovieData(url);
        validateMovieData(data);
        const movieRanks = extractMovieInfos(data.articleList);
        displayMovies(movieRanks);
    }
    catch (error) {
        // 무조건 TS에서 Unknown
        if (error instanceof Error)
            console.error("에러 발생: ", error.message);
        else
            console.error("알 수 없는 에러");
    }
}
movies();
