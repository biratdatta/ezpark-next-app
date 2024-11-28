
import Header from "./pageComponents/Header/page";
import FAQ from "./pageComponents/FAQ/page"
import Grid from "./pageComponents/Grid/page";
import Testimonial from "./pageComponents/Testimonials/page";
import Footer from "./pageComponents/Footer/page";
 
export default function Home() {
  return (
 <main>
 <Header/>
 <Grid/>
 <Testimonial/>
 
 <FAQ/>
 <Footer/>
 </main>
  );
}
