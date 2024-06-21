import Container from "@/components/Container";
import Banner from "@/components/Banner";
import LogoCarousel from "@/app/sections/LogoCarousel";
import NeedOurSolution from "@/app/sections/NeedOurSolution";
import OurAchievements from "@/app/sections/OurAchievements";
const Home = () => {
  return (
    <Container>
      <Banner />
      <LogoCarousel />
      <NeedOurSolution />
      <OurAchievements />
    </Container>
  );
}
export default Home