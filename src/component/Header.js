import React from 'react';

let Header = (props) => {
   return(
      <div className='header'>
         <div className='container'>
            <h1>{props.title}</h1>
            <h3>{props.subtitle}</h3>
         </div>
      </div>   
   );
}

export default Header;