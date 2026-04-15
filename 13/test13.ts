interface Movie {
  title: string;
  url: string;
  image: string;
  authorName: string;
  autorUrl: string;
  authorImage: string;
  createTime: string;
}
interface MovieInfos {
  articleList: Movie[];
  Time: number;
  moreList: boolean;
}
