import { PrismaClient, Household as HouseholdDB } from "@prisma/client";
import { Household } from "../../models/household";


// Initialize Database through PrismaClient
const db = new PrismaClient()

// Creates a function to connect the Create Household service to the database
export async function createHousehold(new_household: Household): Promise<Household> {
  if (new_household.sex != "male" && new_household.sex != "female") {
    if (new_household.sex.toLowerCase() == "male" || new_household.sex.toLowerCase() == "female") {
      new_household.sex = new_household.sex.toLowerCase();
      return db.household.create({data: new_household}).then(convertHousehold);
    }
    const error_message = "Failed to enter value into database. " + new_household.sex + " is not a valid entry. There are only two sexes: male and female.";
    console.error(error_message);
    const error = new Error();
    error.message = error_message;
    error.name = "INVALID_DATA";
    throw error;
    ;
  };
  if (new_household.siblingId != undefined) {
    const sibling_household = await checkSibling(new_household.siblingId)
    if (new_household.sex == sibling_household.sex) {
      const error_message = "Failed to enter value into database. Household sex: " + new_household.sex + " and Sibling Household sex: " + sibling_household.sex + " are the same sex.";
      console.error(error_message);
      const error = new Error();
      error.message = error_message;
      error.name = "INVALID_DATA";
      throw error;
    }
  }
  return db.household.create({data: new_household}).then(convertHousehold);
}

// Creates a function to connect the HouseholdList component to the database (potential for search feature included)
export async function listHouseholds(sexQuery?: string, idQuery?: number): Promise<Household[]> {
  return db.household.findMany({
    where: {
      OR: [
        {
          sex: {
            contains: sexQuery,
          },
        },
        {
          id: {
            equals: idQuery,
          }
        }
      ]
    },
    orderBy: {
      name: 'asc',
    },
  }).then((households: HouseholdDB[]) => {
    return households.map(convertHousehold);
  });
}

export async function findHouseholds(nameQuery?: string): Promise<Household[]> {
  return db.household.findMany({
    where: {
      OR: [
        {
          name: {
            contains: nameQuery,
          },
        }
      ]
    },
    orderBy: {
      name: 'asc',
    },
  }).then((households: HouseholdDB[]) => {
    return households.map(convertHousehold);
  });
}

async function checkSibling(siblingId: number): Promise<Household> {
  const household_list = await listHouseholds("", siblingId);
  return household_list[0];
}

// Converts the Household table from the database into the model for the front end
function convertHousehold(fromDb: HouseholdDB): Household {
  const household: Household = {
    id: fromDb.id,
    name: fromDb.name,
    sex: fromDb.sex,
    active: fromDb.active,
    year: fromDb.year,
    verse: fromDb.verse,
    covenant: fromDb.covenant,
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
  if (fromDb.siblingId) {
    household.siblingId =fromDb.siblingId;
  }

  return household;
}