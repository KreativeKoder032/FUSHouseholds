/**
 * This is the Household Members' front-end data.
 */

// TODO: Uncomment lines once Photo is created.
// TODO: Uncomment lines once News is created.

import { Household } from "./household";
// import { Photo } from "./photo";
// import { News } from "./news";

export interface Member {
  // Member ID
  id: number,
  // Member Name
  name: string,
  // Member Graduation Year
  grad_year: number,
  // Member Major
  major: string,
  // Member Photo
//  photo?: Photo,
  // Member Association
  association: string,
  // Member Household Big
  big?: Member,
  // Member Household Little
  little?: Member[],
  // Member Household
  household: Household,
  // Member Associated News articles
//  news?: News[]
}