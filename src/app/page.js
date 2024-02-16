import Image from "next/image";
import HeroBanner from "@/components/widgets/HeroBanner";
import BusinessCategories from "@/components/widgets/BusinessCategories";
import GetQuote from "@/components/widgets/GetQuote";
import FeaturedServices from "@/components/widgets/FeaturedServices";
import Blogs from "@/components/widgets/Blogs";

export default function Home() {
  return (
    <main>
       {/* Banner Wrapper  */}
       <HeroBanner />
       {/* Banner Wrapper  */}

      {/* Categories Wrapper Start */}
      <BusinessCategories />
      {/* Categories Wrapper End */}

       {/* get a quote section start */}
       <GetQuote />
        {/* get a quote section end */}

        {/* featured products section start */}
        <FeaturedServices />
        {/* featured products section end */}

        {/* news section start */}
        <Blogs />
        {/* news section end */}
 
    </main>
  );
}
