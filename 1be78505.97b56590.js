(window.webpackJsonp=window.webpackJsonp||[]).push([[15,113],{164:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(168),i=a(169),r=a(23),o=a(174),s=a(2),u=a(7),m=a(172),d=a(190),b=a(195),f=a(196),v=a(197),h=a(194),p=a(170),k=a(173),E=a(65),O=a.n(E);var g=function e(t,a){return"link"===t.type?(n=t.href,l=a,(c=function(e){return e.endsWith("/")?e:e+"/"})(n)===c(l)):"category"===t.type&&t.items.some((function(t){return e(t,a)}));var n,l,c};function j(e){var t,a,c,i=e.item,r=e.onItemClick,o=e.collapsible,d=e.activePath,b=Object(u.a)(e,["item","onItemClick","collapsible","activePath"]),f=i.items,v=i.label,h=g(i,d),p=(a=h,c=Object(n.useRef)(a),Object(n.useEffect)((function(){c.current=a}),[a]),c.current),k=Object(n.useState)((function(){return!!o&&(!h&&i.collapsed)})),E=k[0],j=k[1];Object(n.useEffect)((function(){h&&!p&&E&&j(!1)}),[h,p,E]);var _=Object(n.useCallback)((function(e){e.preventDefault(),j((function(e){return!e}))}),[j]);return 0===f.length?null:l.a.createElement("li",{className:Object(m.a)("menu__list-item",{"menu__list-item--collapsed":E}),key:v},l.a.createElement("a",Object(s.a)({className:Object(m.a)("menu__link",(t={"menu__link--sublist":o,"menu__link--active":o&&h},t[O.a.menuLinkText]=!o,t)),onClick:o?_:void 0,href:o?"#!":void 0},b),v),l.a.createElement("ul",{className:"menu__list"},f.map((function(e){return l.a.createElement(C,{tabIndex:E?"-1":"0",key:e.label,item:e,onItemClick:r,collapsible:o,activePath:d})}))))}function _(e){var t=e.item,a=e.onItemClick,n=e.activePath,c=(e.collapsible,Object(u.a)(e,["item","onItemClick","activePath","collapsible"])),i=t.href,r=t.label,o=g(t,n);return l.a.createElement("li",{className:"menu__list-item",key:r},l.a.createElement(p.a,Object(s.a)({className:Object(m.a)("menu__link",{"menu__link--active":o}),to:i},Object(k.a)(i)?{isNavLink:!0,exact:!0,onClick:a}:{target:"_blank",rel:"noreferrer noopener"},c),r))}function C(e){switch(e.item.type){case"category":return l.a.createElement(j,e);case"link":default:return l.a.createElement(_,e)}}var N=function(e){var t,a,c=e.path,r=e.sidebar,o=e.sidebarCollapsible,u=void 0===o||o,k=Object(n.useState)(!1),E=k[0],g=k[1],j=Object(i.a)(),_=j.siteConfig,N=(_=void 0===_?{}:_).themeConfig,w=(N=void 0===N?{}:N).navbar,y=(w=void 0===w?{}:w).title,M=void 0===y?"":y,I=w.hideOnScroll,P=void 0!==I&&I,x=j.isClient,L=Object(v.a)(),S=L.logoLink,W=L.logoLinkProps,R=L.logoImageUrl,A=L.logoAlt,B=Object(d.a)().isAnnouncementBarClosed,D=Object(h.a)().scrollY;Object(b.a)(E);var F=Object(f.a)();return Object(n.useEffect)((function(){F===f.b.desktop&&g(!1)}),[F]),l.a.createElement("div",{className:Object(m.a)(O.a.sidebar,(t={},t[O.a.sidebarWithHideableNavbar]=P,t))},P&&l.a.createElement(p.a,Object(s.a)({tabIndex:"-1",className:O.a.sidebarLogo,to:S},W),null!=R&&l.a.createElement("img",{key:x,src:R,alt:A}),null!=M&&l.a.createElement("strong",null,M)),l.a.createElement("div",{className:Object(m.a)("menu","menu--responsive",O.a.menu,(a={"menu--show":E},a[O.a.menuWithAnnouncementBar]=!B&&0===D,a))},l.a.createElement("button",{"aria-label":E?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:function(){g(!E)}},E?l.a.createElement("span",{className:Object(m.a)(O.a.sidebarMenuIcon,O.a.sidebarMenuCloseIcon)},"\xd7"):l.a.createElement("svg",{"aria-label":"Menu",className:O.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:24,width:24,viewBox:"0 0 32 32",role:"img",focusable:"false"},l.a.createElement("title",null,"Menu"),l.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),l.a.createElement("ul",{className:"menu__list"},r.map((function(e){return l.a.createElement(C,{key:e.label,item:e,onItemClick:function(e){e.target.blur(),g(!1)},collapsible:u,activePath:c})})))))},w=a(179),y=a(187),M=a(176),I=a(70),P=a.n(I);function x(e){var t,a,n=e.currentDocRoute,r=e.docsMetadata,s=e.children,u=Object(i.a)(),m=u.siteConfig,d=u.isClient,b=r.permalinkToSidebar,f=r.docsSidebars,v=r.version,h=f[b[n.path]];return l.a.createElement(o.a,{version:v,key:d},l.a.createElement("div",{className:P.a.docPage},h&&l.a.createElement("div",{className:P.a.docSidebarContainer,role:"complementary"},l.a.createElement(N,{sidebar:h,path:n.path,sidebarCollapsible:null===(t=null===(a=m.themeConfig)||void 0===a?void 0:a.sidebarCollapsible)||void 0===t||t})),l.a.createElement("main",{className:P.a.docMainContainer},l.a.createElement(c.a,{components:w.a},s))))}t.default=function(e){var t=e.route.routes,a=e.docsMetadata,n=e.location,c=t.find((function(e){return Object(M.matchPath)(n.pathname,e)}));return c?l.a.createElement(x,{currentDocRoute:c,docsMetadata:a},Object(r.a)(t)):l.a.createElement(y.default,e)}},187:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(174);t.default=function(e){var t=e.location,a={"/redirect-me":"/still-not-found","/docs/next/advanced/command_line_syntax":"/docs/next/advanced/override_grammar/basic"};if(null==a[t.pathname])return l.a.createElement(c.a,{title:"Page Not Found"},l.a.createElement("div",{className:"container margin-vert--xl","data-canny":!0},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col--6 col--offset-3"},l.a.createElement("h1",{className:"hero__title"},"Page Not Found"),l.a.createElement("p",null,"We could not find what you were looking for."),l.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))));window.location.href=a[t.pathname]}}}]);