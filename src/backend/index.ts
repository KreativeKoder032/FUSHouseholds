import {Elysia} from 'elysia';
import { configureHouseholdRoutes } from './controller/household.controller';
import { configureNewsRoutes } from './controller/news.controller';
import { configurePhotoRoutes } from './controller/photo.controller';

const PORT = process.env['LISTEN_PORT'];
console.log(`Listening on port ${PORT}`);
const STATIC_ROOT='./dist/frontend/browser';

const app = new Elysia()
  .get('/*', async (context) => {
    console.log('Static: ', context.path);
    const staticFile = Bun.file(`./${STATIC_ROOT}/${context.path}`);
    const fallBackFile = Bun.file(`./${STATIC_ROOT}/index.html`);
    return (await staticFile.exists()) ? staticFile : fallBackFile;
  })
  // .get("/api/photos/list", () => 'Hello')
  // .post("/api/photos/create", ({ body }) => createPhoto(body as Photo))
  .group("/api/households", configureHouseholdRoutes)
  .group("/api/news", configureNewsRoutes)
  .group("/api/photos", configurePhotoRoutes)
  .listen(PORT);
  // .listen(3005);

// const app = new Elysia()
//     .get('/', () => 'Hello')
//     .get('/user/:id', ({ params: { id }}) => id)
//     .post('/form', ({ body }) => body)
//     .listen(3001) 

// const app = new Elysia().get("/", () => "Hello Elysia").listen(3000);

// console.log(
//   `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
// );