import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar/navbar.jsx';
import SayHello from './components/say-hello/sayHello.jsx';
import ServiceTab from './components/service-tab/seviceTab.jsx';
import CaseSlide from './components/case-study/caseSlide.jsx';
import CaseStudyExpand from './components/case-study/caseStudyExpand.jsx';
import Slide from './components/slider/slide';
import WeAreAuki from './components/weareauki/WeAreAuki';
import GenericInfoCaller from './components/genericinfo/GenericInfoCaller';
import WhyAuki from './components/whyauki/WhyAuki';
import Footer from './components/footer/footer.jsx';

//lazy loading components
// const Admin = React.lazy(() => import("./components/admin/admin.jsx"));

const App = () => {
    return (
        // <Navbar/> 
        // <ServiceTab/>
        // <CaseStudyExpand /> 
        //  <CaseSlide/> 
        // <SayHello /> 
        <React.Fragment>
            <Navbar />
            <Switch>
                <Route path="/case" component={CaseStudyExpand} />
                <Route path="/" exact component={HomePage} />
                <Route path="/admin" exact render={() => (<Suspense fallback={<div>Loading...</div>}>
                    <Admin />
                </Suspense>)} />
                <Route render={() => (<h1>404 Page Not Found</h1>)} />
            </Switch>
            <Footer />
        </React.Fragment>
    );
}

const HomePage = (props) => {
    // console.log(props.history);
    return (
        <React.Fragment>
            <WeAreAuki />
            <div style={{ maxWidth: "1920px", margin: "auto" }}>
                <ServiceTab />
                <GenericInfoCaller />
                <WhyAuki />
                <CaseSlide history={props.history} loc={props.location} />
                <SayHello />
            </div>
        </React.Fragment>
    )
}

export default App;