/**
 * This is the Household Pillars front-end data.
 */

import {Household} from "./household";

export interface Pillar {
  // Pillar ID.
  id: number,
  // Pillar Name
  name: string,
  // Pillar Description
  description?: string,
  // Associated Household
  household: Household
}