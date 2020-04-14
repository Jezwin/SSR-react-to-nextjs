import React, { useState, useCallback } from 'react';
//on resize color fix

const svgIcon = (<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
width="42.000000pt" height="19.000000pt" viewBox="0 0 42.000000 19.000000"
preserveAspectRatio="xMidYMid meet">
<g transform="translate(0.000000,19.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M255 108 c17 -11 6 -14 -85 -19 -101 -5 -100 -5 45 -6 157 -1 159 0
41 32 -21 6 -21 6 -1 -7z"/>
</g>
</svg>);
const Menu= React.memo((props)=> {
    const [selected,updateSelected] = useState(0);

    const menuList = [
        "Scope of work","Full Tech Implementation","Hire Talent","Case study","Say hello"
    ];
    
    const handClick=useCallback((index,value)=>{
        if(index !== 4) {
            props.onMenuChange(value);
            updateSelected(index);
        }
        else {
            //scroll to say hello here
        }

    },[props]);
    let select;

    let menuClass = ["auki-menu-container"];
    selected === 0 && menuClass.push("scope");
    return (
        <div className={menuClass.join(' ')}>
            <ul className="auki-menu">
                {   
                    menuList.map((elem,index)=>{
                        if(index === 0) {
                            select = "auki-menu-first";
                        }
                        else if (index === selected) {
                            select = "selected";
                        }
                        else {
                            select = "";
                        }
                        return <li key={index} id={index} className={select+" auki-menu-list"} onClick={()=>handClick(index,elem)}>{elem}</li>
                    })
                }
            </ul>
        </div>
    );
});
 
export default Menu;    
