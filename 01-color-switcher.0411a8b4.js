const e=document.querySelector("button[data-start]"),t=document.querySelector("button[data-stop]"),o=document.querySelector("body");t.disabled=!0;let l=null;e.addEventListener("click",(function(){l=setInterval((()=>{o.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`,console.log(`Body color is ${o.style.backgroundColor}`),t.disabled=!1,e.disabled=!0}),1e3)})),t.addEventListener("click",(function(){clearInterval(l),console.log(`Interval with id ${l} has stopped!`),t.disabled=!0,e.disabled=!1}));
//# sourceMappingURL=01-color-switcher.0411a8b4.js.map