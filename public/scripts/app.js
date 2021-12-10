"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Indecision = function (_React$Component) {
   _inherits(Indecision, _React$Component);

   function Indecision(props) {
      _classCallCheck(this, Indecision);

      var _this = _possibleConstructorReturn(this, (Indecision.__proto__ || Object.getPrototypeOf(Indecision)).call(this, props));

      _this.handleRemoveAllOptions = _this.handleRemoveAllOptions.bind(_this);
      _this.handlePickOne = _this.handlePickOne.bind(_this);
      _this.handleAddOption = _this.handleAddOption.bind(_this);
      _this.handleRemoveOption = _this.handleRemoveOption.bind(_this);

      _this.state = {
         options: []
      };
      return _this;
   }

   _createClass(Indecision, [{
      key: "componentDidMount",
      value: function componentDidMount() {
         try {
            console.log("Fetching data !");

            var json = localStorage.getItem("options");
            var options = JSON.parse(json);

            if (option) {
               this.setState(function () {
                  return {
                     options: options
                  };
               });
            }
         } catch (e) {
            // Do nothing
         }
      }
   }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps, prevState) {
         console.log("Saving Data!");

         if (prevState.options.length !== this.state.options.length) {
            var json = JSON.stringify(this.state.options);
            localStorage.setItem("options", json);
         }
      }
   }, {
      key: "handleRemoveAllOptions",
      value: function handleRemoveAllOptions() {
         this.setState(function () {
            return {
               options: []
            };
         });
      }
   }, {
      key: "handleRemoveOption",
      value: function handleRemoveOption(optionToRemove) {
         this.setState(function (prevState) {
            return {
               options: prevState.options.filter(function (option) {
                  return optionToRemove !== option;
               })
            };
         });
      }
   }, {
      key: "handlePickOne",
      value: function handlePickOne() {
         var option = Math.floor(Math.random() * this.state.options.length);
         option = this.state.options[option];
         alert(option);
      }
   }, {
      key: "handleAddOption",
      value: function handleAddOption(option) {
         if (!option) {
            return "Enter a valid option";
         } else if (this.state.options.indexOf(option) > -1) {
            return "This option is already exist";
         }

         this.setState(function (prevState) {
            return {
               options: prevState.options.concat(option)
            };
         });
      }
   }, {
      key: "render",
      value: function render() {
         var title = "Indecision App";
         var subtitle = "Give your life in hands of computer";

         return React.createElement(
            "div",
            null,
            React.createElement(Header, { title: title, subtitle: subtitle }),
            React.createElement(Action, {
               hasOption: this.state.options.length > 0,
               handlePickOne: this.handlePickOne
            }),
            React.createElement(Options, {
               options: this.state.options,
               handleRemoveAll: this.handleRemoveAllOptions,
               handleRemoveOption: this.handleRemoveOption
            }),
            React.createElement(AddOption, {
               handleAddOption: this.handleAddOption
            })
         );
      }
   }]);

   return Indecision;
}(React.Component);

/* #### Creating Components #### */

//  USING CLASS

// class Header extends React.Component{
//    render(){
//       return(
//          <div>
//             <h1>{this.props.title}</h1>
//             <h3>{this.props.subtitle}</h3>
//          </div>   
//       );
//    }
// }

// USING FUNCTION : function component can be use when there is no state in our props

var Header = function Header(props) {
   return React.createElement(
      "div",
      null,
      React.createElement(
         "h1",
         null,
         props.title
      ),
      React.createElement(
         "h3",
         null,
         props.subtitle
      )
   );
};

// class Action extends React.Component{
//    render(){
//    return(
//       <div>
//          <button 
//             onClick={this.props.handlePickOne}
//             disabled = {!this.props.hasOption}
//          >
//             What should i do?
//          </button>
//       </div> 
//    );
// }
// }

var Action = function Action(props) {
   return React.createElement(
      "div",
      null,
      React.createElement(
         "button",
         {
            onClick: props.handlePickOne,
            disabled: !props.hasOption
         },
         "What should i do?"
      )
   );
};

// class Options extends React.Component{
//    render(){
//       return(
//          <div>
//             <button onClick={this.props.handleRemoveAll}>Remove All</button>
//             { this.props.options.map((option) => <Option key={option} optionText={option} /> ) }
//          </div>
//       )
//    }
// } 

var Options = function Options(props) {
   return React.createElement(
      "div",
      null,
      React.createElement(
         "button",
         { onClick: props.handleRemoveAll },
         "Remove All"
      ),
      props.options.length === 0 && React.createElement(
         "p",
         null,
         "Add an option to get started!"
      ),
      props.options.map(function (option) {
         return React.createElement(Option, {
            key: option,
            optionText: option,
            handleRemoveOption: props.handleRemoveOption
         });
      })
   );
};

// class Option extends React.Component{
//    render(){
//       return(
//          <div>
//             <p> {this.props.optionText} </p>
//          </div>
//       )
//    }
// } 

var Option = function Option(props) {
   return React.createElement(
      "div",
      null,
      props.optionText,
      React.createElement(
         "button",
         {
            onClick: function onClick(e) {
               props.handleRemoveOption(props.optionText);
            }
         },
         "Remove"
      )
   );
};

var AddOption = function (_React$Component2) {
   _inherits(AddOption, _React$Component2);

   function AddOption(props) {
      _classCallCheck(this, AddOption);

      var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

      _this2.handleAdd = _this2.handleAdd.bind(_this2);

      _this2.state = {
         error: undefined
      };
      return _this2;
   }

   _createClass(AddOption, [{
      key: "handleAdd",
      value: function handleAdd(e) {
         e.preventDefault();

         var option = e.target.elements.option.value;
         var error = this.props.handleAddOption(option);

         this.setState(function () {
            return { error: error };
         });

         if (!error) {
            e.target.elements.option.value = "";
         }
      }
   }, {
      key: "render",
      value: function render() {
         return React.createElement(
            "div",
            null,
            this.state.error && React.createElement(
               "small",
               null,
               this.state.error
            ),
            React.createElement(
               "form",
               { onSubmit: this.handleAdd },
               React.createElement("input", { type: "text", name: "option" }),
               React.createElement(
                  "button",
                  null,
                  "Add Task"
               )
            )
         );
      }
   }]);

   return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(Indecision, null), document.getElementById('app'));
