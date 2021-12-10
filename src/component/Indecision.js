import React from 'react'

import AddOption from './Addoptions'
import Options from './Options'
import Header from './Header'
import Action from './Action'
import OptionModal from './OptionModal'

class Indecision extends React.Component{
   constructor(props){
      super(props);

      this.handleRemoveAllOptions = this.handleRemoveAllOptions.bind(this);
      this.handlePickOne          = this.handlePickOne.bind(this);
      this.handleAddOption        = this.handleAddOption.bind(this);
      this.handleRemoveOption     = this.handleRemoveOption.bind(this);

      this.state = {
         options : [],
         selectedOption: undefined
      }
   }

   componentDidMount() {
      try{
         console.log("Fetching data!");

         let json = localStorage.getItem("options");
         let options = JSON.parse(json);
   
         if(options){
            this.setState(() => {
               return{
                  options: options
               }
            })
         }
      }
      catch(e){
         // Do nothing at all
      }
   }

   componentDidUpdate(prevProps, prevState) {
      console.log("Saving Data!");
      
       if(prevState.options.length !== this.state.options.length){
          let json = JSON.stringify(this.state.options);
          localStorage.setItem("options",json)
       }
   }

   handleRemoveAllOptions(){
      this.setState(() => {
         return{
            options : []
         }
      })
   }

   handleRemoveOption(optionToRemove){
      this.setState((prevState) => {
         return{
            options : prevState.options.filter((option) => {
               return optionToRemove !== option;
            })  
         }
      })
   }

   handleClearSelectedOption = () => {
      this.setState(() => ({ selectedOption: undefined }));
   }

   handlePickOne(){
      let option = Math.floor(Math.random()*this.state.options.length);
      option = this.state.options[option];
      
      this.setState(() => ({
         selectedOption: option  
      }));
   }

   handleAddOption(option){
      if(!option){
         return "Enter a valid option";
      }
      else if(this.state.options.indexOf(option) > -1){
         return "This option is already exist";
      }

      this.setState((prevState) => {
         return{
            options : prevState.options.concat(option)
         }
      })
   } 

   render(){
      let title = "Indecision App";
      let subtitle = "Give your life in hands of computer";

      return(
         <div>
            <Header title={title} subtitle ={subtitle} />
            <div className='container'>
               <Action 
                  hasOption ={this.state.options.length > 0} 
                  handlePickOne = {this.handlePickOne}
               />
               <div className='widget'>
                  <Options 
                     options={this.state.options}
                     handleRemoveAll = {this.handleRemoveAllOptions} 
                     handleRemoveOption = {this.handleRemoveOption}
                  />
                  <AddOption 
                     handleAddOption = {this.handleAddOption}
                  />
               </div>
               <OptionModal 
                 selectedOption ={this.state.selectedOption}
                 handleClearSelectedOption = {this.handleClearSelectedOption}
               />
            </div>
         </div>
      )
   }
}
 
export default Indecision;
