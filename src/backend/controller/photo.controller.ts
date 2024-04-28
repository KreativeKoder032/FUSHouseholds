import { Elysia, Context, t } from "elysia";
import { Photo } from "../../models/photo";
import { listPhotos, createPhoto, managePhotos, updatePhotos } from "../biz/photo.biz";
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
    .get("/manage", manage)
    .patch("/update", update)
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

async function manage(): Promise<Photo[]> {
  console.log("Manage");
  return managePhotos("");
}

async function update(patch: Context) {
  console.log("Update");
  console.log(patch.body);
  updatePhotos(patch.body as Photo[]);
}