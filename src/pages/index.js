import { Layout } from "@/components/Layout";
import { CallToAction } from "@/components/pages/home/CallToAction";
import { Faqs } from "@/components/pages/home/Faqs";
import { Hero } from "@/components/pages/home/Hero";
import { Pricing } from "@/components/pages/home/Pricing";
import { PrimaryFeatures } from "@/components/pages/home/PrimaryFeatures";
import { Reviews } from "@/components/pages/home/Reviews";
import { SecondaryFeatures } from "@/components/pages/home/SecondaryFeatures";

export default function Home() {
  return (
    <Layout>
      <>
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction />
        <Reviews />
        <Pricing />
        <Faqs />
      </>
    </Layout>
  );
}
