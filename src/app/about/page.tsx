import Head from '../components/head/Head';
import img1 from "../../../public/image/head/shish-kebab-skewers-grilled-vegetables_152520-418.jpg";
import AbouteClient from './AbouteClient';
const About=()=>{
    console.log(typeof img1)
    return (
      <>
          <Head cover={img1} title='درباره ما'/>
    <AbouteClient/>
      </>
    );
}
export default About