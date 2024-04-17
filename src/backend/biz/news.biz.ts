import { PrismaClient, News as NewsDB } from "@prisma/client";
import { News } from '../../models/news';

//initializes database
const db = new PrismaClient

//function connecting the service to the databse
export async function createNews(new_news: News): Promise<News> {
  return db.news.create({data: new_news}).then(convertNews);
}

export async function listNews(nameQuery: string): Promise<News[]> {
  return db.news.findMany({
    where: {
      news_description: {
        contains: nameQuery,
      },
    },
    orderBy: {
      news_description: 'asc',
    },
  }).then(news => { //might be newsli
    let newsModels: News[] = [];
    for (let n of news) { //same here
      newsModels.push(convertNews(n));
    }
    return newsModels;
  });

  //Converts the News table from the database into the model for the front end
  function convertNews(fromDb: NewsDB): News {
    const news: News = {
      news_description: fromDb.news_description,
      news_type: fromDb.news_type,
      news_date: fromDb.news_date,
      news_id: fromDb.news_id,
      news_time_stamp: fromDb.news_time_stamp,
    }
  
    return news;  
  }
}
