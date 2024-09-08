import{j as e}from"./jsx-runtime-10203bc8.js";import{r as j}from"./index-f067c1d3.js";const J={saveToStorage:G,loadFromStorage:V,makeId:H,makeLorem:K,getRandomIntInclusive:Q,debounce:W,formDate:X};function G(a,s){localStorage.setItem(a,JSON.stringify(s))}function V(a){const s=localStorage.getItem(a);return s?JSON.parse(s):void 0}function H(a=6){let s="";const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(let r=0;r<a;r++)s+=t.charAt(Math.floor(Math.random()*t.length));return s}function K(a=100){const s=["The sky","above","the port","was","the color of television","tuned","to","a dead channel",".","All","this happened","more or less",".","I","had","the story","bit by bit","from various people","and","as generally","happens","in such cases","each time","it","was","a different story",".","It","was","a pleasure","to","burn"];let t="";for(;a>0;)a--,t+=s[Math.floor(Math.random()*s.length)]+" ";return t.trim()}function Q(a,s){return a=Math.ceil(a),s=Math.floor(s),Math.floor(Math.random()*(s-a+1))+a}function W(a,s=300){let t;return(...r)=>{clearTimeout(t),t=setTimeout(()=>{a.apply(this,r)},s)}}function X(a){const s=new Date,t=new Date(a),r=s.getTime()-t.getTime(),i=Math.floor(r/1e3),o=Math.floor(i/60),m=Math.floor(o/60),d=Math.floor(m/24),f=Math.floor(d/365);return f>0?`${f}y`:d>0?`${d}d`:m>0?`${m}h`:o>0?`${o}m`:`${i}s`}const Y=""+new URL("like-green-c0d65ee7.svg",import.meta.url).href,ee=""+new URL("like-blue-57aabbc2.svg",import.meta.url).href,ae=""+new URL("like-f7d9781f.svg",import.meta.url).href,se=""+new URL("comment-9f0bda65.svg",import.meta.url).href;function D({feed:a,isLastFeed:s,getFeeds:t,onViewsFeed:r,saveFeed:i}){const{id:o,userId:m,username:d,avatar:f,shopName:E,shopId:te,images:k,comments:O,date:P,text:A,likes:y,didLike:l,premium:re}=a,c=j.useRef(null),v=j.useRef(null);j.useEffect(()=>(c.current&&c.current.disconnect(),c.current=new IntersectionObserver(n=>{n[0].isIntersecting&&(s&&t(),r(o))}),v.current&&c.current.observe(v.current),()=>{c.current&&c.current.disconnect()}));async function B(){const n=y+(l?-1:1),u={...a,likes:n,didLike:!l};i(u)}function I(n){n.target.classList.remove("loading")}return e.jsxs("article",{className:"feed-preview",ref:v,children:[e.jsxs("article",{className:"user-details flex align-center gap12",children:[e.jsx("img",{className:"profile-img loading",src:f,onLoad:I}),e.jsxs("div",{className:"",children:[e.jsx("p",{className:"user-name",children:d}),e.jsxs("p",{className:"shop-name flex align-center gap5",children:[E,e.jsx("span",{className:"date",children:"·"}),e.jsx("span",{className:"date",children:J.formDate(P)})]})]})]}),e.jsx("p",{className:"main-text",children:A}),e.jsx("article",{className:"images flex align-center justify-center",children:Array.from({length:k.length>1?2:1}).map((n,u)=>e.jsx("img",{className:"loading",src:k[u],onLoad:I},u))}),e.jsxs("article",{className:"like-comments-details flex space-between align-center",children:[e.jsxs("div",{className:"like flex align-center",children:[e.jsx("img",{className:"icon",src:Y}),e.jsx("p",{children:y}),e.jsx("p",{children:"Likes"})]}),e.jsxs("div",{className:"comments flex align-center",children:[e.jsx("p",{children:O}),e.jsx("p",{children:"Comments"})]})]}),e.jsxs("article",{className:"like-comments-btn",children:[e.jsxs("div",{onClick:B,className:`like-btn flex align-center justify-center ${l?"active":""}`,children:[e.jsx("img",{className:"icon",src:l?ee:ae}),e.jsx("p",{children:"Like"})]}),e.jsxs("div",{className:"comments-btn flex align-center justify-center",children:[e.jsx("img",{className:"icon",src:se}),e.jsx("p",{children:"Comments"})]})]})]})}D.__docgenInfo={description:"",methods:[],displayName:"FeedPreview",props:{feed:{required:!0,tsType:{name:"Feed"},description:""},isLastFeed:{required:!0,tsType:{name:"boolean"},description:""},getFeeds:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onViewsFeed:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},saveFeed:{required:!0,tsType:{name:"signature",type:"function",raw:"(feed: Feed) => void",signature:{arguments:[{type:{name:"Feed"},name:"feed"}],return:{name:"void"}}},description:""}}};const oe={title:"Feed Preview",component:D},b={args:{feed:{id:"6318751da037be08c3b94046",userId:"6282267febfcb07f771359c7",username:"craftyfun",avatar:"https://images.tedooo.com/biz/6282267febfcb07f771359c7/5173eadb-0c97-4850-8892-9df4c442c238.jpg",shopName:"Crafts ideas",shopId:"628227cdebfcb07f771359ce",images:["https://images.tedooo.com/biz/6282267febfcb07f771359c7/d2b86a82-a665-4759-b832-d48f292e2c0b.jpg"],comments:263,date:"2022-09-06T14:40:29.347Z",text:"Upload the last 3 pictures of handmade items you’ve made or bought!",likes:2142,didLike:!1,premium:!0}}},p={args:{feed:{id:"6318751da037be08c3b94046",userId:"6282267febfcb07f771359c7",username:"craftyfun",avatar:"https://images.tedooo.com/biz/6282267febfcb07f771359c7/5173eadb-0c97-4850-8892-9df4c442c238.jpg",shopName:"Crafts ideas",shopId:"628227cdebfcb07f771359ce",images:["https://images.tedooo.com/biz/6282267febfcb07f771359c7/d2b86a82-a665-4759-b832-d48f292e2c0b.jpg"],comments:263,date:"2022-09-06T14:40:29.347Z",text:"Upload the last 3 pictures of handmade items you’ve made or bought!",likes:2142,didLike:!0,premium:!0}}},g={args:{feed:{id:"6318751da037be08c3b94046",userId:"6282267febfcb07f771359c7",username:"craftyfun",avatar:"https://images.tedooo.com/biz/6282267febfcb07f771359c7/5173eadb-0c97-4850-8892-9df4c442c238.jpg",shopName:"Crafts ideas",shopId:"628227cdebfcb07f771359ce",images:["https://images.tedooo.com/biz/631762c2a2967db5fdc89596/60e88bbd-1a16-46df-861d-99dbf3076230.jpg","https://images.tedooo.com/biz/631762c2a2967db5fdc89596/be5ea7dc-69cc-451e-b641-be09e6d0c3cd.jpg"],comments:263,date:"2022-09-06T14:40:29.347Z",text:"Upload the last 3 pictures of handmade items you’ve made or bought!",likes:2142,didLike:!1,premium:!0}}},h={args:{feed:{id:"6318751da037be08c3b94046",userId:"6282267febfcb07f771359c7",username:"craftyfun",avatar:"",shopName:"Crafts ideas",shopId:"628227cdebfcb07f771359ce",images:["."],comments:263,date:"2022-09-06T14:40:29.347Z",text:"Unable to load feed due to no internet connection.",likes:2142,didLike:!1,premium:!0}}},x={args:{feed:{id:"6318751da037be08c3b94046",userId:"6282267febfcb07f771359c7",username:"craftyfun",avatar:"",shopName:"Crafts ideas",shopId:"628227cdebfcb07f771359ce",images:[".","."],comments:263,date:"2022-09-06T14:40:29.347Z",text:"Unable to load feed due to no internet connection.",likes:2142,didLike:!1,premium:!0}}};var N,L,w;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    feed: {
      id: "6318751da037be08c3b94046",
      userId: "6282267febfcb07f771359c7",
      username: "craftyfun",
      avatar: "https://images.tedooo.com/biz/6282267febfcb07f771359c7/5173eadb-0c97-4850-8892-9df4c442c238.jpg",
      shopName: "Crafts ideas",
      shopId: "628227cdebfcb07f771359ce",
      images: ["https://images.tedooo.com/biz/6282267febfcb07f771359c7/d2b86a82-a665-4759-b832-d48f292e2c0b.jpg"],
      comments: 263,
      date: "2022-09-06T14:40:29.347Z",
      text: "Upload the last 3 pictures of handmade items you’ve made or bought!",
      likes: 2142,
      didLike: false,
      premium: true
    }
  }
}`,...(w=(L=b.parameters)==null?void 0:L.docs)==null?void 0:w.source}}};var T,F,U;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    feed: {
      id: "6318751da037be08c3b94046",
      userId: "6282267febfcb07f771359c7",
      username: "craftyfun",
      avatar: "https://images.tedooo.com/biz/6282267febfcb07f771359c7/5173eadb-0c97-4850-8892-9df4c442c238.jpg",
      shopName: "Crafts ideas",
      shopId: "628227cdebfcb07f771359ce",
      images: ["https://images.tedooo.com/biz/6282267febfcb07f771359c7/d2b86a82-a665-4759-b832-d48f292e2c0b.jpg"],
      comments: 263,
      date: "2022-09-06T14:40:29.347Z",
      text: "Upload the last 3 pictures of handmade items you’ve made or bought!",
      likes: 2142,
      didLike: true,
      premium: true
    }
  }
}`,...(U=(F=p.parameters)==null?void 0:F.docs)==null?void 0:U.source}}};var z,C,M;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    feed: {
      id: "6318751da037be08c3b94046",
      userId: "6282267febfcb07f771359c7",
      username: "craftyfun",
      avatar: "https://images.tedooo.com/biz/6282267febfcb07f771359c7/5173eadb-0c97-4850-8892-9df4c442c238.jpg",
      shopName: "Crafts ideas",
      shopId: "628227cdebfcb07f771359ce",
      images: ["https://images.tedooo.com/biz/631762c2a2967db5fdc89596/60e88bbd-1a16-46df-861d-99dbf3076230.jpg", "https://images.tedooo.com/biz/631762c2a2967db5fdc89596/be5ea7dc-69cc-451e-b641-be09e6d0c3cd.jpg"],
      comments: 263,
      date: "2022-09-06T14:40:29.347Z",
      text: "Upload the last 3 pictures of handmade items you’ve made or bought!",
      likes: 2142,
      didLike: false,
      premium: true
    }
  }
}`,...(M=(C=g.parameters)==null?void 0:C.docs)==null?void 0:M.source}}};var S,R,Z;h.parameters={...h.parameters,docs:{...(S=h.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    feed: {
      id: "6318751da037be08c3b94046",
      userId: "6282267febfcb07f771359c7",
      username: "craftyfun",
      avatar: "",
      shopName: "Crafts ideas",
      shopId: "628227cdebfcb07f771359ce",
      images: ['.'],
      comments: 263,
      date: "2022-09-06T14:40:29.347Z",
      text: "Unable to load feed due to no internet connection.",
      likes: 2142,
      didLike: false,
      premium: true
    }
  }
}`,...(Z=(R=h.parameters)==null?void 0:R.docs)==null?void 0:Z.source}}};var q,_,$;x.parameters={...x.parameters,docs:{...(q=x.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    feed: {
      id: "6318751da037be08c3b94046",
      userId: "6282267febfcb07f771359c7",
      username: "craftyfun",
      avatar: "",
      shopName: "Crafts ideas",
      shopId: "628227cdebfcb07f771359ce",
      images: ['.', '.'],
      comments: 263,
      date: "2022-09-06T14:40:29.347Z",
      text: "Unable to load feed due to no internet connection.",
      likes: 2142,
      didLike: false,
      premium: true
    }
  }
}`,...($=(_=x.parameters)==null?void 0:_.docs)==null?void 0:$.source}}};const de=["Base","Like","TwoImages","LoadingFeed","LoadingFeedTwoImages"];export{b as Base,p as Like,h as LoadingFeed,x as LoadingFeedTwoImages,g as TwoImages,de as __namedExportsOrder,oe as default};
