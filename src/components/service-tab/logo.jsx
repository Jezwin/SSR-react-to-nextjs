import React from 'react';

const Logo = React.memo((props)=> {
    const data = props.logoData;
    const select=props.menuSelected !== "Scope of work" ? "open" : '';
    return (
        <div className={select+" auki-aem-logo"}>
            <div className="auki-aem-logo-container">
                <div className={select+" auki-aem-logo-title"}>
                    {data.logo !== "" && <img src={data.logo} alt="AEM" width="75px" /> }
                    <h1 className="auki-services-title">{data.title}</h1>
                </div>
                <div className={select+"-display-none"}>
                    {data.subtitle !== "" && <h4 className="auki-logo-subtitle">{data.subtitle}</h4>}
                    <div style={{display :"flex"}}>
                        {data.subtitleLogo !== '' && <img src={data.subtitleLogo} alt="adobe" width="30px" height="25px"/>} 
                        {data.subtitleLogoDesc !== '' && <p>{data.subtitleLogoDesc}</p>}
                    </div>
                </div>
            </div>
        </div>  
    );  
});
 
export default Logo;