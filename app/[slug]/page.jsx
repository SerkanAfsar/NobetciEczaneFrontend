import { notFound } from "next/navigation";
export default function PharmacyCity({ params }) {
  return <div>{params.slug}</div>;
}
