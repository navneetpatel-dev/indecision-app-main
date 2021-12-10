import React from 'react'

class AddOption extends React.Component{
   constructor(props){
      super(props);
      this.handleAdd = this.handleAdd.bind(this);

      this.state = {
         error : undefined
      }
   }

   handleAdd(e){
      e.preventDefault();

      let option = e.target.elements.option.value;
      let error  = this.props.handleAddOption(option);
   
      this.setState(() => ({error}));
      
      if(!error){
         e.target.elements.option.value = "";
      }
   }

   render(){
      return(
         <div >
            {this.state.error && <small className='add-option-small'>{this.state.error}</small>}
            <form 
            className='add-option'
            onSubmit={this.handleAdd}>
               <input type="text" name="option" />
               <button className='button'>Add Option</button>
            </form>
         </div>
      )
   }
} 

export default AddOption;