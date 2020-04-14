import React, { useCallback, useState, useEffect } from 'react';
import Slide from '../slider/slide.jsx';
import CaseStudyExpand from './caseStudyExpand.jsx';
import MediaQuery, {useMediaQuery} from 'react-responsive';
import getData from '../../content/caseStudy.js';

// const data = [
//     {
//         image: "./assets/Case1.png",
//         imageAlt: "Case1",
//         link: "aem",
//         title: "Adobe Experience Cloud",
//         text:"Help large financial organisation to outsource their AEM development."
//     },
//     {
//         image: "./assets/Case2.png",
//         imageAlt: "Case2",
//         link: "#",
//         title: "E-Commerce Cloud",
//         text:"Help large financial organisation to outsource their AEM development."
//     },
//     {
//         image: "./assets/Case3.png",
//         imageAlt: "Case3",
//         link: "#",
//         title: "Forntend Dev",
//         text:"Help large financial organisation to outsource their AEM development."
//     },
//     {
//         image: "./assets/Case1.png",
//         imageAlt: "Case4",
//         link: "#",
//         title: "Apps",
//         text:"Help large financial organisation to outsource their AEM development."
//     }
// ];


const responsive= [
    {
        query: '(min-width: 1150px)',
        slidesToShow: 3,
        isMob: false
    },
    {   
        query: '(min-width: 768px) and (max-width:1149px)',
        slidesToShow: 2,
        isMob: false
    },
    {
        query: '(max-width: 767px)',
        slidesToShow: 1,
        isMob: true
    }
];

const CaseSlide = React.memo((props)=> {
    
    const combine = useCallback((arr1,arr2,arr3)=>{
        var len = Math.max(arr1.length,arr2.length,arr3.length);
        let i=0,arr=[];
        while(i<len) {
            arr1[i] !== undefined && arr.push(arr1[i]);
            arr2[i] !== undefined && arr.push(arr2[i]);
            arr3[i] !== undefined && arr.push(arr3[i]);
            i++
        }
        return arr;
    },[])

    const formateData = useCallback(()=> {
        const aemData = [...getData[0].data];
        const ecomData = [...getData[1].data];
        const fData = [...getData[2].data];
        let combineData = combine(aemData,ecomData,fData);
        return (
                [...combineData]
        )
    },[getData])

    const [showCaseStudy, updateShowCaseStudy] = useState(false);
    const [dataFormated,updateDataFormated] = useState(formateData());
    console.log(dataFormated);
    const [link,updateLink] = useState('');
    const isMob=(useMediaQuery({ maxDeviceWidth: 767 }));
    const type = "case-slide";

    const handleLinkClick = useCallback((e,link)=> {
        e.preventDefault();
        console.log(e.target)
        if(!isMob){
            props.history.push(props.loc.pathname+"case/"+link);
        }
        else {
            updateLink(link);
            updateShowCaseStudy(true);
        }
    },[isMob,props.history]);

    const handleClose = useCallback((e)=> {
        e.preventDefault();
        updateShowCaseStudy(false);
    },[])

    useEffect(()=> {

    },[])

    return (
        <div className="caseSlide">
            <div className="caseSlide-title">Case Studies</div>
            {!showCaseStudy ?   
                    responsive.map((slide,index)=> {
                        return (
                            <MediaQuery query={slide.query} key={index}>
                                {/* <Slide data={data} handleLinkClick={handleLinkClick} slidesToShow={slide.slidesToShow} type="case-slide" isMob={slide.isMob}/> */}
                                <Slide length={dataFormated.length} slidesToShow={slide.slidesToShow} type={type}>
                                   {
                                        dataFormated.map(function(data,index){
                                            const classValue=[type,"slider-slide",(index + 1) % 2 === 0 ? 'even' : 'odd' ];
                                            const link = "case/"+data.tag+"/"+data.id;
                                            return (
                                                <div key={index} data-index={index} className={classValue.join(' ')}>
                                                    <div className={`${type}-container`}>
                                                        <h2 className={`${type}-title`}>{data.title}</h2>
                                                        <p className={`${type}-text`}>{data.shortDesc}</p>
                                                        {data.link !== '' ?
                                                            <a onClick={(e)=> handleLinkClick(e,data.link)} className={`${type}-link`} href={link}>
                                                                <span className={`${type}-link-char`}>&#8640;</span>
                                                                <span>read the case study</span>
                                                            </a> : ''
                                                        }
                                                    </div>
                                                    {data.image !== '' ? <img className={`${type}-img`} src={data.image} alt={data.image}/> : ''}
                                                </div>
                                            );
                                        })
                                    }
                                </Slide>
                            </MediaQuery>
                        )
                    }) : <CaseStudyExpand handleClose={handleClose} link={link} isMob={true}/>
            }
        </div>
    );
});

export default CaseSlide;