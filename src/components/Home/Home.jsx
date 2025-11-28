
import AgroNews from '../AgroNews/AgroNews';
import Banner from '../Banner/Banner';
import HowItWorks from '../HowWorks/HowItWorks';
import LatestCrops from '../LatestCrops/LatestCrops';
import StayUp from '../StayUp/StayUp';
import Story from '../Story/Story';
const latestCropsPromise = fetch('https://krishi-link-server-flax.vercel.app/latest-crops')
.then(res => res.json());

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <LatestCrops latestCropsPromise={latestCropsPromise}></LatestCrops>
            <HowItWorks></HowItWorks>
            <AgroNews></AgroNews>
            <StayUp></StayUp>
            <Story></Story>
        </div>
    );
};

export default Home;
