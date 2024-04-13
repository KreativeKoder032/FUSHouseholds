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
      name: {
        contains: nameQuery,
      },
    },
    orderBy: {
      name: 'asc',
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
    let news: News = {
      description: fromDb.news_description,
      type: fromDb.news_type,
      date: fromDb.news_date,
    }
    if (fromDb.news_id) {
      id = fromDb.news_id;
    }
    if (fromDb.news_time_stamp) {
      timestamp = fromDb.news_time_stamp;
    }
  
    return news;  
  }
}
