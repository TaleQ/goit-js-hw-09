var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var i=o("iQIUW");const r=document.querySelector(".form");function l(e,t){return new Promise(((n,o)=>{setTimeout((()=>{Math.random()>.3?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}function u({position:e,delay:t}){i.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`)}function s({position:e,delay:t}){i.Notify.failure(`❌ Rejected promise ${e} in ${t}ms`)}r.addEventListener("submit",(e=>{e.preventDefault();let t=Number(r.elements.delay.value),n=t,o=Number(r.elements.amount.value),a=Number(r.elements.step.value);if(o<=0)i.Notify.failure("Amount should be greater than 0");else{setTimeout((()=>{r.reset()}),t);for(let e=1;e<=o;e+=1)e>1&&(n=t+=a),l(e,n).then(u).catch(s)}}));
//# sourceMappingURL=03-promises.694bc6b2.js.map
