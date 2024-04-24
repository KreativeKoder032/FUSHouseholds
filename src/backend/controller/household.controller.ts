import { Elysia, Context, t } from "elysia";
import { Household } from "../../models/household";
import { listHouseholds, createHousehold } from "../biz/household.biz";

/*@param app The Elysia App
* @returns
*/
export function configureHouseholdRoutes(app: Elysia) {
  return app
    .model({household: t.Object({
      active: t.Boolean(),
      name: t.String(),
      year: t.Integer(),
      location: t.Optional(t.String()),
      verse: t.String(),
      covenant: t.String(),
      big_little_title: t.Optional(t.String()),
      description: t.Optional(t.String())
    })})
    .onError(({ code, error }) => {
      if (error.name == "INVALID_DATA") {
        return error.message;
      }
    })
    .post("create", create, {body: "household"})
    .get("/", list)
    .get("/search", search);
}

async function create(ctxt: Context): Promise<Household> {
  return createHousehold(ctxt.body as Household);  
}

async function list(): Promise<Household[]> {
  return listHouseholds("");
}

async function search(ctxt: Context): Promise<Household[] | null> {
  if (!ctxt) {
    return null;
  }
  const nameQuery = new String(ctxt.query['q'] || '').trim();
  if (!nameQuery || nameQuery.length < 3) {
    console.log("Need a longer query than ", nameQuery, " from ", ctxt.query)
    return null;
  }
  return listHouseholds(nameQuery);
}