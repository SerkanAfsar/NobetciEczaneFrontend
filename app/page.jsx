import MainPageContainer from "@/Containers/MainPageContainer";
import { GetCityListService } from "@/Services/City.Service";

export default async function Home() {
  const result = await GetCityListService();
  if (!result.isSuccess) {
    throw new Error(result.errorList ? result.errorList.join("-") : result);
  }
  // await new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve();
  //   }, 3000);
  // });
  return <MainPageContainer cityList={result.entities} />;
}
export const revalidate = 0;
export const dynamic = "force-dynamic";
