
import OneTradeWorks from "../app/components/OneTradeWorks"
import OpinionSection from "../app/components/OpinionSection"
import ExploreSection from "../app/components/ExploreSection"
import Thoughts from "../app/components/Thoughts"
import Header from "../app/components/header"
import BlogSection from "../app/components/BlogSection"
import ContactForm from "../app/components/ContactForm"
import Footer from "../app/components/Footer"
import QA from "../app/components/QA"
import Tellus from "../app/components/Tellus"
///import OneTradeWorks from "../app/components/Thoughts"


export default function Home() {
  return (
<div>
<Header />
<Thoughts />
<OpinionSection />
<ExploreSection />
<OneTradeWorks />
<Tellus />
<QA />
<ContactForm />
<BlogSection />

<Footer />
     
    </div>
  );
}
