(this.webpackJsonpairbnb=this.webpackJsonpairbnb||[]).push([[0],{64:function(e,t,i){},65:function(e,t,i){},66:function(e,t,i){},67:function(e,t,i){},68:function(e,t,i){},94:function(e,t,i){},95:function(e,t,i){},96:function(e,t,i){},97:function(e,t,i){},98:function(e,t,i){},99:function(e,t,i){"use strict";i.r(t);var n=i(0),c=i.n(n),s=i(23),a=i.n(s),r=(i(64),i(65),i(66),i(30)),o=(i(67),i(114)),d=i(5),j=(i(68),i(69),i(70),i(47)),h=i(49),l=i.n(h),b=i(1);var p=function(){var e=Object(d.f)(),t=Object(n.useState)(new Date),i=Object(r.a)(t,2),c=i[0],s=i[1],a=Object(n.useState)(new Date),h=Object(r.a)(a,2),p=h[0],m=h[1],u={startDate:c,endDate:p,key:"selection"};return Object(b.jsxs)("div",{className:"search",children:[Object(b.jsx)(j.DateRangePicker,{ranges:[u],onChange:function(e){s(e.selection.startDate),m(e.selection.endDate)}}),Object(b.jsxs)("h2",{children:["Number of guests ",Object(b.jsx)(l.a,{})]}),Object(b.jsx)("input",{min:0,defaultValue:2,type:"number"}),Object(b.jsx)(o.a,{onClick:function(){return e.push("/search")},children:"Search Airbnb"})]})};var m=function(){var e=Object(d.f)(),t=Object(n.useState)(!1),i=Object(r.a)(t,2),c=i[0],s=i[1];return Object(b.jsxs)("div",{className:"banner",children:[Object(b.jsxs)("div",{className:"banner__search",children:[c&&Object(b.jsx)(p,{}),Object(b.jsx)(o.a,{onClick:function(){return s(!c)},className:"banner__searchButton",variant:"outlined",children:c?"hide":"SearchDates"})]}),Object(b.jsxs)("div",{className:"banner__info",children:[Object(b.jsx)("h1",{children:"Get out and stretch your imagination"}),Object(b.jsx)("h5",{children:"Plan a different kind of getaway to uncover the hidden gems near you."}),Object(b.jsx)(o.a,{onClick:function(){return e.push("./search")},variant:"outlined",children:"Explore Nearby"})]})]})};i(94);var u=function(e){var t=e.src,i=e.title,n=e.description,c=e.price;return Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)("img",{src:t,alt:""}),Object(b.jsxs)("div",{className:"card__info",children:[Object(b.jsx)("h2",{children:i}),Object(b.jsx)("h4",{children:n}),Object(b.jsx)("h3",{children:c})]})]})};var x=function(){return Object(b.jsxs)("div",{className:"home",children:[Object(b.jsx)(m,{}),Object(b.jsxs)("div",{className:"home__section",children:[Object(b.jsx)(u,{src:"https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720",title:"Online Experiences",description:"Unique activities we can do together, led by a world of hosts."}),Object(b.jsx)(u,{src:"https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720",title:"Unique stays",description:"Spaces that are more than just a place to sleep."}),Object(b.jsx)(u,{src:"https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720",title:"Entire homes",description:"Comfortable private places, with room for friends or family."})]}),Object(b.jsxs)("div",{className:"home__section",children:[Object(b.jsx)(u,{src:"https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg",title:"3 Bedroom Flat in Bournemouth",description:"Superhost with a stunning view of the beachside in Sunny Bournemouth",price:"\xa3130/night"}),Object(b.jsx)(u,{src:"https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg",title:"Penthouse in London",description:"Enjoy the amazing sights of London with this stunning penthouse",price:"\xa3350/night"}),Object(b.jsx)(u,{src:"https://media.nomadicmatt.com/2018/apartment.jpg",title:"1 Bedroom apartment",description:"Superhost with great amenities and a fabolous shopping complex nearby",price:"\xa370/night"})]})]})},O=(i(95),i(53)),g=i.n(O),f=i(54),v=i.n(f),_=i(55),w=i.n(_),y=i(115),N=i(22);var P=function(){return Object(b.jsxs)("div",{className:"header",children:[Object(b.jsx)(N.b,{to:"/",children:Object(b.jsx)("img",{className:"header__icon",src:"https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png",alt:"airbnb logo"})}),Object(b.jsxs)("div",{className:"header__center",children:[Object(b.jsx)("input",{type:"text"}),Object(b.jsx)(g.a,{})]}),Object(b.jsxs)("div",{className:"header__right",children:[Object(b.jsx)("p",{children:"Become a host"}),Object(b.jsx)(v.a,{}),Object(b.jsx)(w.a,{}),Object(b.jsx)(y.a,{})]})]})};i(96);var F=function(){return Object(b.jsxs)("div",{className:"footer",children:[Object(b.jsx)("p",{children:"\xa9 2020 Airbnb clone! No rights reserved - this is a demo!"}),Object(b.jsx)("p",{children:"Privacy \xb7 Terms \xb7 Sitemap \xb7 Company Details"})]})},S=(i(97),i(98),i(56)),k=i.n(S),L=i(57),C=i.n(L);var A=function(e){var t=e.img,i=e.location,n=e.title,c=e.description,s=e.star,a=e.price,r=e.total;return Object(b.jsxs)("div",{className:"searchResult",children:[Object(b.jsx)("img",{src:t,alt:""}),Object(b.jsx)(k.a,{className:"searchResult__heart"}),Object(b.jsxs)("div",{className:"searchResult__info",children:[Object(b.jsxs)("div",{className:"searchResult__infoTop",children:[Object(b.jsx)("p",{children:i}),Object(b.jsx)("h3",{children:n}),Object(b.jsx)("p",{children:"___"}),Object(b.jsx)("p",{children:c})]}),Object(b.jsxs)("div",{className:"searchResult__infoBottom",children:[Object(b.jsxs)("div",{className:"searchResult__starts",children:[Object(b.jsx)(C.a,{className:"searchResult__star"}),Object(b.jsx)("p",{children:Object(b.jsx)("strong",{children:s})})]}),Object(b.jsxs)("div",{className:"searchResults__price",children:[Object(b.jsx)("h2",{children:a}),Object(b.jsx)("p",{children:r})]})]})]})]})};var B=function(){return Object(b.jsxs)("div",{className:"searchPage",children:[Object(b.jsxs)("div",{className:"searchPage__info",children:[Object(b.jsx)("p",{children:"62 stays \xb7 26 august to 30 august \xb7 2 guest"}),Object(b.jsx)("h1",{children:"Stays nearby"}),Object(b.jsx)(o.a,{variant:"outlined",children:"Cancellation Flexibility"}),Object(b.jsx)(o.a,{variant:"outlined",children:"Type of place"}),Object(b.jsx)(o.a,{variant:"outlined",children:"Price"}),Object(b.jsx)(o.a,{variant:"outlined",children:"Rooms and beds"}),Object(b.jsx)(o.a,{variant:"outlined",children:"More filters"})]}),Object(b.jsx)(A,{img:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU",location:"Private room in center of London",title:"Stay at this spacious Edwardian House",description:"1 guest \xb7 1 bedroom \xb7 1 bed \xb7 1.5 shared bthrooms \xb7 Wifi \xb7 Kitchen \xb7 Free parking \xb7 Washing Machine",star:4.73,price:"\xa330 / night",total:"\xa3117 total"}),Object(b.jsx)(A,{img:"https://www.expatkings.com/wp-content/uploads/2018/10/Airbnb-rental-tips.-Hostmaker-1-620x349.jpg",location:"Private room in center of London",title:"Independant luxury studio apartment",description:"2 guest \xb7 3 bedroom \xb7 1 bed \xb7 1.5 shared bthrooms \xb7 Wifi \xb7 Kitchen",star:4.3,price:"\xa340 / night",total:"\xa3157 total"}),Object(b.jsx)(A,{img:"https://www.smartertravel.com/uploads/2017/07/Untitled-design-8.jpg",location:"Private room in center of London",title:"London Studio Apartments",description:"4 guest \xb7 4 bedroom \xb7 4 bed \xb7 2 bathrooms \xb7 Free parking \xb7 Washing Machine",star:3.8,price:"\xa335 / night",total:"\xa3207 total"}),Object(b.jsx)(A,{img:"https://cdn.bisnow.net/fit?height=489&type=jpeg&url=https%3A%2F%2Fs3.amazonaws.com%2Fcdn.bisnow.net%2Fcontent%2Fimages%2F2017%2F05%2F59151d0978bbf_https_press_atairbnb_com_app_uploads_2016_12_midtown_4.jpeg&width=717&sign=FeltIPi9cOWA36nVIeDvZxwgtiCZrpUyMRdvyZviTUI",location:"Private room in center of London",title:"30 mins to Oxford Street, Excel London",description:"1 guest \xb7 1 bedroom \xb7 1 bed \xb7 1.5 shared bthrooms \xb7 Wifi \xb7 Kitchen \xb7 Free parking \xb7 Washing Machine",star:4.1,price:"\xa355 / night",total:"\xa3320 total"}),Object(b.jsx)(A,{img:"https://media.cntraveler.com/photos/5a8f258bd363c34048b35aac/master/w_2250,h_1500,c_limit/airbnb-plus-london.jpg",location:"Private room in center of London",title:"Spacious Peaceful Modern Bedroom",description:"3 guest \xb7 1 bedroom \xb7 1 bed \xb7 1.5 shared bthrooms \xb7 Wifi \xb7 Free parking \xb7 Dry Cleaning",star:5,price:"\xa360 / night",total:"\xa3450 total"}),Object(b.jsx)(A,{img:"https://static.trip101.com/paragraph_media/pictures/001/676/061/large/969ae4bb-efd1-4fb9-a4e3-5cb3316dd3c9.jpg?1562227937",location:"Private room in center of London",title:"The Blue Room In London",description:"2 guest \xb7 1 bedroom \xb7 1 bed \xb7 1.5 shared bthrooms \xb7 Wifi \xb7 Washing Machine",star:4.23,price:"\xa365 / night",total:"\xa3480 total"}),Object(b.jsx)(A,{img:"https://image.insider.com/585029a0dd0895bc548b4b8b?width=750&format=jpeg&auto=webp",location:"Private room in center of London",title:"5 Star Luxury Apartment",description:"3 guest \xb7 1 bedroom \xb7 1 bed \xb7 1.5 shared bthrooms \xb7 Wifi \xb7 Kitchen \xb7 Free parking \xb7 Washing Machine",star:3.85,price:"\xa390 / night",total:"\xa3650 total"})]})};var D=function(){return Object(b.jsx)("div",{className:"app",children:Object(b.jsxs)(N.a,{children:[Object(b.jsx)(P,{}),Object(b.jsxs)(d.c,{children:[Object(b.jsx)(d.a,{path:"/search",children:Object(b.jsx)(B,{})}),Object(b.jsx)(d.a,{path:"/",children:Object(b.jsx)(x,{})})]}),Object(b.jsx)(F,{})]})})},R=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,116)).then((function(t){var i=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;i(e),n(e),c(e),s(e),a(e)}))};a.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(D,{})}),document.getElementById("root")),R()}},[[99,1,2]]]);
//# sourceMappingURL=main.abf79bc9.chunk.js.map