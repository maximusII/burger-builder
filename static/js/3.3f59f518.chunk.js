(this["webpackJsonpburger-builder"]=this["webpackJsonpburger-builder"]||[]).push([[3],{100:function(e,t,n){"use strict";var a=n(0),r=n(2),i=(n(1),n(101)),c=n.n(i);t.a=function(e){var t=null,n=[c.a.InputElement];switch(e.invalid&&e.shouldValidate&&e.touched&&n.push(c.a.Invalid),e.elementType){case"input":t=Object(a.jsx)("input",Object(r.a)(Object(r.a)({onChange:e.changed,className:n.join(" ")},e.elementConfig),{},{value:e.value}));break;case"textarea":t=Object(a.jsx)("textarea",Object(r.a)(Object(r.a)({onChange:e.changed,className:n.join(" ")},e.elementConfig),{},{value:e.value}));break;case"select":t=Object(a.jsx)("select",{onChange:e.changed,className:n.join(" "),value:e.value,children:e.elementConfig.options.map((function(e){return Object(a.jsx)("option",{value:e.value,children:e.displayValue},e.value)}))});break;default:t=Object(a.jsx)("input",Object(r.a)(Object(r.a)({onChange:e.changed,className:n.join(" ")},e.elementConfig),{},{value:e.value}))}return Object(a.jsxs)("div",{className:c.a.Input,children:[Object(a.jsx)("label",{className:c.a.Label,children:e.label}),t]})}},101:function(e,t,n){e.exports={Input:"Input_Input__3A0k8",Label:"Input_Label__2oqVJ",InputElement:"Input_InputElement__38ddi",Invalid:"Input_Invalid__GQckk"}},102:function(e,t,n){e.exports={CheckoutSummary:"CheckoutSummary_CheckoutSummary__217pm"}},103:function(e,t,n){e.exports={ContactData:"ContactData_ContactData__q8KTj"}},108:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(6),i=n(7),c=n(9),l=n(8),o=n(1),u=n(5),d=n(16),s=n(102),h=n.n(s),p=n(53),v=n(32),j=function(e){return Object(a.jsxs)("div",{className:h.a.CheckoutSummary,children:[Object(a.jsx)("h1",{children:"We hope it tastes well!"}),Object(a.jsx)("div",{style:{width:"100%",margin:"auto"},children:Object(a.jsx)(p.a,{ingredients:e.ingredients})}),Object(a.jsx)(v.a,{btnType:"Danger",clicked:e.checkoutCancelled,children:"CANCEL"}),Object(a.jsx)(v.a,{btnType:"Success",clicked:e.checkoutContinued,children:"CONTINUE"})]})},m=n(2),b=n(41),g=n(103),f=n.n(g),O=n(19),C=n(100),y=n(42),x=n(43),k=function(e){Object(c.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={orderForm:{name:{elementType:"input",elementConfig:{type:"text",placeholder:"Your Name"},value:"",validation:{required:!0},valid:!1,touched:!1},street:{elementType:"input",elementConfig:{type:"text",placeholder:"Street"},value:"",validation:{required:!0},valid:!1,touched:!1},zipCode:{elementType:"input",elementConfig:{type:"text",placeholder:"Zip Code"},value:"",validation:{required:!0,minLength:5,maxLength:5},valid:!1,touched:!1},country:{elementType:"input",elementConfig:{type:"text",placeholder:"Country"},value:"",validation:{required:!0},valid:!1,touched:!1},email:{elementType:"input",elementConfig:{type:"email",placeholder:"Your Email"},value:"",validation:{required:!0},valid:!1,touched:!1},deliveryMethod:{elementType:"select",elementConfig:{options:[{value:"fastest",displayValue:"Fastest"},{value:"cheapest",displayValue:"Cheapest"}]},value:"fastest",validation:{},valid:!0}},formIsValid:!1},e.orderHandler=function(t){t.preventDefault();var n={};for(var a in e.state.orderForm)n[a]=e.state.orderForm[a].value;var r={ingredients:e.props.ings,price:e.props.ttlPrice,orderData:n,userId:e.props.userId};e.props.onOrderBurger(r,e.props.token)},e.inputChangedHandler=function(t,n){var a=Object(m.a)({},e.state.orderForm),r=Object(m.a)({},a[n]);r.value=t.target.value,r.valid=e.checkValidity(r.value,r.validation),r.touched=!0,a[n]=r;var i=!0;for(var c in a)i=a[c].valid&&i;e.setState({orderForm:a,formIsValid:i})},e}return Object(i.a)(n,[{key:"checkValidity",value:function(e,t){var n=!0;return!t||(t.required&&(n=""!==e.trim()&&n),t.minLength&&(n=e.length>=t.minLength&&n),t.maxLength&&(n=e.length<=t.maxLength&&n),n)}},{key:"render",value:function(){var e=this,t=[];for(var n in this.state.orderForm)t.push({id:n,config:this.state.orderForm[n]});var r=Object(a.jsxs)("form",{onSubmit:this.orderHandler,children:[t.map((function(t){return Object(a.jsx)(C.a,{elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,invalid:!t.config.valid,shouldValidate:t.config.validation,touched:t.config.touched,changed:function(n){return e.inputChangedHandler(n,t.id)}},t.id)})),Object(a.jsx)(v.a,{btnType:"Success",disabled:!this.state.formIsValid,children:"ORDER"})]});return this.props.loading&&(r=Object(a.jsx)(b.a,{})),Object(a.jsxs)("div",{className:f.a.ContactData,children:[Object(a.jsx)("h4",{children:"Enter your contact data"}),r]})}}]),n}(o.Component),I=Object(d.b)((function(e){return{ings:e.burgerBuilder.ingredients,ttlPrice:e.burgerBuilder.totalPrice,loading:e.order.loading,token:e.auth.token,userId:e.auth.userId}}),(function(e){return{onOrderBurger:function(t,n){return e(Object(x.b)(t,n))}}}))(Object(y.a)(k,O.a)),_=function(e){Object(c.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).checkoutCancelledHandler=function(){e.props.history.goBack()},e.checkoutContinuedHandler=function(){e.props.history.replace("/checkout/contact-data")},e}return Object(i.a)(n,[{key:"render",value:function(){var e=Object(a.jsx)(u.a,{to:"/"});if(this.props.ings){var t=this.props.purchased?Object(a.jsx)(u.a,{to:"/"}):null;e=Object(a.jsxs)("div",{children:[t,Object(a.jsx)(j,{ingredients:this.props.ings,checkoutCancelled:this.checkoutCancelledHandler,checkoutContinued:this.checkoutContinuedHandler}),Object(a.jsx)(u.b,{path:this.props.match.path+"/contact-data",component:I})]})}return e}}]),n}(o.Component);t.default=Object(d.b)((function(e){return{ings:e.burgerBuilder.ingredients,purchased:e.order.purchased}}))(_)}}]);
//# sourceMappingURL=3.3f59f518.chunk.js.map