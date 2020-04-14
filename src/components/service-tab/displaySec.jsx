import React from 'react';
import Scope from "./scope.jsx";
import Hire from './hire.jsx';
import FullTech from './fullTech.jsx';
import Slide from '../slider/slide.jsx';
import MediaQuery from 'react-responsive';
import getData from '../../content/caseStudy';

const DisplaySec=React.memo((props)=> {

    const handleLinkClick= (e,link) => {

    }

    if(props.selected==="Case study"){
        const responsive= [
            {
                query: '(min-width: 1226px)',
                slidesToShow: 2
            },
            {
                query: '(min-width: 768px) and (max-width: 1225px)',
                slidesToShow: 1
            }
        ]
        const type="service-case";
        return (
            
            <div className="service-caseStudy in-right">
                {responsive.map((slide,index)=>{
                    return (
                    <MediaQuery key={index} query={slide.query}>
                        <Slide length={props.data.length} slidesToShow={slide.slidesToShow} type={type}>
                            {
                                        props.data.map(function(data,index){
                                            const classValue=[type,"slider-slide",(index + 1) % 2 === 0 ? 'even' : 'odd' ];
                                            const link = "case/"+data.tag+"/"+data.id;
                                            return (
                                                <div key={index} data-index={index} className={classValue.join(' ')}>
                                                    <div className={`${type}-container`}>
                                                        <p className={`${type}-text`}>{data.desc}</p>
                                                        {data.link !== '' ?
                                                            <a onClick={(e)=> handleLinkClick(e,data.link)} className={`${type}-link`} href={link}>
                                                                <span className={`${type}-link-char`}>&#8640;</span>
                                                                <span>read the case study</span>
                                                            </a> : ''
                                                        }
                                                    </div>
                                                </div>
                                            );
                                        })
                            }
                        </Slide>
                    </MediaQuery>);
                })
                }
            </div>
            
        );
    }
    else if(props.selected==="Scope of work") {
        return <Scope title={props.title} data={props.data} isMob={false}/>;
    }
    else if(props.selected==="Hire Talent") {
        return <Hire data={props.data}/>
    }
    else if(props.selected==="Full Tech Implementation") {
        return <FullTech data={props.data} />
    }
    return null;


});
 
export default DisplaySec;

