import React, { useEffect } from 'react';
import Jquery from 'jquery';

const Tabs =React.memo((props)=> {

    useEffect(()=> {
        Jquery(".selected.auki-services-indicatorList").removeClass("selected");
    },[])

    const handleChange= (index,e)=>{
        if(props.isMob) {
            if(Jquery(".auki-services-indicator > .auki-scope").css('display') === 'block') {
                Jquery(".auki-services-indicator > .auki-scope").slideUp();
            }
            else {
                Jquery(".auki-services-indicator > .auki-scope").slideDown();
            }
            
            Jquery(e.target).toggleClass("selected");
        }
        if(index !== props.selected) {
            props.handleTabClick(index);
            const timer=setTimeout(function() {
                Jquery(".auki-services-indicator > .auki-scope").slideDown();
                clearTimeout(timer);
            },10);
        }

    }

    const li = props.children.map((elem,index)=>{
            let style = index === props.selected ? 'selected': '';
            return  <li className={`${style} auki-services-indicatorList`} key={index} onClick={handleChange.bind(this,index)}>{elem.props.title} <span>&#x021C0;</span></li>;
        });
    return ( 
        <div style={{overflow:"hidden"}}>
            <ul className="auki-services-indicator">
            {li}
            </ul>
            {props.children[props.selected]}
        </div>
        );
    
});
 
export default Tabs;
