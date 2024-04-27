import { Elysia, Context, t } from "elysia";
import { Photo } from "../../models/photo";
import { listPhotos, createPhoto } from "../biz/photo.biz";
// import * as winston from 'winston'; 

/*@param app The Elysia App
* @returns
*/
export function configurePhotoRoutes(app: Elysia) {
  return app
    .model({photo: t.Object({
      name: t.String(),
      description: t.Optional(t.String()),
      data: t.String(),
      alternate: t.Optional(t.String()),
      active: t.Boolean(),
    })})
    .post("create", create, {body: "photo"})
    .get("/", list)
}

async function create(ctxt: Context): Promise<Photo> {
  console.log(ctxt.body);
  console.log("create");
  return createPhoto(ctxt.body as Photo);  
}

async function list(): Promise<Photo[]> {
  console.log("List");
  return listPhotos("");
}