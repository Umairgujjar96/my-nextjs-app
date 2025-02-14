import React from "react";
import Guarentee from "@/components/home/guarentee";
import SpecialPromotion from "@/components/home/specialpromotion";
import VendorrAB from "@/components/home/vendorrAB";
import ExploreCategories from "@/components/home/exploreCategories";
import FeaturedProducts from "@/components/home/featuredProducts";
import DiscoverPartner from "@/components/home/discoverPartner";
import WholeSaleCommerce from "@/components/home/wholeSaleCommerce";
import WholeSaleExperience from "@/components/home/wholeSaleExperience";
import GotQuestions from "@/components/home/gotQuestions";
import HomeCarousal from "@/components/home/HomeCarousal";

export default function Home() {
  return (
    <div>
      <HomeCarousal />
      <Guarentee />
      <SpecialPromotion />
      <VendorrAB />
      <ExploreCategories />
      <FeaturedProducts />
      <DiscoverPartner />
      <WholeSaleCommerce />
      <WholeSaleExperience />
      <GotQuestions />
    </div>
  );
}
