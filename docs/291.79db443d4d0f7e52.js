"use strict";(self.webpackChunkdashboardcc=self.webpackChunkdashboardcc||[]).push([[291],{8291:(d,i,n)=>{n.r(i),n.d(i,{TelemetryModule:()=>p});var u=n(5427),s=n(4522),l=n(9845),e=n(1514),c=n(8260);let m=(()=>{class t{constructor(o){this.http=o,this.token=c.N.token,this.historyURL=c.N.historyURL}history(){return this.http.get(this.historyURL,{headers:new s.WM({Authorization:this.token,"Content-Type":"application/json"})})}}return t.\u0275fac=function(o){return new(o||t)(e.LFG(s.eN))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const h=[{path:"",component:(()=>{class t{constructor(o){this.historyService=o,this.history=""}ngOnInit(){}getTM(){this.historyService.history().subscribe(o=>this.history=JSON.stringify(o))}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(m))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-telemetry"]],decls:6,vars:1,consts:[["type","button",3,"click"]],template:function(o,y){1&o&&(e.TgZ(0,"p"),e._uU(1,"Telemetry"),e.qZA(),e.TgZ(2,"button",0),e.NdJ("click",function(){return y.getTM()}),e._uU(3,"Retrieve TM"),e.qZA(),e._UZ(4,"br"),e._uU(5)),2&o&&(e.xp6(5),e.hij("\n",y.history,"\n"))},styles:[""]}),t})()}];let a=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[l.Bz.forChild(h)],l.Bz]}),t})(),p=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[u.b2,s.JF,a]]}),t})()}}]);