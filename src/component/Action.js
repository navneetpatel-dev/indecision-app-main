import React from 'react'

let Action = (props) => {
    return(
      <div >
         <button 
            className='big-button'
            onClick={props.handlePickOne}
            disabled = {!props.hasOption}
         >
            What should i do?
         </button>
      </div> 
    );
}

export default Action;