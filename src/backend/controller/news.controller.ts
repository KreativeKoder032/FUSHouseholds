import { Elysia, Context, t } from "elysia";
import { News } from "../../models/news";
import {createNews, listNews} from "../biz/news.biz";

export function configureNewsRoutes(app: Elysia) {
  return app
    .model({news: t.Object({
      news_description: t.String(),
      news_type: t.String(),
      news_date: t.String(),
      news_id: t.Optional(t.Number()),
      news_time_stamp: t.Optional(t.Date())
    })})
    // POST is to create news
    .post("create", create, {body: 'news'})
    .get("/", list);
}

// You can test this with
// curl -H "Content-Type: application/json" -X POST http://localhost:3000/news/create -d '{"fname": "Robert", "lname": "Zaleski"}'
async function create(ctxt: Context): Promise<News> {
  const body: News = ctxt.body as News;
    const news: News = {
      news_description: body.news_description,
      news_type: body.news_type,
      news_date: new Date(body.news_date),
      news_id: body.news_id,
    }
  return createNews(news);
}

async function list(): Promise<News[]> {
  return listNews("");
}
