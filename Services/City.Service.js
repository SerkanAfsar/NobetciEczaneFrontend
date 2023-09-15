import { BaseService } from ".";

export async function GetCityListService() {
  return await BaseService({ controllerName: "Cities" });
}
