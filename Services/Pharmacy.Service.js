import { BaseService } from ".";

export async function GetPharmacyListService({ body }) {
  return await BaseService({
    controllerName: "Pharmacies",
    method: "POST",
    body,
  });
}
