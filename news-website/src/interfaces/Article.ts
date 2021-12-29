import { Source } from './Source';
/**
 * Interface for the article, used to categorize information
 */
export interface Article {
  /**
   * The source of the article
   */
  source: Source;
  /**
   * The author of the article
   */
  author?: null;
  /**
   * The title of the article
   */
  title: string;
  /**
   * The description of the article
   */
  description: string;
  /**
   * The url of the article
   */
  url: string;
  /**
   * The url of the image of the article
   */
  urlToImage: string;
  /**
   * The publishing date of the article
   */
  publishedAt: string;
  /**
   * The description of the article
   */
  content: string;
}
