import { LandingRubro } from "@/components/LandingRubro";
import { getLanding } from "@/content/landings";
import { buildMetadata } from "@/lib/seo";

const landing = getLanding("cercos");

export const metadata = buildMetadata({
  title: landing.title,
  description: landing.description,
  path: landing.path,
});

export default function Page() {
  return <LandingRubro landing={landing} />;
}
