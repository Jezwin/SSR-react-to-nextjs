import React from 'react';

const Scope = React.memo((props)=> {
    let expertise='';
    if(props.data.expertise.length !==0 ) {
        expertise = props.data.expertise.map((elem,index)=>{
            return <p key={index}>{elem}</p>
        });
        expertise =
                    <div className="auki-scope-products">
                        {expertise}
                    </div>;
    }
    return(
        <div className="auki-scope in-right">
            <div className="auki-scope-container">
                <p className="auki-scope-desc">{props.data.desc}</p>
                {props.isMob ? 
                    <div className="auki-scope-econtainer">
                        {expertise !== '' &&
                        <div className="auki-scope-expertiseContainer">
                            <p className="auki-scope-expertise"><b>Our expertise</b></p>
                            {expertise}
                        </div> }
                        <div className="auki-scope-logo">
                            {props.data.subtitleLogo !== "" &&
                                <div style={{display:"flex"}}>
                                    <img src={props.data.subtitleLogo} width= "55px" alt="subtitle" />
                                    <p style={{maxWidth: "85px",paddingLeft: "5px"}}><b>{props.data.subtitleLogoDesc}</b></p>
                                </div> }
                            {props.data.subtitle !== "" && <h4 className="auki-logo-subtitle">{props.data.subtitle}</h4>}
                            <div style={{display :"flex"}}>
                                {props.data.subtitleLogo !== '' && <img src={props.data.subtitleLogo1} alt="adobe" width="30px" height="25px"/>} 
                                {props.data.subtitleLogoDesc !== '' && <p>{props.data.subtitleLogoDesc1}</p>}
                            </div>
                        </div>
                    </div> 
                    :
                        <div className="auki-scope-expertiseContainer">
                            {expertise !== '' && <p className="auki-scope-expertise"><b>Our expertise</b></p> }
                            {expertise}
                        </div> 
                }
                {props.isMob && 
                <div className="auki-scope-hire">
                    <p className="auki-scope-hireDesc">Hire high quality experties team or engineers</p>
                    <div className="auki-scope-hireBtnContainer">
                        <button className="auki-scope-hireBtn">HIRE TEAM</button>
                        <button className="auki-scope-hireBtn">HIRE TALENT</button>
                    </div>
                </div> 
                }
            </div>
        </div>
    );
});

export default Scope;