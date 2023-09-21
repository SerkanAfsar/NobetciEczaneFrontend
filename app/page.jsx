import MainPageContainer from "@/Containers/MainPageContainer";
import { GetCityListService } from "@/Services/City.Service";

export const metadata = {
  title: "Türkiye Günlük İl - İlçe Nöbetçi Eczane Listesi",
  description: "Türkiye Günlük İl - İlçe Nöbetçi Eczane Listesi",
  charSet: "UTF-8",
  openGraph: {
    title: "Türkiye Günlük İl - İlçe Nöbetçi Eczane Listesi",
    description: "Türkiye Günlük İl - İlçe Nöbetçi Eczane Listesi",
    publisher: "Nöbetçi Eczaneler",
    locale: "tr_TR",
    site_name: "Nöbetçi Eczaneler",
  },
  twitter: {
    card: "summary",
    description: "Türkiye Günlük İl - İlçe Nöbetçi Eczane Listesi",
    title: "Türkiye Günlük İl - İlçe Nöbetçi Eczane Listesi",
    creator: "@NöbetçiEczaneler",
  },
  resourceType: "Web Page",
  alternates: {
    canonical: `${process.env.SITE_NAME}`,
  },
};

// export async function generateMetadata() {
//   const { slug } = params;
//   const siteURL = "https://example.com";

//   return {
//     title: `Your title`,
//     description: `Your meta description`,
//     alternates: {
//       canonical: `${siteURL}/yourSlug/${slug}`,
//     },
//   };
// }
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
export const revalidate = 10;
