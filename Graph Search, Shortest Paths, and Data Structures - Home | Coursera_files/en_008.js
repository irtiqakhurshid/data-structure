webpackJsonp([17],{"+Kpa":function(module,exports){},"+dK2":function(module,exports,e){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}var t=e("U7vG"),r=_interopRequireWildcard(t),a=e("USna"),i=_interopRequireDefault(a),n=e("dAeb"),o=e("QN1v"),u=_interopRequireDefault(o),l=function ReferenceNavigationItem(e){var t=e.courseSlug,a=e.resource,i=a.shortId,o=a.name,l=e.selectedResourceId,s=l===i,c=(0,n.getReferenceUrl)(t,i);return r.createElement(u.default,{trackingName:"nav_reference",className:"rc-ReferenceNavigationItem",url:c,title:o,selected:s})};module.exports=(0,i.default)(function(e,t){return{courseSlug:e.params.courseSlug,selectedResourceId:e.params.reference_id}})(l)},"/Fvv":function(module,exports,e){"use strict";function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var t=e("Zrlr"),r=_interopRequireDefault(t),a=e("zwoO"),i=_interopRequireDefault(a),n=e("Pf15"),o=_interopRequireDefault(n),u=e("U7vG"),l=_interopRequireWildcard(u),s=e("X1tp"),c=_interopRequireDefault(s),f=e("YuRu"),d=_interopRequireDefault(f),p=e("vKIe"),m=_interopRequireDefault(p),v=e("ERIb"),g=_interopRequireDefault(v);e("tHRf");var R=function(e){function Home(){var t,a,n;(0,r.default)(this,Home);for(var o=arguments.length,u=Array(o),l=0;l<o;l++)u[l]=arguments[l];return t=a=(0,i.default)(this,e.call.apply(e,[this].concat(u))),a.state={showMobileNavigation:!1},n=t,(0,i.default)(a,n)}return(0,o.default)(Home,e),Home.prototype.render=function render(){var e=this,t=this.props.children,r=this.state.showMobileNavigation;return l.createElement("div",{className:"rc-Home"},l.createElement(m.default,{onMobileNavigationToggle:function onMobileNavigationToggle(){return e.setState({showMobileNavigation:!r})}}),l.createElement(d.default,{showMobileNavigation:r}),l.createElement("main",{className:"course-content"},l.createElement(g.default,null),l.createElement("div",{className:"course-content-body"},t&&l.cloneElement(t,{}))),l.createElement(c.default,null))},Home}(l.Component);module.exports=R},"/URf":function(module,exports,e){var t=e("VleM");"string"==typeof t&&(t=[[module.i,t,""]]);var r,a={};a.transform=void 0;var i=e("MTIv")(t,a);t.locals&&(module.exports=t.locals)},"1utl":function(module,exports){},"3VCc":function(module,exports,e){"use strict";exports.default={"de":true,"es":true,"fr":true,"ja":true,"ko":true,"pt":true,"ru":true,"zh":true,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":true}},"5Ra7":function(module,exports){},"5d2P":function(module,exports,e){var t=e("+Kpa");"string"==typeof t&&(t=[[module.i,t,""]]);var r,a={};a.transform=void 0;var i=e("MTIv")(t,a);t.locals&&(module.exports=t.locals)},"6AO6":function(module,exports,e){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}var t=e("U7vG"),r=_interopRequireWildcard(t),a=e("MiOz"),i=e("KoZ8"),n=_interopRequireDefault(i),o=e("rf5q"),u=_interopRequireDefault(o),l=e("+dK2"),s=_interopRequireDefault(l),c=function ReferenceCollectionNavigationItem(e){var t=e.navigationItem,i=e.courseSlug,o=e.router,l=t.definition.resources;if(0===l.length)return null;var c=(0,a.getDescription)(t,i,o),f=c.title,d=c.url,p=c.selected;return r.createElement("div",{className:"rc-ReferenceCollectionNavigationItem"},r.createElement(n.default,{title:f,url:d,selected:p}),p&&r.createElement(u.default,null,l.map(function(e,t){return r.createElement(s.default,{key:"reference"+t,resource:e})})))};module.exports=c},C3SQ:function(module,exports,e){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function Badge(e){var t=e.rootClassName,a=e.htmlAttributes,u=e.style,s=e.badgeContent,c=e.badgeStyle,f=e.children,d=e.type,p=e.size,m=l[p]||l.md,v=Math.floor(2*m);return i.default.createElement("div",(0,r.default)({},a,(0,n.css)(t,o.Badge),{style:(0,r.default)({padding:v+"px "+v+"px "+m+"px "+m+"px"},u)}),f,i.default.createElement("span",(0,r.default)({},(0,n.css)(o.badge,o[d]),{style:(0,r.default)({fontSize:m,width:v,height:v},c)}),s))}Object.defineProperty(exports,"__esModule",{value:!0}),exports.BADGE_SIZES=exports.BADGE_TYPES=void 0;var t=e("Dd8w"),r=_interopRequireDefault(t);exports.default=Badge;var a=e("U7vG"),i=_interopRequireDefault(a),n=e("m44v"),o=n.StyleSheet.create({Badge:{position:"relative",display:"inline-block"},badge:{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignContent:"center",alignItems:"center",position:"absolute",top:0,right:0,borderRadius:"50%",color:n.color.white},primary:{backgroundColor:n.color.primary},secondary:{backgroundColor:n.color.accent},info:{backgroundColor:n.color.info},danger:{backgroundColor:n.color.danger},warning:{backgroundColor:n.color.warning},success:{backgroundColor:n.color.success}}),u=exports.BADGE_TYPES={primary:"primary",secondary:"secondary",info:"info",danger:"danger",warning:"warning",success:"success"},l=exports.BADGE_SIZES={sm:8,md:12,lg:16};Badge.defaultProps={type:"primary",style:{},badgeStyle:{},size:l.md},Badge.propTypes={rootClassName:a.PropTypes.oneOfType([a.PropTypes.string,a.PropTypes.object]),badgeContent:a.PropTypes.node.isRequired,badgeStyle:a.PropTypes.object,children:a.PropTypes.node,type:a.PropTypes.oneOf(Object.keys(u)),size:a.PropTypes.oneOf(Object.keys(l))}},FGa4:function(module,exports,e){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}var t=e("U7vG"),r=_interopRequireWildcard(t),a=e("VHqf"),i=_interopRequireDefault(a);e("MyAH");var n=function CourseHeader(e){var t=e.brandingImage,a=e.partnerImage,n=e.name,o=e.partners;if(t){var u=80,l=n.substr(0,80);l=l.substr(0,Math.min(l.length,l.lastIndexOf(" ")));var s=n.length>80;return r.createElement("div",{className:"rc-CourseHeader"},r.createElement("div",{className:"headline-1-text",title:n},s?l+"...":n),r.createElement("div",{className:"body-1-text color-secondary-text"},o.map(function(e){return e.name}).join(", ")))}return r.createElement("div",{className:"align-horizontal-center od-dark od-container cozy"},1===o.length&&a&&r.createElement(i.default,{thumbnail:a,altText:o[0].name}))};module.exports=n},Gvhs:function(module,exports){},GwHJ:function(module,exports,e){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}var t=e("U7vG"),r=_interopRequireWildcard(t),a=e("L0um"),i=_interopRequireDefault(a),n=e("USna"),o=_interopRequireDefault(n),u=e("dAeb"),l=e("SfBx"),s=_interopRequireDefault(l),c=e("QN1v"),f=_interopRequireDefault(c),d=e("7/dp"),p=_interopRequireDefault(d),m=e("iy/N");e("5d2P");var v=function WeekNavigationItem(e){var t=e.courseSlug,a=e.weekNumber,n=e.week.weekStatus,o=e.isCurrentWeek,l=e.selectedWeekNumber,c="OVERDUE"===n,d=(0,u.getWeekUrl)(t,a),v=l===a,g=r.createElement(m.FormattedMessage,{message:(0,p.default)("Week {weekNumber, number}"),weekNumber:a});return r.createElement(f.default,{trackingName:"nav_week",className:"rc-WeekNavigationItem",url:d,title:g,selected:v},r.createElement("div",{key:"week-status",className:(0,i.default)("week-status",{overdue:c})},o&&r.createElement(s.default,{name:"calendar"})))};module.exports=(0,o.default)(function(e,t){return{courseSlug:e.params.courseSlug,selectedWeekNumber:parseInt(e.params.week,10)}})(v)},HOsH:function(module,exports,e){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}var t=e("U7vG"),r=_interopRequireWildcard(t),a=e("MiOz"),i=e("KoZ8"),n=_interopRequireDefault(i),o=function DefaultNavigationItemComponent(e){var t=e.navigationItem,i=e.courseSlug,o=e.router,u=(0,a.getDescription)(t,i,o),l=u.title,s=u.subtitle,c=u.url,f=u.selected;return r.createElement("div",{className:"rc-DefaultNavigationItem","data-courselenium":t.typeName},r.createElement(n.default,{url:c,title:l,subtitle:s,selected:f}))};module.exports=o},Hknn:function(module,exports,e){var t=e("giK0");"string"==typeof t&&(t=[[module.i,t,""]]);var r,a={};a.transform=void 0;var i=e("MTIv")(t,a);t.locals&&(module.exports=t.locals)},J4Lw:function(module,exports,e){var t=e("3VCc"),r=t.default?t.default:{},a=e("L3lR"),i=a(r);i.getLocale=function(){return"en"},module.exports=i},KoZ8:function(module,exports,e){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}var t=e("U7vG"),r=_interopRequireWildcard(t),a=e("L0um"),i=_interopRequireDefault(a),n=e("C3SQ"),o=_interopRequireDefault(n),u=e("h/c7");e("Hknn");var l=function NavigationLink(e){var t=e.url,a=e.title,n=e.subtitle,l=e.selected,s=e.notificationCount,c=(0,i.default)("rc-NavigationLink","horizontal-box","align-items-vertical-center","wrap",{selected:l});return r.createElement(u.TrackedReactLink,{href:t,className:c,trackingName:"nav_item"},r.createElement("p",{className:"nav-item headline-1-text"},a),!!s&&r.createElement(o.default,{badgeContent:s,badgeStyle:{top:2},style:{paddingTop:15},size:"md"}),!!n&&r.createElement("div",{className:"caption-text color-secondary-text"},n))};module.exports=l},KsrZ:function(module,exports,e){var t=e("XDka");"string"==typeof t&&(t=[[module.i,t,""]]);var r,a={};a.transform=void 0;var i=e("MTIv")(t,a);t.locals&&(module.exports=t.locals)},MQd4:function(module,exports,e){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var t=e("U7vG"),r=_interopRequireDefault(t),a=e("MiOz"),i=e("KoZ8"),n=_interopRequireDefault(i),o=function InsightsNavigationItem(e){var t=e.navigationItem,i=e.navigationItem.definition.unreadInsightCount,o=e.courseSlug,u=e.router,l=(0,a.getDescription)(t,o,u),s=l.title,c=l.subtitle,f=l.url,d=l.selected;return r.default.createElement("div",{className:"rc-InsightsNavigationItem"},r.default.createElement(n.default,{url:f,title:s,subtitle:c,selected:d,notificationCount:i}))};module.exports=o},MW7L:function(module,exports,e){var t=e("waY6");"string"==typeof t&&(t=[[module.i,t,""]]);var r,a={};a.transform=void 0;var i=e("MTIv")(t,a);t.locals&&(module.exports=t.locals)},MiOz:function(module,exports,e){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function getDescription(e,r,i){var n=i.params,o="",u="",l="",s=!1;switch(e.typeName){case"weeksNavigationItem":u=(0,a.default)("Course Home"),o=(0,t.getRelativeUrl)(r,"home/welcome"),s=i.isActive({name:"welcome",params:n})||n.week&&i.isActive({name:"week",params:n});break;case"previewFirstWeekNavigationItem":u=(0,a.default)("Preview Week 1"),o=(0,t.getRelativeUrl)(r,"home/welcome"),s=i.isActive({name:"welcome",params:n})||n.week&&i.isActive({name:"week",params:n});break;case"previewCourseNavigationItem":u=(0,a.default)("Preview Course"),o=(0,t.getRelativeUrl)(r,"home/welcome"),s=i.isActive({name:"welcome",params:n})||n.week&&i.isActive({name:"week",params:n});break;case"gradesNavigationItem":u=(0,a.default)("Grades"),o=(0,t.getRelativeUrl)(r,"home/assignments"),s=i.isActive({name:"assignments",params:n});break;case"discussionForumsNavigationItem":u=(0,a.default)("Discussion Forums"),o=(0,t.getRelativeUrl)(r,"discussions"),s=i.isActive({name:"discussions",params:n});break;case"inboxNavigationItem":u=(0,a.default)("Messages"),o=(0,t.getRelativeUrl)(r,"course-inbox"),s=i.isActive({name:"course-inbox",params:n});break;case"resourcesNavigationItem":u=(0,a.default)("Resources"),o=(0,t.getRelativeUrl)(r,"resources/"+e.definition.resources[0].shortId),s=i.isActive({name:"resources",params:n})||n.reference_id&&i.isActive({name:"resourcesWithRefId",params:n})||n.reference_id&&n.short_slug&&i.isActive({name:"resourcesWithRefIdAndSlug",params:n});break;case"officeHoursNavigationItem":u=(0,a.default)("Live Events"),o=(0,t.getRelativeUrl)(r,"office-hours"),s=i.isActive({name:"office-hours",params:n});break;case"teamworkNavigationItem":u=(0,a.default)("Teamwork"),o=(0,t.getRelativeUrl)(r,"teamwork"),s=i.isActive({name:"teamwork",params:n});break;case"classmatesNavigationItem":u=(0,a.default)("Classmates"),o=(0,t.getRelativeUrl)(r,"classmates"),s=i.isActive({name:"classmates",params:n});break;case"courseInfoNavigationItem":u=(0,a.default)("Course Info"),o=(0,t.getRelativeUrl)(r,"home/info"),s=i.isActive({name:"CDP",params:n});break;case"insightsNavigationItem":u=(0,a.default)("Insights"),o=(0,t.getRelativeUrl)(r,"insights"),s=i.isActive({name:"course-insights",params:n});break;case"courseManagerNavigationItem":u=(0,a.default)("Course Manager"),l=(0,a.default)("Staff & Mentors Only"),o=(0,t.getRelativeUrl)(r,"course-manager"),s=i.isActive({name:"course-manager",params:n})}return{url:o,title:u,subtitle:l,selected:s}}var t=e("dAeb"),r=e("7/dp"),a=_interopRequireDefault(r);module.exports.getDescription=getDescription},MyAH:function(module,exports,e){var t=e("O57q");"string"==typeof t&&(t=[[module.i,t,""]]);var r,a={};a.transform=void 0;var i=e("MTIv")(t,a);t.locals&&(module.exports=t.locals)},O57q:function(module,exports){},QN1v:function(module,exports,e){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}var t=e("U7vG"),r=_interopRequireWildcard(t),a=e("L0um"),i=_interopRequireDefault(a),n=e("h/c7");e("qrfn");var o=function NavigationDrawerLink(e){var t=e.className,a=e.children,o=e.url,u=e.title,l=e.selected,s=e.trackingName,c=(0,i.default)("rc-NavigationDrawerLink","headline-1-text","horizontal-box",t,{selected:l});return r.createElement(n.TrackedReactLink,{trackingName:s,href:o,className:c},r.createElement("div",{className:"horizontal-box align-items-vertical-center"},u),a&&r.cloneElement(a))};module.exports=o},QadL:function(module,exports,e){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var t=e("Zrlr"),r=_interopRequireDefault(t),a=e("zwoO"),i=_interopRequireDefault(a),n=e("Pf15"),o=_interopRequireDefault(n),u,l,s,c=e("U7vG"),f=_interopRequireDefault(c),d=e("MiOz"),p=e("KoZ8"),m=_interopRequireDefault(p),v=(l=u=function(e){function InboxNavigationItem(t){(0,r.default)(this,InboxNavigationItem);var a=(0,i.default)(this,e.call(this,t));return s.call(a),a.state={hasSeenMessages:a.getSelectedFromProps(t)},a}return(0,o.default)(InboxNavigationItem,e),InboxNavigationItem.prototype.componentWillReceiveProps=function componentWillReceiveProps(e){this.state.hasSeenMessages||this.getSelectedFromProps(e)&&this.setState({hasSeenMessages:!0})},InboxNavigationItem.prototype.render=function render(){var e=this.props,t=e.navigationItem,r=e.navigationItem.definition.notificationCount,a=e.courseSlug,i=e.router,n=(0,d.getDescription)(t,a,i),o=n.title,u=n.subtitle,l=n.url,s=n.selected,c=this.state.hasSeenMessages?0:r;return f.default.createElement("div",{className:"rc-InboxNavigationItem"},f.default.createElement(m.default,{url:l,title:o,subtitle:u,selected:s,notificationCount:c}))},InboxNavigationItem}(c.Component),s=function _initialiseProps(){this.getSelectedFromProps=function(e){var t=e.navigationItem,r=e.courseSlug,a=e.router;return(0,d.getDescription)(t,r,a).selected}},l);module.exports=v},VleM:function(module,exports){},WbkX:function(module,exports,e){"use strict";function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var t=e("Zrlr"),r=_interopRequireDefault(t),a=e("zwoO"),i=_interopRequireDefault(a),n=e("Pf15"),o=_interopRequireDefault(n),u,l,s=e("U7vG"),c=_interopRequireWildcard(s),f=e("aok7"),d=_interopRequireDefault(f),p=e("QadL"),m=_interopRequireDefault(p),v=e("HOsH"),g=_interopRequireDefault(v),R=e("MQd4"),q=_interopRequireDefault(R),b=e("jGmY"),h=_interopRequireDefault(b),N=e("6AO6"),D=_interopRequireDefault(N),y=(l=u=function(e){function CourseNavigationItem(){return(0,r.default)(this,CourseNavigationItem),(0,i.default)(this,e.apply(this,arguments))}return(0,o.default)(CourseNavigationItem,e),CourseNavigationItem.prototype.render=function render(){var e=this.context.router,t=this.props,r=t.courseSlug,a=t.navigationItem;if("adminNavigationItem"===a.typeName)return c.createElement(d.default,{courseSlug:r});if("weeksNavigationItem"===a.typeName)return c.createElement(h.default,{navigationItem:a,courseSlug:r,router:e});if("resourcesNavigationItem"===a.typeName)return c.createElement(D.default,{navigationItem:a,courseSlug:r,router:e});if("insightsNavigationItem"===a.typeName)return c.createElement(q.default,{navigationItem:a,courseSlug:r,router:e});if("inboxNavigationItem"===a.typeName)return c.createElement(m.default,{navigationItem:a,courseSlug:r,router:e});return c.createElement(g.default,{navigationItem:a,courseSlug:r,router:e})},CourseNavigationItem}(c.Component),u.contextTypes={router:c.PropTypes.object.isRequired},l);module.exports=y},X1tp:function(module,exports,e){"use strict";var t=e("U7vG"),r=e("cKYN"),a=r.Tooltip,i=r.OverlayTrigger,n=e("dmSb"),o=e("h/c7"),u=o.TrackedA,l=e("SfBx"),s=e("RPCc"),c=e("hgxZ"),f=e("tEBG"),d=e("J4Lw");e("/URf");var p=function Help(e){var r=e.style,n=e.isEnterprise,o="help-tooltip",p=t.createElement(a,{id:o},d("Help Center"));if(s.get())return null;var m=c.isAuthenticatedUser(),v=n?f.getEnterpriseHelpLink(m):f.getNewHelpCenterHome(m);return t.createElement(i,{placement:"top",overlay:p,trigger:["hover","focus"]},t.createElement(u,{className:"rc-Help link-button nostyle",trackingName:"icon",href:v,target:"_blank",rel:"noopener noreferrer","aria-label":d("Help Center Link"),style:r||{minWidth:0,bottom:20,right:20}},t.createElement("div",{className:"help-widget horizontal-box align-items-absolute-center",role:"tooltip","aria-describedby":o},t.createElement(l,{name:"question-circle-o"}))))};module.exports=n.createTrackedContainer(function(e){return{namespace:{page:"help"}}})(p)},XDka:function(module,exports){},YuRu:function(module,exports,e){"use strict";function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var t=e("Dd8w"),r=_interopRequireDefault(t),a=e("41m7"),i=_interopRequireDefault(a),n=e("U7vG"),o=_interopRequireWildcard(n),u=e("dmSb"),l=_interopRequireDefault(u),s=e("Oj3L"),c=_interopRequireDefault(s),f=e("L0um"),d=_interopRequireDefault(f),p=e("xlkv"),m=_interopRequireDefault(p),v=e("hgxZ"),g=_interopRequireDefault(v),R=e("CoAp"),q=_interopRequireDefault(R),b=e("USna"),h=_interopRequireDefault(b),N=e("cZAY"),D=_interopRequireDefault(N),y=e("FGa4"),I=_interopRequireDefault(y),k=e("WbkX"),w=_interopRequireDefault(k),M=e("+wKG"),E=_interopRequireDefault(M),C=e("fNMq"),S=_interopRequireDefault(C),x=e("fcSx"),O=_interopRequireDefault(x),P=e("7/dp"),W=_interopRequireDefault(P);e("KsrZ");var U=function CourseNavigation(e){var t=e.course,r=e.partners,a=e.courseSlug,i=e.navigationItems,n=e.showMobileNavigation,u=r[0],l=!!u&&(t.overridePartnerLogos&&t.overridePartnerLogos[u.id]||u.squareLogo),s=c.default.processImage(l,{width:"56px",height:"56px"});return o.createElement("div",{className:(0,d.default)("rc-CourseNavigation",{"mobile-enabled":n})},o.createElement(D.default,{tagName:"h2"},(0,W.default)("Course Navigation")),o.createElement(I.default,{name:t.name,partners:r,partnerImage:s,brandingImage:t.brandingImage}),o.createElement("nav",{className:"items align-self-stretch","aria-label":(0,W.default)("Course Navigation")},i.map(function(e){return o.createElement(w.default,{key:e.typeName,courseSlug:a,navigationItem:e})})))};module.exports=i.default.compose((0,h.default)(function(e,t){return{courseSlug:e.params.courseSlug}}),m.default.createContainer(function(e){var t=e.courseSlug;return{course:E.default.bySlug(t,{fields:["name","brandingImage","overridePartnerLogos"],includes:["partnerIds"]}),courseNavigation:O.default.get(g.default.get().id+"~"+t)}}),m.default.createContainer(function(e){var t=e.course;return{partners:S.default.multiGet(t.partnerIds,{fields:["name","squareLogo"]})}}),(0,q.default)(function(e){var t=e.courseNavigation;return(0,r.default)({},t)}),l.default.createTrackedContainer(function(){return{namespace:{page:"menu"}}}))(U)},aok7:function(module,exports,e){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var t=e("U7vG"),r=_interopRequireDefault(t),a=e("USwW"),i=_interopRequireDefault(a),n=e("L0um"),o=_interopRequireDefault(n),u=e("SfBx"),l=_interopRequireDefault(u),s=e("h/c7"),c=e("7/dp"),f=_interopRequireDefault(c);e("MW7L");var d=function AdminButton(e){var t=e.courseSlug,a=(0,o.default)("link-button","primary","fullbleed","horizontal-box","align-items-absolute-center");return r.default.createElement("div",{className:"rc-AdminButton menu-item horizontal-box align-items-absolute-center"},r.default.createElement(s.TrackedA,{href:i.default.join("/teach",t),className:a,trackingName:"course_admin_button"},r.default.createElement(l.default,{name:"settings"}),"  ",(0,f.default)("Admin")))};module.exports=d},aprK:function(module,exports,e){var t=e("5Ra7");"string"==typeof t&&(t=[[module.i,t,""]]);var r,a={};a.transform=void 0;var i=e("MTIv")(t,a);t.locals&&(module.exports=t.locals)},b8QN:function(module,exports,e){var t=e("Gvhs");"string"==typeof t&&(t=[[module.i,t,""]]);var r,a={};a.transform=void 0;var i=e("MTIv")(t,a);t.locals&&(module.exports=t.locals)},cZAY:function(module,exports,e){"use strict";function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}var t=e("U7vG"),r=_interopRequireWildcard(t);e("aprK");var a=function A11yScreenReaderOnly(e){var t=e.children,a=e.tagName,i=a;return r.createElement(i,{className:"rc-A11yScreenReaderOnly"},t)};module.exports=a},fcSx:function(module,exports,e){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=e("Zrlr"),r=_interopRequireDefault(t),a=e("zwoO"),i=_interopRequireDefault(a),n=e("Pf15"),o=_interopRequireDefault(n),u,l,s=e("VM3F"),c=_interopRequireDefault(s),f=(l=u=function(e){function CourseNavigation(){return(0,r.default)(this,CourseNavigation),(0,i.default)(this,e.apply(this,arguments))}return(0,o.default)(CourseNavigation,e),CourseNavigation}(c.default),u.RESOURCE_NAME="courseNavigation.v1",l);exports.default=f},giK0:function(module,exports){},jGmY:function(module,exports,e){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}var t=e("U7vG"),r=_interopRequireWildcard(t),a=e("MiOz"),i=e("KoZ8"),n=_interopRequireDefault(i),o=e("rf5q"),u=_interopRequireDefault(o),l=e("GwHJ"),s=_interopRequireDefault(l),c=function WeekCollectionNavigationItem(e){var t=e.navigationItem,i=e.courseSlug,o=e.router,l=t.definition,c=l.weeks,f=l.currentWeekNumber,d=(0,a.getDescription)(t,i,o),p=d.title,m=d.url,v=d.selected;return r.createElement("div",{className:"rc-WeekCollectionNavigationItem"},r.createElement(n.default,{title:p,url:m,selected:v}),v&&r.createElement(u.default,null,c.map(function(e,t){return r.createElement(s.default,{week:e,key:"week"+t,weekNumber:t+1,isCurrentWeek:t+1===f})})))};module.exports=c},qrfn:function(module,exports,e){var t=e("1utl");"string"==typeof t&&(t=[[module.i,t,""]]);var r,a={};a.transform=void 0;var i=e("MTIv")(t,a);t.locals&&(module.exports=t.locals)},rf5q:function(module,exports,e){"use strict";function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var t=e("Zrlr"),r=_interopRequireDefault(t),a=e("zwoO"),i=_interopRequireDefault(a),n=e("Pf15"),o=_interopRequireDefault(n),u=e("U7vG"),l=_interopRequireWildcard(u),s=function(e){function NavigationDrawer(){return(0,r.default)(this,NavigationDrawer),(0,i.default)(this,e.apply(this,arguments))}return(0,o.default)(NavigationDrawer,e),NavigationDrawer.prototype.render=function render(){return l.createElement("div",{className:"rc-NavigationDrawer"},this.props.children)},NavigationDrawer}(l.Component);module.exports=s},tHRf:function(module,exports,e){var t=e("tKPa");"string"==typeof t&&(t=[[module.i,t,""]]);var r,a={};a.transform=void 0;var i=e("MTIv")(t,a);t.locals&&(module.exports=t.locals)},tKPa:function(module,exports){},vKIe:function(module,exports,e){"use strict";function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var t=e("Dd8w"),r=_interopRequireDefault(t),a=e("Zrlr"),i=_interopRequireDefault(a),n=e("zwoO"),o=_interopRequireDefault(n),u=e("Pf15"),l=_interopRequireDefault(u),s=e("U7vG"),c=_interopRequireWildcard(s),f=e("41m7"),d=_interopRequireDefault(f),p=e("xlkv"),m=_interopRequireDefault(p),v=e("dmSb"),g=_interopRequireDefault(v),R=e("USna"),q=_interopRequireDefault(R),b=e("UJwr"),h=_interopRequireDefault(b),N=e("Rd9/"),D=_interopRequireDefault(N),y=e("Gg8G"),I=_interopRequireDefault(y),k=e("/YQH"),w=_interopRequireDefault(k);e("b8QN");var M=function(e){function CoursePageHeader(){return(0,i.default)(this,CoursePageHeader),(0,o.default)(this,e.apply(this,arguments))}return(0,l.default)(CoursePageHeader,e),CoursePageHeader.prototype.render=function render(){var e=this.props,t=e.course,a=e.course.id,i=e.onMobileNavigationToggle,n=h.default.get("ngSearch","inCourseSearchEnabled",{course_id:a});return c.createElement("div",{className:"rc-CoursePageHeader"},c.createElement(w.default,(0,r.default)({},I.default.ondemand,{hideSearch:!n,inCourseSearch:n,toggleMobileMenu:i,catalogSubBannerProps:{hidePromoBanner:!0},course:t.brandingImageUrl?(0,r.default)({},t,{firstPartnerCourseLogo:t.brandingImageUrl}):void 0})))},CoursePageHeader}(c.Component);module.exports=d.default.compose((0,q.default)(function(e,t){return{courseSlug:e.params.courseSlug}}),m.default.createContainer(function(e){var t=e.courseSlug;return{course:D.default.bySlug(t,{fields:["id, brandingImageUrl"]})}}),g.default.createTrackedContainer(function(){return{namespace:{page:"course_page_header"}}}))(M)},waY6:function(module,exports){}});
//# sourceMappingURL=en.17.80b8657f3f0310fde75f.js.map