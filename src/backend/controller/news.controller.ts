import { Elysia, Context, t } from "elysia";
import { News } from "../../models/news";
import {createNews, listNews} from "../biz/player.biz";

export function configurePlayerRoutes(app: Elysia) {
  return app
    .model({news: t.Object({
      news_description: t.String(),
      news_type: t.String(),
      news_date: t.Date(),
      news_id: t.Optional(t.Number()),
      news_time_stamp: t.Optional(t.Date())
    })})
    // POST is to create news
    .post("create", create, {body: 'news'})
    .get("/", list);
}

// You can test this with
// curl -H "Content-Type: application/json" -X POST http://localhost:3000/players/create -d '{"fname": "Robert", "lname": "Zaleski"}'
async function create(ctxt: Context): Promise<News> {
  return createNews(ctxt.body as News);
}

async function list(): Promise<News[]> {
  return listNews("");
}
