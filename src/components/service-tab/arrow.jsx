import React from 'react';
import Jquery from 'jquery';
const handlePrev=()=> {
   let $prev= Jquery(".selected.auki-services-indicatorList").prev();
   if($prev.length === 0){
        $prev=Jquery(".selected.auki-services-indicatorList").nextAll(".auki-services-indicatorList:last");
    }
    $prev.trigger('click');
}
const handleNext=()=> {
    let $next= Jquery(".selected.auki-services-indicatorList").next();
    if($next.length === 0){
        $next=Jquery(".selected.auki-services-indicatorList").prevAll(".auki-services-indicatorList:last");
    }
    $next.trigger('click');
}
const left=<div onClick={handlePrev} className="service-arrow left">&#8592;</div>;
const right=<div onClick={handleNext} className="service-arrow right">&#8594;</div>;
const Arrow = React.memo((props)=> {
    return (
        <div className=" auki-service-arrow">
                { props.dir==='left'? left : right }
        </div>
    );
});

export default Arrow;