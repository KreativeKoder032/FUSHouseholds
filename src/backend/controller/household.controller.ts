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

async function search(nameQuery: string): Promise<Household[]> {
  return listHouseholds(nameQuery);
}