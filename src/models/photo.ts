import { News } from "./news";
import { Household } from "./household";

//LATER
//news
//saint
//household

export interface Photo {
  // Unique photo id
  id? : number,
  // Photo name
  name : string,
  // What type of photo {Logo, Household, Member, News, Saint, Household_Normal}
  type : string,
  // String make up of the photo
  data : string,
  // Description
  alternate : string,
  // Currently being used
  active : boolean,
  // Image of a certian saint
    //saint : Saint,
  // Household news
  news_id? : News,
  // Ties photo to a household
  household_id? : Household,


}