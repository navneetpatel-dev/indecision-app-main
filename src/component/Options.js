import React from 'react'

let Options = (props) => {
   return(
      <div>
         <div className='widget-header'>
            <h3>Your Options</h3>
            <button 
              className='button button--link'
              onClick={props.handleRemoveAll}
            >   
              Remove All
            </button>
         </div>
         {props.options.length === 0 && <p className='widget--message'>Add anoption to get started!</p>}
         
         { props.options.map((option, idx) => (
            <Option 
               key={option} 
               count={idx+1}
               optionText={option}
               handleRemoveOption = {props.handleRemoveOption}
            />
         ))}
      </div>
   )
}

let Option = (props) => {
   return(
      <div className='option'>
         <p className='option--text'>{props.count}.{props.optionText}</p>
         <button 
            className='button button--link'
            onClick={(e) => {
               props.handleRemoveOption(props.optionText)
            }}
         >
            Remove
         </button>
      </div>
   )
}
 

export default Options;