import { PrismaClient, Household as HouseholdDB } from "@prisma/client";
import { Household } from "../../models/household";


// Initialize Database through PrismaClient
const db = new PrismaClient()

// Creates a function to connect the Create Household service to the database
export async function createHousehold(new_household: Household): Promise<Household> {
  return db.household.create({data: new_household}).then(convertHousehold);
}

// Creates a function to connect the HouseholdList component to the database (potential for search feature included)
export async function listHouseholds(nameQuery: string): Promise<Household[]> {
  return db.household.findMany({
    where: {
      name: {
        contains: nameQuery,
      },
    },
    orderBy: {
      name: 'asc',
    },
  }).then(households => {
    let householdModels: Household[] = [];
    for (let h of households) {
      householdModels.push(convertHousehold(h));
    }
    return householdModels;
  });
}

// Converts the Household table from the database into the model for the front end
function convertHousehold(fromDb: HouseholdDB): Household {
  let household: Household = {
    id: fromDb.id,
    name: fromDb.name,
    year: fromDb.year,
    verse: fromDb.verse,
    covenant: fromDb.covenant,
  }
  if (fromDb.active) {
    household.active = fromDb.active;
  }
  if (fromDb.location) {
    household.location = fromDb.location;
  }
  if (fromDb.big_little_title) {
    household.big_little_title = fromDb.big_little_title;
  }
  if (fromDb.description) {
    household.description = fromDb.description;
  }

  return household;
}