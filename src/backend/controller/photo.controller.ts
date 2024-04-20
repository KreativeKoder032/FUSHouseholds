import { Elysia, Context, t } from "elysia";
import { Photo } from "../../models/photo";
import { listPhotos, createPhoto } from "../biz/photo.biz";

/*@param app The Elysia App
* @returns
*/
export function configurePhotoRoutes(app: Elysia) {
  return app
    .model({photo: t.Object({
      name: t.String(),
      type: t.String(),
      data: t.String(),
      alternate: t.String(),
      active: t.Boolean(),
      news_id: t.Optional(t.Integer()),
      household_id: t.Optional(t.Integer())
    })})
    .post("create", create, {body: "photo"})
    .get("/", list)
    .get("/search", search);
}

async function create(ctxt: Context): Promise<Photo> {
  return createPhoto(ctxt.body as Photo);  
}

async function list(): Promise<Photo[]> {
  return listPhotos("");
}

async function search(ctxt: Context): Promise<Photo[] | null> {
  if (!ctxt) {
    return null;
  }
  const nameQuery = new String(ctxt.query['q'] || '').trim();
  if (!nameQuery || nameQuery.length < 3) {
    console.log("Need a longer query than ", nameQuery, " from ", ctxt.query)
    return null;
  }
  return listPhotos(nameQuery);
}