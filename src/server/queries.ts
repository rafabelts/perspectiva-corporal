"use server";
import { db } from "./db";
import { person, perspective } from "./db/schema";

type userData = {
  id: any;
  name: string;
  gender: string;
  height: string;
  weight: string;
  body: string;
  issue: string;
  inTreatment: string;
};

export async function addUserData(userData: userData) {
  await db.insert(person).values({
    id: userData.id,
    name: userData.name,
    gender: userData.gender,
  });

  await db.insert(perspective).values({
    person_id: userData.id,
    height: userData.height,
    weight: userData.weight,
    body: userData.body,
    mental_iss: userData.issue,
    obesity_treatment: userData.inTreatment,
  });
}
