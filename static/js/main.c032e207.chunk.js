(this["webpackJsonptext-analyzer"]=this["webpackJsonptext-analyzer"]||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/loading.bf4c97ed.gif"},,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(7),c=a.n(l);a(15);var o=function(){return r.a.createElement("nav",{className:"navbar"},r.a.createElement("p",{className:"navbar-brand mx-auto my-auto"},"Text Analyzer ",r.a.createElement("i",{className:"fas fa-file-alt fa-spin"})))},s=a(1),i=a(2),m=a(4),u=a(3),d=a(5),p=a(8),E=a.n(p),g=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"modal fade ",id:"exampleModalCenter",tabIndex:"-1",role:"dialog","aria-labelledby":"exampleModalCenterTitle","aria-hidden":"true"},r.a.createElement("div",{className:"modal-dialog modal-dialog-centered",role:"document"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-body text-center"},r.a.createElement("h4",{className:"my-3"}," Processing Text..."),r.a.createElement("img",{src:E.a,alt:"spinner"}))))))}}]),t}(n.Component),h=a(9),f=a.n(h);function v(e){for(var t=e.wordsPerPage,a=e.totalWords,n=e.paginate,l=e.currentPage,c=[],o=1;o<=Math.ceil(a/t);o++)c.push(o);return r.a.createElement("nav",null,r.a.createElement("ul",{className:"pagination"},c.map((function(e){return r.a.createElement("li",{key:e,className:f()("page-item",{active:e===l})},r.a.createElement("button",{onClick:function(){return n(e)},className:"page-link"},e))}))))}var b=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={text:"",numOfWords:0,repeatedWords:{},isAnalyzing:!1,searchText:"",currentPage:1,wordsPerPage:15},a.handleChange=function(e){a.setState({text:e.target.value})},a.handleClick=function(){a.setState({isAnalyzing:!0});var e=a.state.text,t=e.trim().split(/\s+/).length,n={};e.trim().split(/\s+/).forEach((function(e){n[e]=(n[e]||0)+1})),setTimeout((function(){a.state.isAnalyzing&&document.getElementById("analyze").click();a.setState({repeatedWords:n,numOfWords:t,isAnalyzing:!1})}),1e3)},a.resetState=function(){a.setState({text:"",numOfWords:0,repeatedWords:{},pageNumber:1})},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.text,n=t.numOfWords,l=t.repeatedWords,c=t.searchText,o=t.currentPage,s=t.wordsPerPage,i=o*s,m=i-s,u=Object.keys(l);return r.a.createElement("div",{className:"container-fluid py-5"},r.a.createElement(g,null),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 text-center"},r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("textarea",{id:"textarea",className:"form-control",rows:"14",value:a,onChange:this.handleChange,required:"required",placeholder:"Enter text here...."})),r.a.createElement("br",null),r.a.createElement("button",{type:"button",className:"btn btn-primary",disabled:""===a,id:"analyze",onClick:this.handleClick,"data-toggle":"modal","data-target":"#exampleModalCenter",style:{backgroundColor:"#2F2FA2"}},"Analyze Text"),r.a.createElement("button",{type:"reset",className:"btn btn-danger mx-2",id:"reset",onClick:this.resetState},"Reset"))),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col info"},"Total Words: ",""===a?0:n),r.a.createElement("div",{className:"col input-group py-2"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Search word...",value:c,onChange:function(t){return e.setState({searchText:t.target.value,currentPage:1})}}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("span",{className:"input-group-text",onClick:function(){return e.setState({searchText:""})},style:{cursor:"pointer",color:"red"}}," X ")))),r.a.createElement("table",{className:"table table-striped table-light table-bordered"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col-md-1"},"#"),r.a.createElement("th",{scope:"col-md-4"},"Word:"),r.a.createElement("th",{scope:"col-md-7"},"Frequency:"))),a?r.a.createElement("tbody",null,Object.keys(l).filter((function(e){return e.includes(c)})).slice(m,i).map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("th",{scope:"row"},t+1),r.a.createElement("td",null,e),r.a.createElement("td",null,l[e]))}))):null),r.a.createElement(v,{wordsPerPage:s,totalWords:u.length,paginate:function(t){window.location.href="#",e.setState({currentPage:t})},currentPage:o})),r.a.createElement("div",null)))}}]),t}(n.Component);function y(){var e=(new Date).getFullYear();return r.a.createElement("div",{className:"bg-secondary text-white py-1"},r.a.createElement("div",{className:"text-center"},r.a.createElement("p",{className:"pt-4 ml-auto"},e," \xa9 Flamur Deliu")))}a(16);var x=function(){return r.a.createElement("div",null,r.a.createElement(o,null),r.a.createElement(b,null),r.a.createElement(y,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[10,1,2]]]);
//# sourceMappingURL=main.c032e207.chunk.js.map