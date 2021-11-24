import { Source } from './Source';

export interface Article {
  source: Source;
  author?: null;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}
