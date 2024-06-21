import Container from "@/components/Container";
import Banner from "@/components/Banner";
import LogoCarousel from "@/app/sections/LogoCarousel";
import NeedOurSolution from "@/app/sections/NeedOurSolution";
const Home = () => {
  return (
    <Container>
      <Banner />
      <LogoCarousel />
      <NeedOurSolution />
    </Container>
  );
}
export default Home