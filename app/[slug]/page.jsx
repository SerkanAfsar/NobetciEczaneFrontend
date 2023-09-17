import CityPharmacyContainer from "@/Containers/CityPharmacyContainer";
import { GetPharmacyListService } from "@/Services/Pharmacy.Service";
import { notFound } from "next/navigation";
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
        break;
      }
    }
  }

  return <CityPharmacyContainer result={result.entity} />;
}

export const dynamic = "force-dynamic";
export const revalidate = 0;
