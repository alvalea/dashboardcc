"use strict";(self.webpackChunkdashboardcc=self.webpackChunkdashboardcc||[]).push([[464],{7464:(p,i,n)=>{n.r(i),n.d(i,{TelemetryModule:()=>a});var s=n(7581),e=n(1571),c=n(529),l=n(2340);let y=(()=>{class t{constructor(o){this.http=o,this.token=l.N.token,this.historyURL=l.N.historyURL}history(){return this.http.get(this.historyURL,{headers:new c.WM({Authorization:this.token,"Content-Type":"application/json"})})}}return t.\u0275fac=function(o){return new(o||t)(e.LFG(c.eN))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const m=[{path:"",component:(()=>{class t{constructor(o){this.historyService=o,this.history=""}ngOnInit(){}getTM(){this.historyService.history().subscribe(o=>this.history=JSON.stringify(o))}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(y))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-telemetry"]],decls:6,vars:1,consts:[["type","button",3,"click"]],template:function(o,u){1&o&&(e.TgZ(0,"p"),e._uU(1,"Telemetry"),e.qZA(),e.TgZ(2,"button",0),e.NdJ("click",function(){return u.getTM()}),e._uU(3,"Retrieve TM"),e.qZA(),e._UZ(4,"br"),e._uU(5)),2&o&&(e.xp6(5),e.hij("\n",u.history,"\n"))}}),t})()}];let h=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[s.Bz.forChild(m),s.Bz]}),t})(),a=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[h]}),t})()}}]);