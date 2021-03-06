import React from 'react';
import Dropdown from './dropdown.jsx';
const Input= React.memo((props)=> {
    let inputElement;
    const classapplied=["hello-form"];
    if(!props.valid && props.touched) {
        classapplied.push("Invalid");
    }
    switch ( props.elementType ) {
        case ( 'input' ):
            classapplied.push("hello-"+props.type);
            inputElement = 
                <div className="form-inner-container">               
                    <input
                    className = {classapplied.join(' ')}
                    {...props.elementConfig}
                    value={props.value}
                    onChange={props.changed} />
                </div>;
            break;
        case ( 'select' ):
            classapplied.push("hello-dropdown","hello-"+props.type);
            inputElement = (
                <Dropdown
                    dropClick={props.changed}
                    type= {props.type}  
                    heading={props.elementConfig.options.heading}
                    datas={props.elementConfig.options.data}/>
            );
            break;
        default:
            inputElement = <input
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
    }

    return inputElement

});

export default Input;