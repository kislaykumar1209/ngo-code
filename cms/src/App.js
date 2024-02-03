import "./App.css";
import "./allitem.css";
import React, { useEffect } from "react";
import Sidebar from "./sidebar/sidebar.jsx";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/clubinfo/dashboard.jsx";
import About from "./pages/about";
import Banner from "./pages/home";
import OurPartner from "./pages/our-partners";
import OurTeam from "./pages/about/our-team";
import Testimonial from "./pages/about/testimonial";
import Events from "./pages/events";
import PhotoGallery from "./pages/events/photo-gallrey";
import Sponsor from "./pages/sponsor";
import Gallery from "./pages/events/gallery";
import CauseDeatil from "./pages/whatwedo/cause-detail";
import CollateralRes from "./pages/resources/collaterals";
import OperationalResource from "./pages/resources/operational-resource";
import Resources from "./pages/resources";
import ComeLion from "./pages/events/comelion";
import Missions from "./pages/about/missions";
import UpcomingEvents from "./pages/events/upcoming-events";
import Overview from "./pages/about/overview";
import PartnerWithUs from "./pages/sponsor/partnerwithus";
// import HomePage from "./pages/others/home-page";
import { Toaster } from "react-hot-toast";
import HomePageInfo from "./pages/homepageinfo";
import OverviewSponsor from "./pages/sponsor/overvies-sponsor";
import Globalsponser from "./pages/sponsor/Globalsponser";
import WhatWeDo from "./pages/whatwedo/whatwedo";
import { getLogoInfo } from "./redux/action/club/clubInfo";
import store from './redux/store';
import { useSelector } from "react-redux";
import WizardPage from "./wizzard/main-page";
import WhatWeDoHome from "./pages/home-page-info/whatwedohome";
import GlobalCauseHome from "./pages/home-page-info/globalcausehome";
import PartnerHome from "./pages/home-page-info/partnerhome";
import UpcomingHome from "./pages/home-page-info/upcominghome";
import HomeBaner from "./pages/home-banner/HomeBaner";
import Other from "./pages/home-banner/other";
import EventsPage from "./pages/events_page";
import ExtraInfo from "./pages/home-page-info/ExtraInfo";
import Login from "./pages/Login";
import { loadUser } from "./redux/action/auth/auth";
import SectionEventPart from "./pages/events-page/section-event-part";
import Register from "./pages/Register";
import Footer from "./pages/home-page-info/footer";
import Others from "./pages/Others/others";
import Loggin from "./pages/Loggin";
import CollateralsPDF from "./pages/resources/CollateralsPDF";
import LocalSponser from "./pages/sponsor/LocalSponser";
import Contact from "./pages/Others/contact";
import Donate from "./pages/Others/Donate";

function App() {
  // window.addEventListener('contextmenu', e => {
  //   e.preventDefault();
  // });
  const { info, loading, logo, error, message } = useSelector((state) => state.club)
  const { isAuthenticated, loading: load } = useSelector((state) => state.auth)
  React.useEffect(() => {
    store.dispatch(loadUser())
    store.dispatch(getLogoInfo())
    // console.log(isAuthenticated)

  }, [])


  return (
    <div className="App">
      <HashRouter>
        {!load && !logo?.image &&
          <Routes>
            <Route path="/" element={<WizardPage />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        }

        {!load && logo?.image &&
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            {/* <Route path="/" element={<Login />} /> */}
            <Route path="/register" element={<Register />} />
            <Route path="/banner" element={<Banner />} />
            <Route path="/banner/others" element={<Other />} />
            <Route path="/home-banner" element={<HomeBaner />} />
            <Route path="/home-page-info/about" element={<HomePageInfo />} />
            <Route path="/home-page-info/footer" element={<Footer />} />
            <Route path="/home-page-info" element={<HomePageInfo />} />
            <Route path="/home-page-info/whatwedo" element={<WhatWeDoHome />} />
            <Route path="/home-page-info/global-cause" element={<GlobalCauseHome />} />
            <Route path="/home-page-info/partner" element={<PartnerHome />} />
            <Route path="/home-page-info/events" element={<UpcomingHome />} />
            <Route path="/home-page-info/others/:id" element={<ExtraInfo />} />
            <Route exact path="/about" element={<Overview />} />
            <Route exact path="/about/mission" element={<Missions />} />
            <Route path="/our-partners" element={<PartnerWithUs />} />
            <Route exact path="/about/testimonial" element={<Testimonial />} />
            <Route path="/about/our-team" element={<OurTeam />} />
            <Route path="/events/:id" element={<EventsPage />} />
            <Route path="/events" element={<UpcomingEvents />} />
            <Route path="/events/comelion" element={<ComeLion />} />
            <Route path="/events/photo-gallery" element={<PhotoGallery />} />
            <Route path="/photo-gallery/images/:id" element={<Gallery />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/resources/collaterls" element={<CollateralRes />} />
            <Route path="/resources/collaterlsPDF" element={<CollateralsPDF />} />
            <Route path="/resources/operational_resources" element={<OperationalResource />} />
            <Route path="/sponsor" element={<OverviewSponsor />} />
            <Route path="/sponsor/Partnerwithus" element={<PartnerWithUs />} />
            <Route path="/sponsor/global" element={<Globalsponser />} />
            <Route path="/sponsor/localsponser" element={<LocalSponser />} />

            <Route path="/others/partnerwithus" element={<Others />} />
            <Route path="/others/contact" element={<Contact />} />
            <Route path="/others/donate" element={<Donate />} />

            <Route path="/whatwedo" element={<WhatWeDo />} />
            <Route path="/whatwedo/:id/:category" element={<CauseDeatil />} />


          </Routes>
          // </Sidebar>

        }
        {/* <Sidebar>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/home-banner" element={<HomeBanner />} />
            <Route path="/home-page-info/about" element={<HomePageInfo />} />
            <Route path="/home-page-info" element={<HomePageInfo />} />
            <Route path="/home-page-info/whatwedo" element={<HomePageInfo />} />
            <Route exact path="/about" element={<Overview />} />
            <Route exact path="/about/mission" element={<Missions />} />
            <Route path="/our-partners" element={<PartnerWithUs />} />
            <Route exact path="/about/testimonial" element={<Testimonial />} />
            <Route path="/about/our-team" element={<OurTeam />} />
            <Route path="/events" element={<UpcomingEvents />} />
            <Route path="/events/comelion" element={<ComeLion />} />
            <Route path="/events/photo-gallery" element={<PhotoGallery />} />
            <Route path="/photo-gallery/images/:id" element={<Gallery />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/resources/collaterls" element={<CollateralRes />} />
            <Route path="/resources/operational_resources" element={<OperationalResource />} />
            <Route path="/sponsor" element={<OverviewSponsor />} />
            <Route path="/sponsor/Partnerwithus" element={<PartnerWithUs />} />
            <Route path="/sponsor/global" element={<Globalsponser />} />

            <Route path="/whatwedo" element={<WhatWeDo />} />
            <Route path="/whatwedo/:id/:category" element={<CauseDeatil />} />


          </Routes>
        </Sidebar> */}

        <Toaster />
      </HashRouter>
      {/* } */}
    </div>
  );
}

export default App;
