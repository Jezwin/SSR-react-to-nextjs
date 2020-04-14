import React from 'react';

const FullTech = React.memo((props)=> {
    return(
        <div className="service-full in-right">
            <div className="service-full-desc">
                <h3 className="service-full-heading">Full Tech Implementation</h3>
                <p className="service-full-para">{props.data.desc}</p>
            </div>
        </div>
    );
});

export default FullTech;