import { Article } from './Article';
/**
 * Interface for API response, used in feed component and card service to store data obtained from API
 */
export interface NewsResponse {
  /**
   * The status of the response
   */
  status: String;

  /**
   * The total number of the returned results
   */

  totalResults: number;
  /**
   * The articles that were obtained from API response
   */
  articles: Article[];
}
