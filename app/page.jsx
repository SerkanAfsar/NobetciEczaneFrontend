import { GetCityListService } from "@/Services/City.Service";

export default async function Home() {
  const result = await GetCityListService();
  console.log(result);
  return <h1>Hello World!</h1>;
}
export const dynamic = "force-dynamic";
export const revalidate = 0;
