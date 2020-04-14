import React from 'react';

const Hire=React.memo((props)=>{
    return (
        <div className="service-hire in-right">
            <div className="odd service-hire-tab">
                <div className="service-hire-desc">
                    <h3 className="service-hire-heading">Hire Team</h3>
                    <p className="service-hire-para">{props.data.hireTeam}</p>
                </div>
            </div>
            <div className="even service-hire-tab">
                <div className="service-hire-desc">
                    <h3 className="service-hire-heading">Hire Talent</h3>
                    <p className="service-hire-para">{props.data.hireTalent}</p>
                </div>
            </div>
        </div>
    );
});

export default Hire;