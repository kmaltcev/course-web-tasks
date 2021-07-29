import React from "react";

const ButtonComponent = ({className, onClick}) => (
    <div className={className} onClick={onClick} role='button'>
        <span aria-hidden='true' className={`${className}-icon`}/>
        <span className='sr-only'>Button</span>
    </div>
);

export default ButtonComponent;