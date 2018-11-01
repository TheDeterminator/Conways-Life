(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{127:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(14),i=n.n(r),o=n(135),s=n(132),c=n(134),u=n(23),m=n(24),h=n(27),d=n(25),f=n(26),p=(n(40),n(130)),b=n(133),v=n(131),w=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(n=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).selectBox=function(){n.props.selectBox(n.props.row,n.props.col)},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:this.props.boxClass,id:this.props.id,onClick:this.selectBox})}}]),t}(l.a.Component),y=function(e){var t=14*e.cols,n="",a=e.gridFull.map(function(t,a){return t.map(function(t,r){var i="".concat(a,"_").concat(r);return n=e.gridFull[a][r]?"box on":"box off",l.a.createElement(w,{boxClass:n,key:i,boxId:i,row:a,col:r,selectBox:e.selectBox})})});return l.a.createElement("div",{className:"grid",style:{width:t}},a)},E=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(n=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).handleSelect=function(e){n.props.gridSize(e)},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"center"},l.a.createElement(p.a,null,l.a.createElement("button",{className:"btn btn-default",onClick:this.props.playButton},"Play"),l.a.createElement("button",{className:"btn btn-default",onClick:this.props.pauseButton},"Pause"),l.a.createElement("button",{className:"btn btn-default",onClick:this.props.clear},"Clear"),l.a.createElement("button",{className:"btn btn-default",onClick:this.props.slow},"Slow"),l.a.createElement("button",{className:"btn btn-default",onClick:this.props.fast},"Fast"),l.a.createElement("button",{className:"btn btn-default",onClick:this.props.seed},"Seed"),l.a.createElement(b.a,{title:"Grid Size",id:"size-menu",onSelect:this.handleSelect},l.a.createElement(v.a,{eventKey:"1"},"20x10"),l.a.createElement(v.a,{eventKey:"2"},"50x30"),l.a.createElement(v.a,{eventKey:"3"},"70x50"))))}}]),t}(l.a.Component),g=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(h.a)(this,Object(d.a)(t).call(this))).arrayClone=function(e){return JSON.parse(JSON.stringify(e))},e.selectBox=function(t,n){var a=e.state.gridFull.map(function(e,a){return e.map(function(e,l){return a===t&&l===n?!e:e})});e.setState(function(){return{gridFull:a}})},e.seed=function(){var t=e.state.gridFull.map(function(e){return e.map(function(){return 1===Math.floor(4*Math.random())})});e.setState(function(){return{gridFull:t}})},e.playButton=function(){clearInterval(e.intervalId),e.intervalId=setInterval(e.play,e.speed)},e.pauseButton=function(){clearInterval(e.intervalId)},e.play=function(){for(var t=e.state.gridFull,n=e.arrayClone(e.state.gridFull),a=0;a<e.rows;a++)for(var l=0;l<e.cols;l++){var r=0;a>0&&t[a-1][l]&&r++,a>0&&l>0&&t[a-1][l-1]&&r++,a>0&&l<e.cols-1&&t[a-1][l+1]&&r++,l<e.cols-1&&t[a][l+1]&&r++,l>0&&t[a][l-1]&&r++,a<e.rows-1&&t[a+1][l]&&r++,a<e.rows-1&&l>0&&t[a+1][l-1]&&r++,a<e.rows-1&&e.cols-1&&t[a+1][l+1]&&r++,t[a][l]&&(r<2||r>3)&&(n[a][l]=!1),t[a][l]||3!==r||(n[a][l]=!0)}e.setState(function(e){return{gridFull:n,generations:e.generations+1}})},e.slow=function(){e.speed=1e3,e.playButton()},e.fast=function(){e.speed=100,e.playButton()},e.clear=function(){var t=Array(e.rows).fill().map(function(){return Array(e.cols).fill(!1)});e.setState(function(){return{gridFull:t,generations:0}})},e.gridSize=function(t){switch(t){case"1":e.cols=20,e.rows=10;break;case"2":e.cols=50,e.rows=30;break;default:e.cols=70,e.rows=50}e.clear()},e.speed=100,e.rows=30,e.cols=50,e.state={generations:0,gridFull:Array(e.rows).fill(Array(e.cols).fill(!1))},e}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.seed(),this.playButton()}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"The Game of Life"),l.a.createElement(E,{playButton:this.playButton,pauseButton:this.pauseButton,slow:this.slow,fast:this.fast,clear:this.clear,seed:this.seed,gridSize:this.gridSize}),l.a.createElement(y,{gridFull:this.state.gridFull,rows:this.rows,cols:this.cols,selectBox:this.selectBox}),l.a.createElement("h2",null,"Generations: ",this.state.generations))}}]),t}(l.a.Component),O=n(15),j=n(11),k=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(h.a)(this,Object(d.a)(t).call(this,e))).start=n.start.bind(Object(O.a)(Object(O.a)(n))),n.stop=n.stop.bind(Object(O.a)(Object(O.a)(n))),n.animate=n.animate.bind(Object(O.a)(Object(O.a)(n))),n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this.mount.clientWidth,t=this.mount.clientHeight,n=new j.h,a=new j.g(75,e/t,.1,1e3),l=new j.j({antialias:!0}),r=new j.a(1,1,1),i=new j.f({color:"#433F81"}),o=new j.e(r,i),s=new j.b;s.vertices.push(new j.i(-10,0,0)),s.vertices.push(new j.i(0,10,0)),s.vertices.push(new j.i(10,0,0));var c=new j.d({color:"red"}),u=new j.c(s,c);a.position.z=4,n.add(o),n.add(u),l.setClearColor("#000000"),l.setSize(e,t),this.scene=n,this.camera=a,this.renderer=l,this.material=i,this.cube=o,this.line=u,this.mount.appendChild(this.renderer.domElement),this.start()}},{key:"componentWillUnmount",value:function(){this.stop(),this.mount.removeChild(this.renderer.domElement)}},{key:"start",value:function(){this.frameId||(this.frameId=requestAnimationFrame(this.animate))}},{key:"stop",value:function(){cancelAnimationFrame(this.frameId)}},{key:"animate",value:function(){this.cube.rotation.x+=.01,this.cube.rotation.y+=.01,this.renderScene(),this.frameId=window.requestAnimationFrame(this.animate)}},{key:"renderScene",value:function(){this.renderer.render(this.scene,this.camera)}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{style:{width:"400px",height:"400px"},ref:function(t){e.mount=t}})}}]),t}(l.a.Component),x=function(){return l.a.createElement("div",null,l.a.createElement("h1",{className:"welcome-info"},"Welcome to Conway's Game of Life"),l.a.createElement("h2",{className:"welcome-info"},"This is an interactive implementation of the classic Cellular Automata"),l.a.createElement("h2",{className:"welcome-info"},"These are the rules"),l.a.createElement("ol",{style:{width:"50%",margin:"auto"}},l.a.createElement("li",{className:"rules"},"Any live cell with fewer than two live neighbors dies, as if by underpopulation."),l.a.createElement("li",{className:"rules"},"Any live cell with two or three live neighbors lives on to the next generation."),l.a.createElement("li",{className:"rules"},"Any live cell with more than three live neighbors dies, as if by overpopulation."),l.a.createElement("li",{className:"rules"},"Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.")))},C=function(){return l.a.createElement(o.a,null,l.a.createElement("div",null,l.a.createElement("h1",null,"Conway's Game of Life"),l.a.createElement("nav",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(s.a,{to:"/two",className:"nav-links"},"View 2D Simulation")),l.a.createElement("li",null,l.a.createElement(s.a,{to:"/three",className:"nav-links"},"View 3D Simulation")),l.a.createElement("li",null,l.a.createElement(s.a,{to:"/",className:"nav-links"},"Back to Info Page")))),l.a.createElement(c.a,{path:"/",exact:!0,component:x}),l.a.createElement(c.a,{path:"/two",component:g}),l.a.createElement(c.a,{path:"/three",component:k})))};i.a.render(l.a.createElement(C,null),document.getElementById("root"))},40:function(e,t,n){},76:function(e,t,n){e.exports=n(127)}},[[76,2,1]]]);
//# sourceMappingURL=main.679cb031.chunk.js.map