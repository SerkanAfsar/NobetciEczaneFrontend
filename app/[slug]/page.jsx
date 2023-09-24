import CityPharmacyContainer from "@/Containers/CityPharmacyContainer";
import { GetPharmacyListService } from "@/Services/Pharmacy.Service";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }, parent) {
  // read route params
  const slug = params.slug;
  const result = await GetPharmacyListService({
    body: { slugUrl: params.slug },
  });

  return {
    title: `${result?.entity?.city?.ilAdi} Nöbetçi Eczaneleri`,
    description: `${result?.entity?.city?.ilAdi} Nöbetçi Eczaneleri`,
    charSet: "UTF-8",
    robots: "index,follow",
    publisher: "Nöbetçi Eczaneler",
    author: "Nöbetçi Eczaneler - info@nobetci-eczane.net",
    distribution: "global",
    themeColor: "#fff",
    resourceType: "Web Page",
    openGraph: {
      title: `${result?.entity?.city?.ilAdi} Nöbetçi Eczaneleri`,
      description: `${result?.entity?.city?.ilAdi} Nöbetçi Eczaneleri`,
      publisher: "Nöbetçi Eczaneler",
      locale: "tr_TR",
      site_name: "Nöbetçi Eczaneler",
    },
    twitter: {
      card: "summary",
      description: `${result?.entity?.city?.ilAdi} Nöbetçi Eczaneleri`,
      title: `${result?.entity?.city?.ilAdi} Nöbetçi Eczaneleri`,
      creator: "@NöbetçiEczaneler",
    },
    resourceType: "Web Page",
    alternates: {
      canonical: `${process.env.SITE_NAME}/${slug}`,
      dnsPrefetch: "//fonts.googleapis.com/",
      dnsPrefetch: "//www.google-analytics.com/",
      dnsPrefetch: "//ajax.googleapis.com/",
    },
  };
}

export default async function PharmacyCity({ params }) {
  const result = await GetPharmacyListService({
    body: { slugUrl: params.slug },
  });

  if (!result.isSuccess) {
    switch (result.statusCode) {
      case 404: {
        return notFound();
      }
      case 400: {
        throw new Error(result.errorList ? result.errorList.join("-") : result);
      }
      default: {
        throw new Error(result);
      }
    }
  }

  return <CityPharmacyContainer result={result.entity} />;
}

export const dynamic = "force-dynamic";
export const revalidate = 0;
