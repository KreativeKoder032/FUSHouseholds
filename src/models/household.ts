/**
 * This is the Household front-end data.
 */
// TODO: Uncomment lines once User is created.
// TODO: Uncomment lines once Commitment is created.
// TODO: Uncomment lines once Saint is created.
// TODO: Uncomment lines once Pillar is created.
// TODO: Uncomment lines once Aesthetics is created.
// TODO: Uncomment lines once Member is created.
// TODO: Uncomment lines once Photo is created.
// TODO: Uncomment lines once News is created.
// TODO: Check to see if relative_path is needed.

// import {User} from "./user";
// import {Commitment} from "./commitment";
// import {Saint} from "./saint";
import {Pillar} from "./pillar";
import {Aesthetics} from "./aesthetics";
// import {Member} from "./member";
// import {Photo} from "./photo";
// import {News} from "./news";

export interface Household {
  // Unique ID number for this Household
  id: number,
  // Indicates whether Household is active
  active: boolean,
  // Household Name
  name: string,
  // Household Logo
//  logo: Photo,
  // Household Year
  year: number,
  // Household Dorm Location
  location?: string,
  // Household Verse
  verse: string,
  // Household Saints
//  saints: Saint[],
  // Household Pillars
  pillars: Pillar[],
  //Household Commitments
//  commitments: Commitment[],
  // Household Covenant
  covenant: string,
  // Household Big/Little Title
  big_little_title?: string,
  // Sibling Household
  sibling_household?: Household,
  // Household Description
  description?: string,
  // Household Photos
//  photos?: Photo[],
  // Aesthetics for the Household page.
  aesthetics?: Aesthetics,
  // Household News
//  news?: News[],
  // Household Relative Path (DON'T KNOW IF IT IS USEABLE/NEEDED; REMOVE IF USELESS)
  relative_path: string
}