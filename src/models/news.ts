/**
 * Handles news for different households
 */
/**
 * to be added:
 * import {photo} from ./photo
 * import {household} from ./household
 * import {member} from ./member
 */

import { Timestamp } from "rxjs";

export interface News {
  news_id: number,
  news_description: string,
  news_type: string,
  news_date: Date,
  //I don't know how to do this
  //news_time_stamp: Timestamp<minute>,
}