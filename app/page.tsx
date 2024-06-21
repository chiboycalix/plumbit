import Container from "@/components/Container";
import Banner from "@/components/Banner";
import LogoCarousel from "@/app/sections/LogoCarousel";
import NeedOurSolution from "@/app/sections/NeedOurSolution";
import OurAchievements from "@/app/sections/OurAchievements";
import ClientTestimonials from "@/app/sections/ClientTestimonials";
import OurServices from "@/app/sections/OurServices";
const Home = () => {
  return (
    <Container>
      <Banner />
      <LogoCarousel />
      <NeedOurSolution />
      <OurAchievements />
      <OurServices />
      <ClientTestimonials />
    </Container>
  );
}
export default Home