import { PrismaClient, Photo as PhotoDB } from "@prisma/client";
import { Photo } from "../../models/photo";


// Initialize Database through PrismaClient
const db = new PrismaClient()

// Creates a function to connect the Create Photo service to the database
export async function createPhoto(new_photo: Photo): Promise<Photo> {
  return db.photo.create({data: new_photo}).then(convertPhoto);
}

// Creates a function to connect the PhotoList component to the database (potential for search feature included)
export async function listPhotos(nameQuery: string): Promise<Photo[]> {
  return db.photo.findMany({
    where: {
      name: {
        contains: nameQuery,
      },
      active: {
        equals: true,
      },
    },
    orderBy: {
      name: 'asc',
    },
  }).then(photos => {
    return photos.map(convertPhoto);
  });
}

export async function managePhotos(nameQuery: string): Promise<Photo[]> {
  return db.photo.findMany({
    where: {
      name: {
        contains: nameQuery,
      },
    },
    orderBy: {
      name: 'asc',
    },
  }).then(photos => {
    return photos.map(convertPhoto);
  });
}

export async function updatePhotos(updated_photos: Photo[]) {
  updated_photos.forEach((photo) => {
    console.log(photo);
    const updateObject = {
      where: {
        id: photo.id,
      },
      data: {
        active: photo.active,
      }
    }
    db.photo.update(updateObject).then((value) => console.log(value));
  })
}

// Converts the Photo table from the database into the model for the front end
function convertPhoto(fromDb: PhotoDB): Photo {
  const photo: Photo = {
    id: fromDb.id,
    name: fromDb.name,
    data: fromDb.data,
    active: fromDb.active,
  }
  if (fromDb.alternate){
    photo.alternate = fromDb.alternate;
  }
  if (fromDb.description){
    photo.description = fromDb.description;
  }
  return photo;
}