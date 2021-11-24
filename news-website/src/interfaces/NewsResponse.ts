import { Article } from './Article';

export interface NewsResponse {
  status: String;
  totalResults: number;
  articles: Article[];
}
