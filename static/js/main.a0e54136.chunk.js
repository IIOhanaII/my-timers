(this["webpackJsonpmy-timers"]=this["webpackJsonpmy-timers"]||[]).push([[0],{46:function(t,e,s){},61:function(t,e,s){},62:function(t,e,s){"use strict";s.r(e);var i=s(2),n=s.n(i),a=s(13),r=s.n(a),c=(s(45),s(46),s(14)),o=s(15),l=s(18),m=s(17),u=s(64),h=s(3),d=function(){return Object(h.jsx)(u.a,{children:Object(h.jsx)("div",{className:"container d-flex align-items-center justify-content-center",children:Object(h.jsx)("h1",{className:"font-header text-info mb-0",children:"MyTimers"})})})},f=s(40),j=s(37),b=s(11),p=s(66),O=s(67),x=s(68),g=s(38),S=s(78),N=s(69),v=s(70),L=s(71),y=s(72),C=s(73),A=s(80),M=s(74),T=s(81),E=s(82),k=s(75),w=s(76),D=function(t){var e=t.circleDasharray,s=t.setRemainingPathColor,i=t.timeLeft,n=t.totalTime;return Object(h.jsx)("svg",{className:"base-timer__svg",viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg",children:Object(h.jsxs)("g",{className:"base-timer__circle",children:[Object(h.jsx)("circle",{className:"base-timer__path-elapsed",cx:"50",cy:"50",r:"45"}),Object(h.jsx)("path",{id:"base-timer-path-remaining",strokeDasharray:e+" 283",className:"\n                        base-timer__path-remaining\n                        ".concat(s(i,n),"\n                    "),d:"\r M 50, 50\r m -45, 0\r a 45,45 0 1,0 90,0\r a 45,45 0 1,0 -90,0\r "})]})})},H=function(t){return""!==t.timerSoundEffectUrl&&Object(h.jsx)("img",{id:"base-timer-bell",className:"base-timer__bell d-block",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAWQAAAFkBqp2phgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAE7SURBVDiNjdM7S1xRFAXgz5mxEY0wVmqhoPHBILZWCv4OH2hhwBAiBH+FlWUKMbGysxMEGzsbrbRQFER8JFZmYkDFQYtzZpi5Ti6z4MI+a6+9zmbffahFX+K8hMU0TaYqXsb3hDiPjgS3jq8Jzihu0R3Pk9jFEx6xg/GY68FvDFcbbOFzjD/hF2bRiS7M4w5zUfMNm+XiVvxBG/pxj4FkiyjEXA/aY9ySie0f4S9m8BOndQyO8QNT8cIzFDLCoC6j6CMO6hSXcYjBGF8gn8M29iLZjH8pBs9RQ5jLQw4lFCOZw0uKQQnZGBep3QPoxXWKwY0wxLoYEXYh+z+B0P4dhpKJD8LwFlKKy/iCfeH3V7CKtQaKoQkbWKkm54W1fW3we8R02i0TOBFe3gDOMdZghxUsCVO/8v5JV/AGYHND5kItKO8AAAAASUVORK5CYII=",alt:"Bell"})},F=function(t){var e=t.timerSoundEffectUrl,s=t.started,i=t.soundEffectName,n=t.timerSoundEffectName;return Object(h.jsx)("div",{id:"base-timer-label-sound-effect-name",className:"base-timer__label--soundEffectName",children:""!==e?s?i:n:null})},U=function(t){var e=t.started,s=t.formatTimeLeft,i=t.hoursLeft,n=t.minutesLeft,a=t.secondsLeft,r=t.timerHours,c=t.timerMinutes,o=t.timerSeconds;return Object(h.jsx)("div",{id:"base-timer-label-time-left",className:"base-timer__label--timeLeft",children:e?s(i,n,a):s(r,c,o)})},_=function(t){var e=t.started,s=t.name,i=t.timerName;return Object(h.jsx)("div",{id:"base-timer-label-timer-name",className:"base-timer__label--timerName",children:e?s:i})},I=function(t){var e=t.started,s=t.isOn,i=t.timeLeft,n=t.startTimer,a=t.pauseTimer,r=t.resetTimer,c=!e&&Object(h.jsx)(g.a,{outline:!0,color:"success",onClick:n,children:"Start"}),o=e&&s&&Object(h.jsx)(g.a,{outline:!0,color:"warning",onClick:a,children:"Pause"}),l=e&&!s&&i&&Object(h.jsx)(g.a,{className:"mr-2",outline:!0,color:"success",onClick:n,children:"Resume"}),m=e&&!s&&Object(h.jsx)(g.a,{outline:!0,color:"primary",onClick:r,children:"Reset"});return Object(h.jsxs)("div",{id:"controls-panel",className:"text-center mt-3",children:[c,o,l,m]})},B=function(t,e,s){var i=0;return 0!==t&&(i+=3600*t),0!==e&&(i+=60*e),0!==s&&(i+=1*s),i},P=function(t,e,s){return t<10&&(t="0".concat(t)),e<10&&(e="0".concat(e)),s<10&&(s="0".concat(s)),"".concat(t,":").concat(e,":").concat(s)},R=function(t,e){var s=t/e;return s-1/e*(1-s)},Y=function(t,e){return R(t,e)<=.2?"text-danger":R(t,e)>.2&&R(t,e)<=.5?"text-warning":"text-info"},Q=s(28),K=s.n(Q),z=function(t){Object(l.a)(s,t);var e=Object(m.a)(s);function s(t){var i;return Object(c.a)(this,s),(i=e.call(this,t)).state={hoursLeft:null,minutesLeft:null,secondsLeft:null,name:"",soundEffectName:"",soundEffectUrl:"",started:!1,isOn:!1,timeLeft:null,totalTime:null,circleDasharray:null},i.startTimer=i.startTimer.bind(Object(b.a)(i)),i.timer=null,i.setTimer=i.setTimer.bind(Object(b.a)(i)),i.pauseTimer=i.pauseTimer.bind(Object(b.a)(i)),i.resetTimer=i.resetTimer.bind(Object(b.a)(i)),i}return Object(o.a)(s,[{key:"startTimer",value:function(){var t=this;this.state.started?this.setState({started:!0,isOn:!0}):(this.setTimer(this.state.started),this.setState({hoursLeft:this.props.timerHours,minutesLeft:this.props.timerMinutes,secondsLeft:this.props.timerSeconds,name:this.props.timerName,soundEffectName:this.props.timerSoundEffectName,soundEffectUrl:this.props.timerSoundEffectUrl,started:!0,isOn:!0})),this.timer=setInterval((function(){var e,s;t.state.secondsLeft>0?t.setState((function(t){return{secondsLeft:t.secondsLeft-1,timeLeft:t.timeLeft-1}}),(function(){t.state.timeLeft<1&&(clearInterval(t.timer),t.setState({isOn:!1}))})):t.state.minutesLeft>0?t.setState((function(t){return{minutesLeft:t.minutesLeft-1,secondsLeft:59,timeLeft:t.timeLeft-1}})):t.state.hoursLeft>0&&t.setState((function(t){return{hoursLeft:t.hoursLeft-1,minutesLeft:59,secondsLeft:59,timeLeft:t.timeLeft-1}})),t.setState({circleDasharray:(e=t.state.timeLeft,s=t.state.totalTime,(283*R(e,s)).toFixed(0))})}),1e3)}},{key:"setTimer",value:function(t){var e=this.props.computeTotalTimeInSeconds(this.props.timerHours,this.props.timerMinutes,this.props.timerSeconds);t?this.setState({timeLeft:e}):this.setState({totalTime:e,timeLeft:e})}},{key:"pauseTimer",value:function(){this.setState({isOn:!1}),clearInterval(this.timer)}},{key:"resetTimer",value:function(){this.setTimer(this.state.started),this.setState({hoursLeft:this.props.timerHours,minutesLeft:this.props.timerMinutes,secondsLeft:this.props.timerSeconds,started:!1,isOn:!1,circleDasharray:null})}},{key:"render",value:function(){return Object(h.jsxs)("div",{className:"base-timer",children:[Object(h.jsx)(D,{circleDasharray:this.state.circleDasharray,setRemainingPathColor:Y,timeLeft:this.state.timeLeft,totalTime:this.state.totalTime}),Object(h.jsxs)("div",{id:"base-timer-label",className:"base-timer__label",children:[Object(h.jsx)(H,{timerSoundEffectUrl:this.props.timerSoundEffectUrl}),Object(h.jsx)(F,{timerSoundEffectUrl:this.props.timerSoundEffectUrl,started:this.state.started,soundEffectName:this.state.soundEffectName,timerSoundEffectName:this.props.timerSoundEffectName}),Object(h.jsx)(U,{started:this.state.started,formatTimeLeft:P,hoursLeft:this.state.hoursLeft,minutesLeft:this.state.minutesLeft,secondsLeft:this.state.secondsLeft,timerHours:this.props.timerHours,timerMinutes:this.props.timerMinutes,timerSeconds:this.props.timerSeconds}),Object(h.jsx)(_,{started:this.state.started,name:this.state.name,timerName:this.props.timerName})]}),Object(h.jsx)(I,{started:this.state.started,isOn:this.state.isOn,timeLeft:this.state.timeLeft,startTimer:this.startTimer,pauseTimer:this.pauseTimer,resetTimer:this.resetTimer}),!this.state.timeLeft&&Object(h.jsx)(K.a,{url:this.state.soundEffectUrl,playStatus:K.a.status.PLAYING,onLoading:this.handleSongLoading,onPlaying:this.handleSongPlaying,onFinishedPlaying:this.handleSongFinishedPlaying})]})}}]),s}(i.Component),G=s(79),V=s(65),X=function(t){var e=t.handleClick;return Object(h.jsxs)(G.a,{container:"body",style:{zIndex:1e4},children:[Object(h.jsx)(V.a,{onClick:e,"data-url":"bbc_aircraft--_07000116.mp3",children:"Aircraft"}),Object(h.jsx)(V.a,{onClick:e,"data-url":"bbc_applause--_07047083.mp3",children:"Applause"}),Object(h.jsx)(V.a,{onClick:e,"data-url":"bbc_domestic-c_07022028.mp3",children:"Domestic"}),Object(h.jsx)(V.a,{onClick:e,"data-url":"bbc_heavy-expl_07023360.mp3",children:"Heavy Explosion"}),Object(h.jsx)(V.a,{onClick:e,"data-url":"bbc_sirens-and_07027201.mp3",children:"Sirens and Bells"}),Object(h.jsx)(V.a,{onClick:e,"data-url":"",children:"None"})]})},Z=function(t){var e=t.inputSoundEffectName,s=t.errMess;return Object(h.jsxs)(n.a.Fragment,{children:[e&&Object(h.jsx)("div",{className:"text-primary mb-3",children:e}),null!==s&&Object(h.jsx)("div",{className:"text-danger mb-3",children:s})]})},W=s(77),J=function(t){Object(l.a)(s,t);var e=Object(m.a)(s);function s(t){var i;return Object(c.a)(this,s),(i=e.call(this,t)).state={inputHours:"0",inputMinutes:"1",inputSeconds:"30",inputTimerName:"",inputSoundEffectName:"",inputSoundEffectUrl:"",timers:[],modal:!1,errMess:null,dropdownOpen:!1},i.toggleModal=i.toggleModal.bind(Object(b.a)(i)),i.handleChange=i.handleChange.bind(Object(b.a)(i)),i.toggleDropDown=i.toggleDropDown.bind(Object(b.a)(i)),i.handleClick=i.handleClick.bind(Object(b.a)(i)),i.handleSubmit=i.handleSubmit.bind(Object(b.a)(i)),i}return Object(o.a)(s,[{key:"toggleModal",value:function(){this.setState({modal:!this.state.modal}),6===this.state.timers.length?this.setState({errMess:"Unfortunately, you cannot set additionnal timer :("}):this.state.inputHours+this.state.inputMinutes+this.state.inputSeconds==="000"?this.setState({errMess:"Please set a timer with at least one second ;)"}):this.setState({errMess:null})}},{key:"handleChange",value:function(t){var e=t.target,s=e.name,i=e.value;this.setState(Object(j.a)({},s,i))}},{key:"toggleDropDown",value:function(){this.setState({dropdownOpen:!this.state.dropdownOpen})}},{key:"handleClick",value:function(t){var e=t.target;this.setState({inputSoundEffectName:e.innerText,inputSoundEffectUrl:e.dataset.url})}},{key:"handleSubmit",value:function(t){t.preventDefault(),B(this.state.inputHours,this.state.inputMinutes,this.state.inputSeconds)>0&&this.state.timers.length<=5?(this.setState((function(t){return{timers:[].concat(Object(f.a)(t.timers),[{timerHours:t.inputHours,timerMinutes:t.inputMinutes,timerSeconds:t.inputSeconds,timerName:t.inputTimerName,timerSoundEffectName:t.inputSoundEffectName,timerSoundEffectUrl:t.inputSoundEffectUrl,timerID:Object(W.a)()}]),errMess:null}})),this.toggleModal()):6===this.state.timers.length?this.setState({errMess:"Unfortunately, you cannot set additionnal timer :("}):this.setState({errMess:"Please set a timer with at least one second ;)"})}},{key:"delete",value:function(t){var e=this.state.timers.filter((function(e){return e.timerID!==t.timerID}));this.setState({timers:e})}},{key:"render",value:function(){var t=this,e=this.state.timers.map((function(e){return Object(h.jsx)(p.a,{className:"bg-transparent border-0 ml-5 mr-5",children:Object(h.jsxs)(O.a,{className:"p-0",children:[Object(h.jsx)(x.a,{children:Object(h.jsx)(g.a,{className:"text-info",onClick:t.delete.bind(t,e),close:!0})}),Object(h.jsx)(z,{timerHours:e.timerHours,timerMinutes:e.timerMinutes,timerSeconds:e.timerSeconds,timerName:e.timerName,timerSoundEffectName:e.timerSoundEffectName,timerSoundEffectUrl:e.timerSoundEffectUrl,computeTotalTimeInSeconds:B})]})},e.timerID)}));return Object(h.jsxs)("div",{className:"container",children:[Object(h.jsxs)("div",{className:"row justify-content-center mb-5",children:[Object(h.jsx)(g.a,{color:"info",outline:!0,className:"font-button glow",onClick:this.toggleModal,children:"New Timer"}),Object(h.jsxs)(S.a,{isOpen:this.state.modal,toggle:this.toggleModal,onSubmit:this.handleSubmit,children:[Object(h.jsx)(N.a,{toggle:this.toggleModal,className:"text-primary",children:"Set a timer"}),Object(h.jsx)(v.a,{children:Object(h.jsxs)(L.a,{className:"col text-center",children:[Object(h.jsxs)(y.a,{children:[Object(h.jsx)(C.a,{for:"inputHours",className:"text-info",children:this.state.inputHours>1?this.state.inputHours+" hours":this.state.inputHours+" hour"}),Object(h.jsx)(A.a,{type:"range",id:"inputHours",name:"inputHours",min:"0",max:"23",value:this.state.inputHours,onChange:this.handleChange,onInput:this.handleChange})]}),Object(h.jsxs)(y.a,{children:[Object(h.jsx)(C.a,{for:"inputMinutes",className:"text-info",children:this.state.inputMinutes>1?this.state.inputMinutes+" minutes":this.state.inputMinutes+" minute"}),Object(h.jsx)(A.a,{type:"range",id:"inputMinutes",name:"inputMinutes",min:"0",max:"59",value:this.state.inputMinutes,onChange:this.handleChange,onInput:this.handleChange})]}),Object(h.jsxs)(y.a,{children:[Object(h.jsxs)(C.a,{for:"inputSeconds",className:"text-info",children:[this.state.inputSeconds," s"]}),Object(h.jsx)(A.a,{type:"range",id:"inputSeconds",name:"inputSeconds",min:"0",max:"59",value:this.state.inputSeconds,onChange:this.handleChange,onInput:this.handleChange})]}),Object(h.jsx)(M.a,{type:"text",id:"inputTimerName",name:"inputTimerName",placeholder:"Name this timer",value:this.state.inputTimerName,onChange:this.handleChange,onInput:this.handleChange,className:"mb-3"}),Object(h.jsxs)(T.a,{isOpen:this.state.dropdownOpen,toggle:this.toggleDropDown,className:"mb-3",children:[Object(h.jsx)(E.a,{caret:!0,color:"primary",children:"Add a Sound Effect"}),Object(h.jsx)(X,{handleClick:this.handleClick})]}),Object(h.jsx)(Z,{inputSoundEffectName:this.state.inputSoundEffectName,errMess:this.state.errMess}),Object(h.jsxs)(k.a,{children:[Object(h.jsx)(g.a,{type:"submit",value:"submit",color:"primary",children:"Go!"})," ",Object(h.jsx)(g.a,{color:"secondary",onClick:this.toggleModal,children:"Cancel"})]})]})})]})]}),Object(h.jsx)(w.a,{children:e})]})}}]),s}(i.Component),q=function(t){Object(l.a)(s,t);var e=Object(m.a)(s);function s(){return Object(c.a)(this,s),e.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(h.jsxs)(n.a.Fragment,{children:[Object(h.jsx)(d,{}),Object(h.jsx)(J,{})]})}}]),s}(i.Component),$=(s(61),function(t){Object(l.a)(s,t);var e=Object(m.a)(s);function s(){return Object(c.a)(this,s),e.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(h.jsx)(q,{})}}]),s}(i.Component)),tt=function(t){t&&t instanceof Function&&s.e(3).then(s.bind(null,83)).then((function(e){var s=e.getCLS,i=e.getFID,n=e.getFCP,a=e.getLCP,r=e.getTTFB;s(t),i(t),n(t),a(t),r(t)}))};r.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)($,{})}),document.getElementById("root")),tt()}},[[62,1,2]]]);
//# sourceMappingURL=main.a0e54136.chunk.js.map