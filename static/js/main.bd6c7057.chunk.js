(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{41:function(e,t,c){},42:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c.n(n),i=c(20),s=c.n(i),r=c(9),o=c(3),j=c(5),u=c(27),l=c(12),d=[{id:1,name:"Cherry Pie",price:11,amount:1,img:"./images/cherry.jpeg"},{id:2,name:"Apple Pie",price:15,amount:1,img:"./images/apple.jpeg"},{id:3,name:"Pumpkin Pie",price:18,amount:1,img:"./images/pumpkin.jpeg"},{id:4,name:"Nut Pie",price:10,amount:1,img:"./images/nut.jpeg"},{id:5,name:"Lime Pie",price:13,amount:1,img:"./images/lime.jpeg"},{id:6,name:"Banana Pie",price:6,amount:1,img:"./images/banana.jpeg"},{id:7,name:"Raspberry Pie",price:20,amount:1,img:"./images/raspberry.jpeg"},{id:8,name:"Kiwi Pie",price:5,amount:1,img:"./images/kiwi.jpeg"}],b=c(1),m=a.a.createContext(),h=function(e){var t=e.children,c=Object(n.useState)(d),a=Object(l.a)(c,2),i=a[0],s=a[1],r=Object(n.useState)([{id:1,name:"Cherry Pie",price:11,amount:1,img:"./images/cherry.jpeg"}]),o=Object(l.a)(r,2),h=o[0],O=o[1],p=Object(n.useState)(0),x=Object(l.a)(p,2),g=x[0],f=x[1],v=Object(n.useState)(0),N=Object(l.a)(v,2),k=N[0],C=N[1],y=Object(n.useState)(!1),P=Object(l.a)(y,2),w=P[0],A=P[1];Object(n.useEffect)((function(){h.reduce((function(e,t){return e.amount+=t.amount,e.total+=t.amount*t.price,f(e.amount),C(e.total),e}),{total:0,amount:0})}),[h]);var S=function(e){e.innerText="Added!",e.classList.add("green"),setTimeout((function(){e.innerText="Add to cart",e.classList.remove("green")}),2500)},_=function(){s(d)};return Object(b.jsx)(m.Provider,{value:{products:i,cart:h,addToCart:function(e,t){var c=h.find((function(t){return t.id===e.id}));O(c?h.map((function(t){if(t.id===e.id){var c=t.amount+e.amount;return Object(j.a)(Object(j.a)({},t),{},{amount:c})}return t})):[].concat(Object(u.a)(h),[e])),S(t),_()},removeFromCart:function(e){var t=h.filter((function(t){return t.id!==e}));O(t)},toggleAmount:function(e,t){A(!1),s(i.map((function(c){if(c.id===e){if("increase"===t){var n=c.amount+1;return Object(j.a)(Object(j.a)({},c),{},{amount:n})}if("decrease"===t){var a=c.amount-1;return a<=1?Object(j.a)(Object(j.a)({},c),{},{amount:1}):Object(j.a)(Object(j.a)({},c),{},{amount:a})}}return c})))},toggleAmountCart:function(e,t){O(h.map((function(c){if(c.id===e){if("increase"===t){var n=c.amount+1;return Object(j.a)(Object(j.a)({},c),{},{amount:n})}if("decrease"===t){var a=c.amount-1;return a<=1?Object(j.a)(Object(j.a)({},c),{},{amount:1}):Object(j.a)(Object(j.a)({},c),{},{amount:a})}}return c})))},checkout:w,openCheckout:function(){A(!0)},closeCheckout:function(){A(!1)},cartAmount:g,cartTotal:k},children:t})},O=function(){return Object(n.useContext)(m)},p=c(24),x=c(25),g=c(18),f=c(21),v=c(11),N=function(){var e=O(),t=e.cart,c=e.closeCheckout,n=e.removeFromCart,a=e.cartAmount,i=e.cartTotal,s=e.checkout,r=e.toggleAmountCart;return 0===t.length?Object(b.jsxs)("div",{className:"".concat(s?"checkout-container show-checkout":"checkout-container"),children:[Object(b.jsxs)("div",{className:"checkout-header",children:[Object(b.jsx)("h3",{children:"Cart"}),Object(b.jsx)("button",{type:"button",onClick:c,children:Object(b.jsx)(g.a,{})})]}),Object(b.jsx)("h1",{children:"Your cart is empty!"})]}):Object(b.jsxs)("div",{className:"".concat(s?"checkout-container show-checkout":"checkout-container"),children:[Object(b.jsxs)("div",{className:"checkout-header",children:[Object(b.jsx)("h3",{children:"CHECKOUT"}),Object(b.jsx)("button",{type:"button",onClick:c,children:Object(b.jsx)(g.a,{})})]}),Object(b.jsx)("div",{className:"checkout-product-list",children:t.map((function(e){var t=e.id,c=e.name,a=e.price,i=e.amount,s=e.img;return Object(b.jsxs)("div",{className:"checkout-product",children:[Object(b.jsxs)("div",{className:"checkout-left",children:[Object(b.jsxs)("div",{className:"product-quantity",children:[Object(b.jsx)("button",{type:"submit",onClick:function(){return r(t,"increase")},children:Object(b.jsx)(v.b,{})}),Object(b.jsxs)("p",{children:[Object(b.jsx)("span",{className:"yellow",children:" x"}),i]}),Object(b.jsx)("button",{type:"submit",onClick:function(){return r(t,"decrease")},children:Object(b.jsx)(v.a,{})})]}),Object(b.jsx)("div",{className:"img-checkout",children:Object(b.jsx)("img",{src:s,alt:c})}),Object(b.jsxs)("p",{children:[c," (",Object(b.jsxs)("span",{className:"blue",children:["$",a]}),")"," "]})]}),Object(b.jsx)("button",{type:"submit",onClick:function(){return n(t)},children:Object(b.jsx)(f.a,{})})]},t)}))}),Object(b.jsxs)("h4",{children:["Subtotal:",Object(b.jsxs)("span",{className:"blue",children:[" $",i]})]}),Object(b.jsxs)("h5",{children:["(",a," items)"]}),Object(b.jsx)("button",{className:"btn checkout-button",children:"Proceed to Checout"})]})},k=function(){var e=O(),t=e.openCheckout,c=e.cartAmount,n=e.closeCheckout;return Object(b.jsxs)("div",{className:"container-center header-container",children:[Object(b.jsx)("h1",{className:"logo",children:Object(b.jsxs)(r.b,{to:"/",children:["Happy Pie ",Object(b.jsx)(p.a,{className:"logo-icon"})]})}),Object(b.jsxs)("div",{className:"navigation",children:[Object(b.jsx)("nav",{children:Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsx)(r.b,{to:"/",className:"nav-link",onClick:n,children:"home"})}),Object(b.jsx)("li",{children:Object(b.jsx)(r.b,{to:"/Shop",className:"nav-link",onClick:n,children:"Shop"})})]})}),Object(b.jsx)("div",{className:"shopping-cart",children:Object(b.jsxs)("button",{type:"button",className:"cart-button btn",onClick:t,children:[Object(b.jsx)(x.a,{className:"cart-icon"})," (",c,")"]})})]}),Object(b.jsx)(N,{})]})},C=c(26),y=function(){return Object(b.jsxs)("section",{className:"container-center home-container",children:[Object(b.jsx)("h2",{children:"Our Winter selection is here!"}),Object(b.jsx)("img",{src:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-holiday-pie-board-1637082047.jpg?crop=0.820xw:0.804xh;0.105xw,0.0891xh&resize=980:*",alt:"winter pies"}),Object(b.jsxs)(r.b,{to:"/shop",className:"btn shop-btn",children:["Shop Now ",Object(b.jsx)(C.a,{className:"shop-btn-icon"})]})]})},P=function(e){var t=e.product,c=t.id,n=t.name,a=t.price,i=t.amount,s=t.img,r=O(),o=r.toggleAmount,j=r.addToCart;return Object(b.jsx)("article",{className:"product-card",children:Object(b.jsxs)("div",{className:"images-container",children:[Object(b.jsx)("img",{src:s,alt:"pie"}),Object(b.jsxs)("div",{className:"product-card__infos",children:[Object(b.jsxs)("div",{className:"product-card__infos-header",children:[Object(b.jsx)("h4",{className:"product-card__infos-name",children:n}),Object(b.jsxs)("div",{className:"product-quantity",children:[Object(b.jsx)("button",{type:"submit",onClick:function(){return o(c,"decrease")},children:Object(b.jsx)(v.a,{})}),Object(b.jsx)("p",{children:i}),Object(b.jsx)("button",{type:"submit",onClick:function(){return o(c,"increase")},children:Object(b.jsx)(v.b,{})})]})]}),Object(b.jsxs)("div",{className:"product-cart__infos-footer",children:[Object(b.jsxs)("p",{className:"product-card__infos-price",children:[Object(b.jsx)("span",{className:"dollar",children:"$"}),a]}),Object(b.jsx)("button",{className:"btn",onClick:function(e){return j(t,e.target)},children:"Add to cart"})]})]})]})})},w=function(){var e=O().products;return Object(b.jsxs)("section",{className:"shop-container",children:[Object(b.jsx)("h2",{children:"Our delicious pies!"}),Object(b.jsx)("div",{className:"product-container",children:e.map((function(e){return Object(b.jsx)(P,{product:e},e.id)}))}),Object(b.jsx)(N,{})]})},A=function(){return Object(b.jsx)("div",{className:"shopping-container container-center",children:Object(b.jsx)(w,{})})};var S=function(){return Object(b.jsxs)(r.a,{children:[Object(b.jsx)(k,{}),Object(b.jsxs)(o.c,{children:[Object(b.jsx)(o.a,{exact:!0,path:"/",children:Object(b.jsx)(y,{})}),Object(b.jsx)(o.a,{exact:!0,path:"/shop",children:Object(b.jsx)(A,{})})]})]})};c(41);s.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(h,{children:Object(b.jsx)(S,{})})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.bd6c7057.chunk.js.map