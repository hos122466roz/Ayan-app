import Head from '@/app/components/head/Head';
import img1 from "../../../public/image/head/shish-kebab-skewers-grilled-vegetables_152520-418.jpg";
import AbouteClient from './AbouteClient';
const About=()=>{
  
    return (
      <div>
    <Head cover={img1} title='درباره ما'/>
    <AbouteClient/>
      </div>
    );
}
export default About