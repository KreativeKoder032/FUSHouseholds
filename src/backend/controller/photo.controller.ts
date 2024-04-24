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
      type: t.Optional(t.String()),
      data: t.Optional(t.Uint8Array()),
      alternate: t.Optional(t.String()),
      active: t.Optional(t.Boolean()),
    })})
    .post("create", create, {body: "photo"})
    //.get("/", list)
    //.get("/search", search);
}

async function create(ctxt: Context): Promise<Photo> {
  throw new Error("Boom");
  console.log(ctxt.body);
  log(ctxt.body);
  return createPhoto(ctxt.body as Photo);  
}

async function list(): Promise<Photo[]> {
  console.log("list");
  log("list");
  return listPhotos("");
}

async function search(ctxt: Context): Promise<Photo[] | null> {
  console.log(ctxt.body);
  log(ctxt.body);
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

function log(text : any){
  const fs = require('fs');
  const filePath = 'C:/Users/chris/Downloads/output.txt';

  // Write data to file
  fs.writeFile(filePath, text);
  console.log(text);
}