(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-65ed2158"],{"48ac":function(e,t,n){"use strict";n("ee5f")},bbd0:function(e,t,n){"use strict";n.r(t);var c=n("7a23");const i={class:"page-container"},r={class:"recipes-container"},s={class:"drink-name-header"},d={colspan:"2"},a={colspan:"2"};function b(e,t,n,b,j,O){const l=Object(c["z"])("router-link");return Object(c["s"])(),Object(c["f"])("div",i,[Object(c["g"])("div",r,[(Object(c["s"])(!0),Object(c["f"])(c["a"],null,Object(c["y"])(j.recipes,e=>(Object(c["s"])(),Object(c["f"])("div",{class:"recipe",key:e.id},[Object(c["i"])(l,{to:"/recipes/"+e.id},{default:Object(c["G"])(()=>[Object(c["g"])("tr",s,[Object(c["g"])("th",d,Object(c["B"])(e.drinkName),1),Object(c["g"])("div",{class:Object(c["o"])(e.draft?"draft":"hidden")},"DRAFT",2)]),(Object(c["s"])(!0),Object(c["f"])(c["a"],null,Object(c["y"])(e.ingredients,(e,t)=>(Object(c["s"])(),Object(c["f"])("tr",{class:"ingredient-list",key:t},[Object(c["g"])("th",null,Object(c["B"])(e.qty)+" "+Object(c["B"])(e.unit),1),Object(c["g"])("td",null,Object(c["B"])(e.ingredient),1)]))),128)),Object(c["g"])("tr",null,[Object(c["g"])("td",a,Object(c["B"])(e.instructions),1)])]),_:2},1032,["to"])]))),128))])])}var j=n("6730"),O={name:"recipes-list",data(){return{recipes:[]}},mounted(){j["a"].getAll().then(e=>{const t=[...e.data];t.forEach((function(e){e.ingredients=[];for(let t=0;t<9;t++)e[`ingredientItem${t}_Ingredient`]&&e.ingredients.push({qty:e[`ingredientItem${t}_Qty`],unit:e[`ingredientItem${t}_Unit`],ingredient:e[`ingredientItem${t}_Ingredient`]})})),this.recipes=t})}},l=(n("48ac"),n("6b0d")),o=n.n(l);const u=o()(O,[["render",b]]);t["default"]=u},ee5f:function(e,t,n){}}]);
//# sourceMappingURL=chunk-65ed2158.2dbec70d.js.map