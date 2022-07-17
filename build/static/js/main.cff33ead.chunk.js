(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),s=n(1),c=n.n(s),a=n(6),i=n.n(a),o=n(2),u=n.n(o),j=n(4),l=n(3),b=(n(13),function(e){var t=Object(s.useState)("showers-baths"),n=Object(l.a)(t,2),c=n[0],a=n[1];Object(s.useEffect)((function(){e.search(c)}),[]);var i=function(){var t=Object(j.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.search(c);case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(r.jsxs)("div",{className:"previousjobs",children:[Object(r.jsx)("h2",{children:"Previous Work:"}),Object(r.jsx)("p",{children:"Search our previous jobs below:"}),Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{htmlFor:"type",children:"Type:"}),Object(r.jsxs)("select",{id:"type",name:"type",onChange:function(e){a(e.target.value)},children:[Object(r.jsxs)("optgroup",{label:"Plumbing",children:[Object(r.jsx)("option",{value:"showers-baths",children:"Showers & Baths"}),Object(r.jsx)("option",{value:"toilets",children:"Toilets"}),Object(r.jsx)("option",{value:"radiators",children:"Radiators"})]}),Object(r.jsxs)("optgroup",{label:"Electrics",children:[Object(r.jsx)("option",{value:"lighting",children:"Lighting"}),Object(r.jsx)("option",{value:"fuse-box",children:"Fuse Box"}),Object(r.jsx)("option",{value:"ev-charger",children:"EV Charger"})]}),Object(r.jsxs)("optgroup",{label:"Building & Roof",children:[Object(r.jsx)("option",{value:"paving",children:"Paving"}),Object(r.jsx)("option",{value:"flooring",children:"Flooring"}),Object(r.jsx)("option",{value:"roof",children:"Roof"})]}),Object(r.jsxs)("optgroup",{label:"Painting & Decorating",children:[Object(r.jsx)("option",{value:"painting",children:"Painting"}),Object(r.jsx)("option",{value:"wallpaper",children:"Wallpapering"}),Object(r.jsx)("option",{value:"exterior-painting",children:"Exterior Painting"})]})]})]}),Object(r.jsx)("button",{type:"submit",value:"Search",onClick:i,children:"Search"})]})}),h=(n(14),function(e){return Object(r.jsx)("div",{className:"jobssearchresults",children:e.previousJobs&&Object(r.jsxs)("div",{className:"jobssearchresult",children:[Object(r.jsx)("img",{src:e.previousJobs.image,alt:e.previousJobs.name}),Object(r.jsx)("h3",{children:e.previousJobs.name}),Object(r.jsx)("p",{children:e.previousJobs.description})]})})}),p="http://localhost:9000",d=function(){var e=Object(j.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(p,"/reviews"));case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(j.a)(u.a.mark((function e(t,n,r,s,c){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(p,"/reviews"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:t,review:n,stars:r,firstname:s,surname:c})});case 2:e.sent;case 3:case"end":return e.stop()}}),e)})));return function(t,n,r,s,c){return e.apply(this,arguments)}}(),x=(n(15),function(e){var t=Object(s.useState)(""),n=Object(l.a)(t,2),c=n[0],a=n[1],i=Object(s.useState)(""),o=Object(l.a)(i,2),u=o[0],j=o[1],b=Object(s.useState)(""),h=Object(l.a)(b,2),p=h[0],x=h[1],v=Object(s.useState)(""),f=Object(l.a)(v,2),m=f[0],g=f[1],w=Object(s.useState)(""),y=Object(l.a)(w,2),S=y[0],N=y[1];return Object(r.jsxs)("div",{className:"reviewform",children:[Object(r.jsx)("h2",{children:"Leave a Review:"}),Object(r.jsxs)("form",{onSubmit:function(t){t.preventDefault(),O(u,c,S,p,m),d().then((function(t){return e.setReviews(t)}))},children:[Object(r.jsx)("label",{htmlFor:"review",children:"Review:"}),Object(r.jsx)("textarea",{id:"review",name:"review",required:!0,onChange:function(e){a(e.target.value)}}),Object(r.jsx)("br",{}),Object(r.jsx)("label",{htmlFor:"title",children:"Review Title:"}),Object(r.jsx)("input",{type:"text",id:"title",name:"title",required:!0,onChange:function(e){j(e.target.value)}}),Object(r.jsx)("br",{}),Object(r.jsx)("label",{htmlFor:"firstname",children:"First Name:"}),Object(r.jsx)("input",{type:"text",id:"firstname",name:"firstname",required:!0,onChange:function(e){x(e.target.value)}}),Object(r.jsx)("br",{}),Object(r.jsx)("label",{htmlFor:"surname",children:"Surname:"}),Object(r.jsx)("input",{type:"text",id:"surname",name:"surname",required:!0,onChange:function(e){g(e.target.value)}}),Object(r.jsx)("br",{}),Object(r.jsx)("label",{htmlFor:"stars",children:"Stars:"}),Object(r.jsx)("input",{type:"number",min:"1",max:"5",id:"stars",required:!0,name:"stars",onChange:function(e){N(e.target.value)}}),Object(r.jsx)("input",{type:"submit"})]})]})}),v=(n(16),function(){var e=Object(s.useState)(""),t=Object(l.a)(e,2),n=t[0],c=t[1];Object(s.useEffect)((function(){d().then((function(e){return c(e)}))}),[]);var a=function(e){for(var t=[],n=0;n<e;n++)t.push(Object(r.jsx)("span",{children:"\u2605"},n));for(var s=0;s<5-e;s++)t.push(Object(r.jsx)("span",{children:"\u2606"},5-s));return t};return Object(r.jsxs)("div",{className:"reviews-section",children:[Object(r.jsx)("h2",{className:"reviews-header",children:"Reviews:"}),Object(r.jsx)("div",{className:"reviews",children:n&&n.map((function(e,t){return Object(r.jsxs)("div",{className:"review",children:[Object(r.jsx)("h3",{children:e.title}),Object(r.jsx)("p",{children:e.review}),Object(r.jsxs)("h4",{children:[e.firstname," ",e.surname]}),a(e.stars)]},t)}))}),Object(r.jsx)(x,{setReviews:c})]})}),f=function(){var e=Object(j.a)(u.a.mark((function e(t){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(p,"/previousjobs?type=").concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();n(17);var m=function(){var e=Object(s.useState)(""),t=Object(l.a)(e,2),n=t[0],c=t[1],a=function(){var e=Object(j.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f(t).then((function(e){c(e.data)}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("link",{href:"https://fonts.googleapis.com/css?family=Catamaran:600|Merriweather+Sans:300&display=swap",rel:"stylesheet"}),Object(r.jsx)("h1",{children:"WPM"}),Object(r.jsx)("h2",{className:"wpm",children:"Wellsbury Property Maintenance"}),Object(r.jsxs)("div",{className:"about",children:[Object(r.jsx)("p",{className:"about-text",children:"WPM is the leading property maintenance contractor in the Wellsbury area and having been established for over 40 years, we have expertise in a range of different areas. No job is tool small or too big, just call our office and our team will be happy to guide you through the process from the initial free quote up to completion."}),Object(r.jsx)("img",{className:"workmen-img",alt:"workmen figurines",src:"https://cdn.pixabay.com/photo/2018/01/20/08/01/craftsmen-3094035__340.jpg"})]}),Object(r.jsx)(b,{search:a}),Object(r.jsx)(h,{previousJobs:n}),Object(r.jsx)(v,{}),Object(r.jsx)("footer",{children:"Charles Davis Web Development 2022"})]})};n(18);i.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(m,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.cff33ead.chunk.js.map