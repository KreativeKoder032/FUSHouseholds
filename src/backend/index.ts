import {Elysia} from 'elysia'
import { configureHouseholdRoutes } from './controller/household.controller';
import { configureNewsRoutes } from './controller/news.controller';
import { configurePhotoRoutes } from './controller/photo.controller';

const PORT = process.env['LISTEN_PORT'];
console.log(`Listening on port ${PORT}`);
const STATIC_ROOT='./dist/frontend/browser';

new Elysia()
  .get('/*', async (context) => {
    console.log('Static: ', context.path);
    const staticFile = Bun.file(`./${STATIC_ROOT}/${context.path}`);
    const fallBackFile = Bun.file(`./${STATIC_ROOT}/index.html`);
    return (await staticFile.exists()) ? staticFile : fallBackFile;
  })
  .group("/api/households", configureHouseholdRoutes)
  .group("/api/news", configureNewsRoutes)
  .group("/api/photos", configurePhotoRoutes)
  .listen(PORT);
