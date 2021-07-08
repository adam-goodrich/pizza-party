(this["webpackJsonpstore-app"]=this["webpackJsonpstore-app"]||[]).push([[0],{22:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a.n(s),n=a(16),l=a.n(n),i=(a(22),function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,33)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,n=t.getLCP,l=t.getTTFB;a(e),s(e),c(e),n(e),l(e)}))}),r=a(11),o=a(9),d=a(7),j=a(2),b=a.p+"static/media/PizzaHero.01db80e8.png",m=a.p+"static/media/CheesePizza.308bbd6b.jpeg",u=a.p+"static/media/MeatPizza.82b37b77.jpeg",h=a.p+"static/media/VeggiePizza.80928ebd.jpeg",x=a(0);var O=function(e){var t=function(t){var a=document.getElementById(t).value;"cheesePizzaCount"===t?a<1||e.SetTotalCheese(e.totalCheese+parseInt(a)):"meatPizzaCount"===t?a<1||e.SetTotalMeat(e.totalMeat+parseInt(a)):"VeggiePizzaCount"===t&&(a<1||e.SetTotalVeggie(e.totalVeggie+parseInt(a)))};function a(e){var t=document.getElementById(e);t.value<=0?t.value=1:t.value=parseInt(t.value)+1}function s(e){var t=document.getElementById(e);t.value<=0?t.value=0:t.value=t.value-1}return Object(x.jsxs)("div",{children:[Object(x.jsx)("section",{id:"hero-image",children:Object(x.jsxs)("div",{className:"row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg hero-image",children:[Object(x.jsxs)("div",{className:"col-lg-7 p-3 p-lg-5 pt-lg-3",children:[Object(x.jsxs)("h1",{className:"display-4 fw-bold lh-1 mb-5",children:[Object(x.jsx)("i",{className:"fas fa-pizza-slice"}),Object(x.jsx)("b",{children:" Pizza Party"})," brings the party to you!"]}),Object(x.jsx)("p",{className:"lead",children:"We make pizza for people who like to party! Order one of our many classic pizza's that are guaranteed to make any party pop! Scroll down and click on one of our great options to add to your cart. We have an option for all types of parties. What are you waiting for!"}),Object(x.jsx)("a",{href:"#order-cards",className:"btn btn-primary btn-lg mt-2 mb-4",children:"Click to see our options!"})]}),Object(x.jsx)("div",{className:"col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg",children:Object(x.jsx)("img",{className:"rounded-lg-3",src:b,alt:"",width:"965"})})]})}),Object(x.jsx)("div",{id:"order-cards",className:"sudo-cards"}),Object(x.jsx)("section",{id:"order-cards",className:"order-cards",children:Object(x.jsx)("div",{className:"container p-5",children:Object(x.jsxs)("div",{className:"row",children:[Object(x.jsx)("div",{className:"col-lg-4 d-flex align-items-stretch",children:Object(x.jsxs)("div",{className:"card mt-3 mb-3",children:[Object(x.jsx)("img",{src:m,className:"card-img-top",alt:"..."}),Object(x.jsxs)("div",{className:"card-body",children:[Object(x.jsx)("h5",{className:"card-title",children:"Cheese Pizza - $9.99"}),Object(x.jsx)("p",{className:"card-text",children:"The classic for the cheese lover. You wont be cheesy if you bring this to the party. It's a classic for a reason. Red sauce and cheese baked to perfection. Add it now!"}),Object(x.jsx)("div",{className:"row",children:Object(x.jsxs)("div",{className:"input-group mb-4 col-xs-1 center-block",children:[Object(x.jsx)("button",{className:"btn btn-secondary ",onClick:function(){return s("cheesePizzaCount")},children:"-"}),Object(x.jsx)("input",{type:"number",id:"cheesePizzaCount",name:"cheese-pizza",min:"0",max:"10",className:"text-center input-fields",placeholder:"0"}),Object(x.jsx)("button",{className:"btn btn-secondary me-1",onClick:function(){return a("cheesePizzaCount")},children:"+"}),Object(x.jsx)("button",{className:"btn btn-primary",onClick:function(){return t("cheesePizzaCount")},children:"Add to cart"})]})}),0===e.totalCheese?Object(x.jsx)("p",{className:"alert alert-info",children:"No Cheese in cart yet"}):Object(x.jsxs)("p",{className:"alert alert-success",children:["Total Cheese in cart: ",e.totalCheese]})]})]})}),Object(x.jsx)("div",{className:"col-lg-4 d-flex align-items-stretch",children:Object(x.jsxs)("div",{className:"card mt-3 mb-3",children:[Object(x.jsx)("img",{src:u,className:"card-img-top",alt:"..."}),Object(x.jsxs)("div",{className:"card-body",children:[Object(x.jsx)("h5",{className:"card-title",children:"Meatlovers - $14.99"}),Object(x.jsx)("p",{className:"card-text",children:"Bring this to the party if you are bold! This one is sure to make an impression. You know you want it. Red sauce and cheese with bacon, ham, sausage, and pepperoni."}),Object(x.jsx)("div",{className:"row",children:Object(x.jsxs)("div",{className:"input-group mb-4 col-xs-1 center-block",children:[Object(x.jsx)("button",{className:"btn btn-secondary ",onClick:function(){return s("meatPizzaCount")},children:"-"}),Object(x.jsx)("input",{type:"number",id:"meatPizzaCount",name:"meatPizzaCount",min:"0",max:"100",className:"text-center input-fields",placeholder:"0"}),Object(x.jsx)("button",{className:"btn btn-secondary me-1",onClick:function(){return a("meatPizzaCount")},children:"+"}),Object(x.jsx)("button",{className:"btn btn-primary me-1",onClick:function(){return t("meatPizzaCount")},children:"Add to cart"})]})}),0===e.totalMeat?Object(x.jsx)("p",{className:"alert alert-info",children:"No Meatlovers in cart yet"}):Object(x.jsxs)("p",{className:"alert alert-success",children:["Total Meatlovers in cart: ",e.totalMeat]})]})]})}),Object(x.jsx)("div",{className:"col-lg-4 d-flex align-items-stretch",children:Object(x.jsxs)("div",{className:"card mt-3 mb-3",children:[Object(x.jsx)("img",{src:h,className:"card-img-top",alt:"..."}),Object(x.jsxs)("div",{className:"card-body",children:[Object(x.jsx)("h5",{className:"card-title",children:"Vegan Pizza - $12.99"}),Object(x.jsx)("p",{className:"card-text",children:"Veggies party all night long. This is sure to make you the life of the party. Grab one today (maybe more than one). Vegan bechamel sauce with vegan cheese, asparagus, and arugala."}),Object(x.jsxs)("div",{className:"input-group mb-4",children:[Object(x.jsx)("button",{className:"btn btn-secondary ",onClick:function(){return s("VeggiePizzaCount")},children:"-"}),Object(x.jsx)("input",{type:"number",id:"VeggiePizzaCount",name:"VeggiePizzaCount",min:"0",max:"10",className:"text-center input-fields",placeholder:"0"}),Object(x.jsx)("button",{className:"btn btn-secondary me-1",onClick:function(){return a("VeggiePizzaCount")},children:"+"}),Object(x.jsx)("button",{className:"btn btn-primary",onClick:function(){return t("VeggiePizzaCount")},children:"Add to cart"})]}),0===e.totalVeggie?Object(x.jsx)("p",{className:"alert alert-info",children:"No Vegan in cart yet"}):Object(x.jsxs)("p",{className:"alert alert-success",children:["Total Vegan in cart: ",e.totalVeggie]})]})]})})]})})}),Object(x.jsx)("div",{id:"order-cards",className:"sudo-cards-down"}),Object(x.jsx)("section",{id:"carousel",children:Object(x.jsx)("div",{className:"",children:Object(x.jsxs)("div",{id:"carouselExampleControls",className:"carousel slide","data-bs-ride":"carousel",children:[Object(x.jsxs)("div",{className:"carousel-inner",children:[Object(x.jsx)("div",{className:"carousel-item active",children:Object(x.jsx)("img",{src:m,className:"d-block w-100",alt:"..."})}),Object(x.jsx)("div",{className:"carousel-item",children:Object(x.jsx)("img",{src:u,className:"d-block w-100",alt:"..."})}),Object(x.jsx)("div",{className:"carousel-item",children:Object(x.jsx)("img",{src:h,className:"d-block w-100",alt:"..."})})]}),Object(x.jsxs)("button",{className:"carousel-control-prev",type:"button","data-bs-target":"#carouselExampleControls","data-bs-slide":"prev",children:[Object(x.jsx)("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),Object(x.jsx)("span",{className:"visually-hidden",children:"Previous"})]}),Object(x.jsxs)("button",{className:"carousel-control-next",type:"button","data-bs-target":"#carouselExampleControls","data-bs-slide":"next",children:[Object(x.jsx)("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),Object(x.jsx)("span",{className:"visually-hidden",children:"Next"})]})]})})})]})},p=a.p+"static/media/PizzaChef.288881b1.jpeg",g=a.p+"static/media/EmptyBox.016758d3.jpeg",N=function(e){var t=function(t){var a=document.getElementById(t).value;"cheesePizzaCount"===t?a<1||e.SetTotalCheese(parseInt(a)):"meatPizzaCount"===t?a<1||e.SetTotalMeat(parseInt(a)):"VeggiePizzaCount"===t&&(a<1||e.SetTotalVeggie(parseInt(a)))},a=function(t){"cheesePizzaCount"===t?e.SetTotalCheese(0):"meatPizzaCount"===t?e.SetTotalMeat(0):"VeggiePizzaCount"===t&&e.SetTotalVeggie(0)};function s(e){var t=document.getElementById(e);console.log(t.value),t.value<=0?t.value=1:t.value=parseInt(t.value)+1}function c(e){var t=document.getElementById(e);t.value<=1?t.value=1:t.value=t.value-1}return Object(x.jsxs)("div",{children:[Object(x.jsx)("section",{id:"top",children:Object(x.jsx)("div",{className:"container text-center mt-5 mb-3",children:0===e.totalItems?Object(x.jsx)("h1",{className:"alert alert-danger",children:"You got to add some pizza to have a pizza party"}):Object(x.jsx)("h2",{className:"alert alert-warning",children:"You're almost ready to party!"})})}),0===e.totalItems?Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)("h1",{className:"display-3 text-center ",children:"No items in cart"}),Object(x.jsx)("img",{src:g,className:"img-fluid m-4 rounded mx-auto d-block",alt:"chef cooking a pizza"})]}):Object(x.jsx)("section",{children:Object(x.jsx)("div",{className:"container mt-5",children:Object(x.jsxs)("div",{className:"row",children:[Object(x.jsxs)("div",{className:"col-lg-6 col-12",children:[Object(x.jsxs)("h1",{class:"display-4 fw-bold lh-1 mb-5 text-center",children:[Object(x.jsx)("i",{className:"fas fa-pizza-slice"}),Object(x.jsx)("b",{children:" Pizza Party"})]}),Object(x.jsx)("img",{src:p,className:"img-fluid rounded mt-3 mb-5",alt:"chef cooking a pizza"})]}),Object(x.jsxs)("div",{className:"col-lg-6 col-12",children:[Object(x.jsx)("h1",{className:"text-muted mt-3 mb-5 text-center",children:"Let's double check everything"}),e.totalCheese?Object(x.jsxs)("div",{className:"m-3 mt-4",children:[Object(x.jsxs)("div",{className:"row",children:[Object(x.jsx)("div",{className:"col-8",children:Object(x.jsxs)("h2",{className:"text-start",children:["Cheese Pizza x ",e.totalCheese]})}),Object(x.jsx)("div",{className:"col-4",children:Object(x.jsxs)("h2",{className:"text-end",children:["$",9.99*e.totalCheese]})})]}),Object(x.jsxs)("div",{className:"row",children:[Object(x.jsxs)("div",{className:"input-group mb-4 col-xs-1 center-block mt-3 mb-5",children:[Object(x.jsx)("button",{className:"btn btn-secondary p-2",onClick:function(){return c("cheesePizzaCount")},children:"-"}),Object(x.jsx)("input",{type:"number",id:"cheesePizzaCount",name:"cheese-pizza",min:"1",max:"10",className:"text-center input-fields p-1",defaultValue:e.totalCheese}),Object(x.jsx)("button",{className:"btn btn-secondary me-1 p-2",onClick:function(){return s("cheesePizzaCount")},children:"+"}),Object(x.jsx)("button",{className:"btn btn-outline-primary ms-2",onClick:function(){return t("cheesePizzaCount")},children:"Update cart"}),Object(x.jsx)("button",{className:"btn btn-outline-danger ms-2",onClick:function(){return a("cheesePizzaCount")},children:"Remove"})]}),Object(x.jsx)("hr",{})]})]}):null,e.totalMeat?Object(x.jsxs)("div",{className:" m-3 mt-4",children:[Object(x.jsxs)("div",{className:"row",children:[Object(x.jsx)("div",{className:"col-8",children:Object(x.jsxs)("h2",{className:"text-start",children:["Meatlovers Pizza x ",e.totalMeat]})}),Object(x.jsx)("div",{className:"col-4",children:Object(x.jsxs)("h2",{className:"text-end",children:["$",14.99*e.totalMeat]})})]}),Object(x.jsxs)("div",{className:"row",children:[Object(x.jsxs)("div",{className:"input-group mb-4 col-xs-1 center-block mt-3 mb-5",children:[Object(x.jsx)("button",{className:"btn btn-secondary p-2",onClick:function(){return c("meatPizzaCount")},children:"-"}),Object(x.jsx)("input",{type:"number",id:"meatPizzaCount",name:"meat-pizza",min:"1",max:"10",className:"text-center input-fields p-1",defaultValue:e.totalMeat}),Object(x.jsx)("button",{className:"btn btn-secondary me-1 p-2",onClick:function(){return s("meatPizzaCount")},children:"+"}),Object(x.jsx)("button",{className:"btn btn-outline-primary ms-2",onClick:function(){return t("meatPizzaCount")},children:"Update cart"}),Object(x.jsx)("button",{className:"btn btn-outline-danger ms-2",onClick:function(){return a("meatPizzaCount")},children:"Remove"})]}),Object(x.jsx)("hr",{})]})]}):null,e.totalVeggie?Object(x.jsxs)("div",{className:" m-3 mt-4",children:[Object(x.jsxs)("div",{className:"row",children:[Object(x.jsx)("div",{className:"col-8",children:Object(x.jsxs)("h3",{className:"text-start",children:["Vegan Pizza x ",e.totalVeggie]})}),Object(x.jsx)("div",{className:"col-4",children:Object(x.jsxs)("h3",{className:"text-end",children:["$",12.99*e.totalVeggie]})})]}),Object(x.jsxs)("div",{className:"row",children:[Object(x.jsxs)("div",{className:"input-group mb-4 col-xs-1 center-block mt-3 mb-5",children:[Object(x.jsx)("button",{className:"btn btn-secondary p-2",onClick:function(){return c("VeggiePizzaCount")},children:"-"}),Object(x.jsx)("input",{type:"number",id:"VeggiePizzaCount",name:"meat-pizza",min:"1",max:"10",className:"text-center input-fields p-1",defaultValue:e.totalVeggie}),Object(x.jsx)("button",{className:"btn btn-secondary me-1 p-2",onClick:function(){return s("VeggiePizzaCount")},children:"+"}),Object(x.jsx)("button",{className:"btn btn-outline-primary ms-2",onClick:function(){return t("VeggiePizzaCount")},children:"Update cart"}),Object(x.jsx)("button",{className:"btn btn-outline-danger ms-2",onClick:function(){return a("VeggiePizzaCount")},children:"Remove"})]}),Object(x.jsx)("hr",{})]})]}):null,Object(x.jsx)("div",{className:" m-3 mt-3",children:Object(x.jsxs)("div",{className:"row",children:[Object(x.jsx)("div",{className:"col-8",children:Object(x.jsx)("h3",{className:"text-start",children:"Grand Total:"})}),Object(x.jsx)("div",{className:"col-4",children:Object(x.jsxs)("h3",{className:"text-end",children:["$",12.99*e.totalVeggie+14.99*e.totalMeat+9.99*e.totalCheese]})})]})}),Object(x.jsx)("div",{className:"row",children:Object(x.jsx)("div",{className:" text-center",children:Object(x.jsx)("div",{class:"d-grid gap-2",children:Object(x.jsx)(d.b,{to:"/party",className:"btn btn-success  mb-5  mt-2",children:Object(x.jsx)("h3",{className:"pt-1",children:"Checkout"})})})})})]})]})})})]})},v=function(e){var t=function(){e.SetCartActive(!0),e.SetHomeActive(!1)},a=function(){e.SetCartActive(!1),e.SetHomeActive(!0)};return Object(x.jsx)("nav",{className:"navbar sticky-top navbar-expand-lg navbar-light bg-light",children:Object(x.jsxs)("div",{className:"container-fluid",children:[Object(x.jsx)("span",{className:"navbar-brand p-2",children:Object(x.jsx)(d.b,{to:"/",className:"nav-links",onClick:a,children:Object(x.jsxs)("span",{className:"nav-links-icon",children:[Object(x.jsx)("i",{className:"fas fa-pizza-slice navbar-brand"})," Pizza Party"]})})}),Object(x.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(x.jsx)("span",{className:"navbar-toggler-icon"})}),Object(x.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarText",children:[Object(x.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(x.jsx)("li",{className:"nav-item",children:Object(x.jsx)(d.b,{to:"/",className:"nav-links",onClick:a,children:Object(x.jsx)("span",{className:e.HomeActive?"nav-link active":"nav-link",children:"Home"})})}),Object(x.jsx)("li",{className:"nav-item",children:Object(x.jsx)(d.b,{to:"/cart",className:"nav-links",onClick:t,children:Object(x.jsx)("span",{className:e.CartActive?"nav-link active":"nav-link",children:"Shopping Cart"})})})]}),Object(x.jsx)(d.b,{to:"/cart",className:"nav-links-icon",onClick:t,children:Object(x.jsx)("i",{className:"fas fa-shopping-cart me-4",style:{fontSize:"20px"},children:Object(x.jsx)("span",{className:"cart-number",children:e.totalItems>0?"(".concat(e.totalItems,")"):""})})})]})]})})},z=function(e){return Object(x.jsxs)("div",{className:"container-fluid",children:[Object(x.jsxs)("div",{className:"party-gif-container",children:[Object(x.jsx)("h1",{className:"alert alert-success text-center mt-3",children:"PARTY TIME!"}),Object(x.jsx)("iframe",{title:"party-gif",src:"https://giphy.com/embed/kHmVOy84g8G6my09fu",width:"100%",height:"100%",style:{position:"absolute"},frameBorder:"0",class:"giphy-embed",allowFullScreen:!0})]}),Object(x.jsx)("p",{className:"text-center",children:Object(x.jsx)("a",{href:"https://giphy.com/gifs/thefreshprinceofbelair-season-3-fresh-prince-of-bel-air-the-kHmVOy84g8G6my09fu",children:"via GIPHY"})})]})},f=function(){var e=Object(s.useState)(!0),t=Object(o.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)(!1),l=Object(o.a)(n,2),i=l[0],b=l[1],m=Object(s.useState)(0),u=Object(o.a)(m,2),h=u[0],p=u[1],g=Object(s.useState)(0),f=Object(o.a)(g,2),C=f[0],y=f[1],k=Object(s.useState)(0),P=Object(o.a)(k,2),V=P[0],S=P[1],w=Object(s.useState)(0),T=Object(o.a)(w,2),I=T[0],M=T[1];return Object(s.useEffect)((function(){p(C+V+I)}),[C,V,I]),Object(x.jsxs)(d.a,{children:[Object(x.jsx)(v,{HomeActive:a,SetHomeActive:c,CartActive:i,SetCartActive:b,totalItems:h,SetTotalItems:p}),Object(x.jsxs)(j.d,{children:[Object(x.jsx)(j.b,{exact:!0,path:"/",render:function(){return Object(x.jsx)(j.a,{to:"/home"})}}),Object(x.jsx)(j.b,{exact:!0,path:"/home",render:function(e){return Object(x.jsx)(O,Object(r.a)({totalItems:h,SetTotalItems:p,totalCheese:C,SetTotalCheese:y,totalMeat:V,SetTotalMeat:S,totalVeggie:I,SetTotalVeggie:M},e))}}),Object(x.jsx)(j.b,{exact:!0,path:"/cart",render:function(e){return Object(x.jsx)(N,Object(r.a)({totalItems:h,SetTotalItems:p,totalCheese:C,SetTotalCheese:y,totalMeat:V,SetTotalMeat:S,totalVeggie:I,SetTotalVeggie:M},e))}}),Object(x.jsx)(j.b,{exact:!0,path:"/party",render:function(e){return Object(x.jsx)(z,Object(r.a)({totalItems:h,SetTotalItems:p,totalCheese:C,SetTotalCheese:y,totalMeat:V,SetTotalMeat:S,totalVeggie:I,SetTotalVeggie:M},e))}})]})]})};l.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(f,{})}),document.getElementById("root")),i()}},[[32,1,2]]]);
//# sourceMappingURL=main.202b0373.chunk.js.map