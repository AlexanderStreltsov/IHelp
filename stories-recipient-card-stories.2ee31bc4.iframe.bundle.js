/*! For license information please see stories-recipient-card-stories.2ee31bc4.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkihelp=self.webpackChunkihelp||[]).push([[1374],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _defineProperty}});var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");function _defineProperty(obj,key,value){return(key=(0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__.Z)(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}},"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _objectSpread2}});var _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread2(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}},"./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _toPropertyKey}});var esm_typeof=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/typeof.js");function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==(0,esm_typeof.Z)(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==(0,esm_typeof.Z)(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===(0,esm_typeof.Z)(key)?key:String(key)}},"./node_modules/@babel/runtime/helpers/esm/typeof.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}__webpack_require__.d(__webpack_exports__,{Z:function(){return _typeof}})},"./src/stories/recipient-card.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return recipient_card_stories},recipientCard:function(){return recipientCard}});var _recipientCard$parame,_recipientCard$parame2,_recipientCard$parame3,objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),recipient_card_module_name=(__webpack_require__("./node_modules/react/index.js"),"recipient-card_name__usyv0"),recipient_card_module_cardcontainer="recipient-card_cardcontainer__1ALov",recipient_card_module_card="recipient-card_card__ZLMhI",recipient_card_module_cardcontent="recipient-card_cardcontent__-Lec3",recipient_card_module_avatar="recipient-card_avatar__JE-g4",recipient_card_module_id="recipient-card_id__Kf9s+",recipient_card_module_phone="recipient-card_phone__NnM-h",recipient_card_module_phonetext="recipient-card_phonetext__OiUQ-",recipient_card_module_phonenumber="recipient-card_phonenumber__tNiTO",jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),RecipientCard=function RecipientCard(props){return(0,jsx_runtime.jsx)("div",{className:recipient_card_module_cardcontainer,children:(0,jsx_runtime.jsx)("div",{className:recipient_card_module_card,children:(0,jsx_runtime.jsxs)("div",{className:recipient_card_module_cardcontent,children:[(0,jsx_runtime.jsx)("div",{className:recipient_card_module_avatar,style:{backgroundImage:"url(".concat(props.photo,")")}}),(0,jsx_runtime.jsx)("p",{className:recipient_card_module_name,children:props.fullname}),(0,jsx_runtime.jsxs)("p",{className:"".concat(recipient_card_module_id," text-small"),children:["ID ",props.id]}),(0,jsx_runtime.jsxs)("div",{className:recipient_card_module_phone,children:[(0,jsx_runtime.jsx)("p",{className:"".concat(recipient_card_module_phonetext," text-small-bold"),children:" Тел.:"}),(0,jsx_runtime.jsx)("p",{className:"".concat(recipient_card_module_phonenumber," text-small"),children:props.phone})]})]})})})};try{RecipientCard.displayName="RecipientCard",RecipientCard.__docgenInfo={description:"",displayName:"RecipientCard",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"number | null"}},fullname:{defaultValue:null,description:"",name:"fullname",required:!1,type:{name:"string"}},role:{defaultValue:null,description:"",name:"role",required:!1,type:{name:"UserRole | null"}},vk:{defaultValue:null,description:"",name:"vk",required:!1,type:{name:"string"}},photo:{defaultValue:null,description:"",name:"photo",required:!1,type:{name:"string"}},phone:{defaultValue:null,description:"",name:"phone",required:!1,type:{name:"string"}},address:{defaultValue:null,description:"",name:"address",required:!1,type:{name:"string"}},coordinates:{defaultValue:null,description:"",name:"coordinates",required:!1,type:{name:"number[]"}},approved:{defaultValue:null,description:"",name:"approved",required:!1,type:{name:"boolean | null"}},checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean | null"}},keys:{defaultValue:null,description:"",name:"keys",required:!1,type:{name:"boolean | null"}},adminStatus:{defaultValue:null,description:"",name:"adminStatus",required:!1,type:{name:"number"}},scores:{defaultValue:null,description:"",name:"scores",required:!1,type:{name:"number | null"}},completed:{defaultValue:null,description:"",name:"completed",required:!1,type:{name:"number | null"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/recipient-card/RecipientCard.tsx#RecipientCard"]={docgenInfo:RecipientCard.__docgenInfo,name:"RecipientCard",path:"src/components/recipient-card/RecipientCard.tsx#RecipientCard"})}catch(__react_docgen_typescript_loader_error){}var recipient_card_stories={title:"Components/RecipientCard",component:RecipientCard,tags:["autodocs"],parameters:{layout:"fullscreen"}},recipientCard={args:{id:11111114,fullname:"Петров Петр Петрович",photo:"https://images.unsplash.com/photo-1601931935934-17c3717239ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=927&q=80",phone:"+7 (000) 000-00-04"}};recipientCard.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},recipientCard.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_recipientCard$parame=recipientCard.parameters)||void 0===_recipientCard$parame?void 0:_recipientCard$parame.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  args: {\n    id: 11111114,\n    fullname: 'Петров Петр Петрович',\n    photo: 'https://images.unsplash.com/photo-1601931935934-17c3717239ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=927&q=80',\n    phone: '+7 (000) 000-00-04'\n  }\n}"},null===(_recipientCard$parame2=recipientCard.parameters)||void 0===_recipientCard$parame2||null===(_recipientCard$parame3=_recipientCard$parame2.docs)||void 0===_recipientCard$parame3?void 0:_recipientCard$parame3.source)})});var __namedExportsOrder=["recipientCard"]},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);