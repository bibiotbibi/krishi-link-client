
import AboutUs from '../AboutUs/AboutUs';
import AgroNews from '../AgroNews/AgroNews';
import Banner from '../Banner/Banner';
import FAQ from '../FAQ/FAQ';
import HowItWorks from '../HowWorks/HowItWorks';
import LatestCrops from '../LatestCrops/LatestCrops';
import NatureSection from '../NatureSection/NatureSection';
import Pricing from '../Pricing/Pricing';
import StayUp from '../StayUp/StayUp';
import Story from '../Story/Story';
const latestCropsPromise = fetch('https://krishi-link-server-flax.vercel.app/latest-crops')
.then(res => res.json());

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <LatestCrops latestCropsPromise={latestCropsPromise}></LatestCrops>
            <NatureSection></NatureSection>
            <HowItWorks></HowItWorks>
            <AgroNews></AgroNews>
            
            <Pricing></Pricing>
            <StayUp></StayUp>
            <Story></Story>
            <AboutUs></AboutUs>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;
