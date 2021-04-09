(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1038:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(75),s=r(34),c=r(1),l=r.n(c),i=r(17),u=r.n(i),f=r(13),m=["ctrl","alt","shift"],p={"":[],alt:["space"],shift:[],ctrl:["f4","f5","f11","w","r","t","o","p","a","d","f","g","h","j","l","z","x","c","v","b","n","pagedown","pageup"],"ctrl+shift":["q","w","r","t","p","a","h","v","b","n"]},y=function(e){return e.join("+")},d="It's not possible to define only modifier keys (ctrl, alt and shift) as a shortcut",v="Field can't be empty.",b=[function(e){var t=e.pressedKeys;if(!(void 0===t?[]:t).length)return{hasError:!0,errorMessage:v}},function(e){var t=e.pressedKeys,r=t[t.length-1];if(m.includes(r))return{hasError:!0,errorMessage:d}},function(e){var t=e.commandName,r=e.pressedKeys,n=function(e,t,r){var n=void 0,a=y(r);for(var o in e){var s=e[o].keys;if(a===y(s)&&o!==t){n=e[o];break}}return n}(e.hotkeys,t,r);if(n)return{hasError:!0,errorMessage:'"'.concat(n.label,'" is already using the "').concat(r,'" shortcut.')}},function(e){var t=e.pressedKeys,r=void 0===t?[]:t,n=r[r.length-1],a=y(r.slice(0,r.length-1)),o=p[a];if(!!o&&o.includes(n))return{hasError:!0,errorMessage:'"'.concat(y(r),'" shortcut combination is not allowed')}}],g=r(254);r(1055);function h(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function w(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var s,c=e[Symbol.iterator]();!(n=(s=c.next()).done)&&(r.push(s.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(r,!0).forEach((function(t){E(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function E(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var k=function(e){return{hotkeys:j({},e),errors:{}}},P=function(e){var t=e.commandName,r=e.pressedKeys,n=e.hotkeys,a=!0,o=!1,s=void 0;try{for(var c,l=b[Symbol.iterator]();!(a=(c=l.next()).done);a=!0){var i=(0,c.value)({commandName:t,pressedKeys:r,hotkeys:n});if(i&&i.hasError)return i}}catch(e){o=!0,s=e}finally{try{a||null==l.return||l.return()}finally{if(o)throw s}}return{errorMessage:void 0}},N=function(e){var t=[],r=Object.entries(e);if(r.length){var n=Math.ceil(r.length/2);t.push(r.slice(0,n)),t.push(r.slice(n,r.length))}return t};function C(e){var t=e.onClose,r=Object(s.c)("UserPreferencesModal").t,o=g.d.hotkeyDefaults,c=g.d.hotkeyDefinitions,l=w(Object(n.useState)(k(c)),2),i=l[0],p=l[1],y=Object(f.P)(),d=Object.keys(i.errors).some((function(e){return!!i.errors[e]})),v=Object.keys(i.hotkeys).length,b=N(i.hotkeys);return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"HotkeysPreferences"},v?a.a.createElement("div",{className:"hotkeyTable"},b.map((function(e,t){return a.a.createElement("div",{className:"hotkeyColumn",key:t},a.a.createElement("div",{className:"hotkeyHeader"},a.a.createElement("div",{className:"headerItemText text-right"},"Function"),a.a.createElement("div",{className:"headerItemText text-center"},"Shortcut")),e.map((function(e){var t=e[0],r=e[1],n=r.keys,o=r.label,s=i.errors[e[0]];return a.a.createElement("div",{key:t,className:"hotkeyRow"},a.a.createElement("div",{className:"hotkeyLabel"},o),a.a.createElement("div",{"data-key":"defaultTool",className:u()("wrapperHotkeyInput",s?"stateError":"")},a.a.createElement(f.i,{keys:n,modifier_keys:m,handleChange:function(e){!function(e,t,r){var n=P({commandName:e,pressedKeys:r,hotkeys:i.hotkeys}).errorMessage;p((function(a){return{hotkeys:j({},a.hotkeys,E({},e,j({},t,{keys:r}))),errors:j({},a.errors,E({},e,n))}}))}(t,r,e)},classNames:"preferencesInput"}),a.a.createElement("span",{className:"preferencesInputErrorMessage"},s)))})))}))):"Hotkeys definitions is empty"),a.a.createElement(f.C,{onResetPreferences:function(){var e={};o.map((function(t){var r=t.commandName,n=h(t,["commandName"]);e[r]=j({},n)})),p(k(e))},onSave:function(){var e=i.hotkeys;g.d.setHotkeys(e),localStorage.setItem("hotkey-definitions",JSON.stringify(e)),t(),y.show({message:r("SaveMessage"),type:"success"})},onCancel:t,hasErrors:d,t:r}))}C.propTypes={onClose:l.a.func};var S=r(58),L=r(242);r(1056);function M(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function I(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?M(r,!0).forEach((function(t){x(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):M(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function x(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function A(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var s,c=e[Symbol.iterator]();!(n=(s=c.next()).done)&&(r.push(s.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var T=L.a.actions;function D(e){var t=e.onClose,r=Object(S.c)(),o=Object(S.d)((function(e){var t=e.preferences;return(void 0===t?{}:t).windowLevelData})),c=A(Object(n.useState)({values:I({},o)}),2),l=c[0],i=c[1],u=Object(s.c)("UserPreferencesModal").t,m=Object(f.P)(),p=function(e){var t=e.target,r=t.dataset,n=r.key,a=r.inputname,o=t.value;l.values[n]&&l.values[n][a]&&i((function(e){return I({},e,{values:I({},e.values,x({},n,I({},e.values[n],x({},a,o))))})}))};return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"WindowLevelPreferences"},a.a.createElement("div",{className:"wlColumn"},a.a.createElement("div",{className:"wlRow header"},a.a.createElement("div",{className:"wlColumn preset"},"Preset"),a.a.createElement("div",{className:"wlColumn description"},"Description"),a.a.createElement("div",{className:"wlColumn window"},"Window"),a.a.createElement("div",{className:"wlColumn level"},"Level")),Object.keys(l.values).map((function(e,t){return a.a.createElement("div",{className:"wlRow",key:e},a.a.createElement("div",{className:"wlColumn preset"},e),a.a.createElement("div",{className:"wlColumn description"},a.a.createElement("input",{type:"text",className:"preferencesInput",value:l.values[e].description,"data-key":e,"data-inputname":"description",onChange:p})),a.a.createElement("div",{className:"wlColumn window"},a.a.createElement("input",{type:"number",className:"preferencesInput",value:l.values[e].window,"data-key":e,"data-inputname":"window",onChange:p})),a.a.createElement("div",{className:"wlColumn level"},a.a.createElement("input",{type:"number",className:"preferencesInput",value:l.values[e].level,"data-key":e,"data-inputname":"level",onChange:p})))})))),a.a.createElement(f.C,{onResetPreferences:function(){},onSave:function(){r(T.setUserPreferences({windowLevelData:l.values})),t(),m.show({message:u("SaveMessage"),type:"success"})},onCancel:t,hasErrors:!1,t:u}))}D.propTypes={onClose:l.a.func};var R=r(109);r(1057);function F(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var s,c=e[Symbol.iterator]();!(n=(s=c.next()).done)&&(r.push(s.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function H(e){var t=e.onClose,r=Object(s.c)("UserPreferencesModal").t,o=Object(f.P)(),c=R.a.language,l=R.a.availableLanguages,i=F(Object(n.useState)(c),2),u=i[0],m=i[1];return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"GeneralPreferences"},a.a.createElement("div",{className:"language"},a.a.createElement("label",{htmlFor:"language-select",className:"languageLabel"},"Language"),a.a.createElement(f.k,{language:u,onLanguageChange:m,languages:l}))),a.a.createElement(f.C,{onResetPreferences:function(){m(R.a.defaultLanguage)},onSave:function(){R.a.changeLanguage(u),t(),o.show({message:r("SaveMessage"),type:"success"})},onCancel:t,hasErrors:!1,t:r}))}H.propTypes={onClose:l.a.func};r(1058);var K=[{name:"Hotkeys",Component:C,customProps:{}},{name:"General",Component:H,customProps:{}},{name:"Window Level",Component:D,customProps:{}}];function U(e){var t={onClose:e.hide};return a.a.createElement(f.B,{tabs:K,customProps:t})}U.propTypes={hide:l.a.func};var q=r(494);r(1059);function J(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var s,c=e[Symbol.iterator]();!(n=(s=c.next()).done)&&(r.push(s.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function W(e){var t=e.t,r=e.user,o=e.userManager,s=e.modal.show,c=(e.useLargeLogo,e.linkPath,e.linkText,e.location,e.children,J(Object(n.useState)([]),2)),l=(c[0],c[1]);return Object(n.useEffect)((function(){var e=[{title:t("About"),icon:{name:"info"},onClick:function(){return s({content:f.a,title:t("OHIF Viewer - About")})}},{title:t("Preferences"),icon:{name:"user"},onClick:function(){return s({content:U,title:t("User Preferences")})}}];r&&o&&e.push({title:t("Logout"),icon:{name:"power-off"},onClick:function(){return o.signoutRedirect()}}),l(e)}),[l,s,t,r,o]),a.a.createElement(a.a.Fragment,null,a.a.createElement("div",null,a.a.createElement("img",{className:"imageinet-logo nav-logo",src:"https://www.imageinet.com/assets/images/james/admin.bmp"})))}W.propTypes={linkText:l.a.string,linkPath:l.a.string,useLargeLogo:l.a.bool,location:l.a.object.isRequired,children:l.a.node,t:l.a.func.isRequired,userManager:l.a.object,user:l.a.object,modal:l.a.object},W.defaultProps={useLargeLogo:!1,children:Object(q.a)()};var G=Object(s.d)(["Header","AboutModal"])(Object(o.g)(Object(f.R)(W))),z=Object(S.b)((function(e){return{user:e.oidc&&e.oidc.user}}))(G);t.a=z},1055:function(e,t,r){},1056:function(e,t,r){},1057:function(e,t,r){},1058:function(e,t,r){},1059:function(e,t,r){}}]);
//# sourceMappingURL=ConnectedStandaloneRouting~IHEInvokeImageDisplay~StudyListRouting~ViewerLocalFileData~ViewerRouting.bundle.f092ee20ced49740ccae.js.map