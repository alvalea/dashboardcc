"use strict";(self.webpackChunkdashboardcc=self.webpackChunkdashboardcc||[]).push([[291],{8291:(p,s,n)=>{n.r(s),n.d(s,{TelemetryModule:()=>a});var i=n(9845),e=n(1514),c=n(4522),l=n(8260);let u=(()=>{class t{constructor(o){this.http=o,this.token=l.N.token,this.historyURL=l.N.historyURL}history(){return this.http.get(this.historyURL,{headers:new c.WM({Authorization:this.token,"Content-Type":"application/json"})})}}return t.\u0275fac=function(o){return new(o||t)(e.LFG(c.eN))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const m=[{path:"",component:(()=>{class t{constructor(o){this.historyService=o,this.history=""}ngOnInit(){}getTM(){this.historyService.history().subscribe(o=>this.history=JSON.stringify(o))}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(u))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-telemetry"]],decls:6,vars:1,consts:[["type","button",3,"click"]],template:function(o,y){1&o&&(e.TgZ(0,"p"),e._uU(1,"Telemetry"),e.qZA(),e.TgZ(2,"button",0),e.NdJ("click",function(){return y.getTM()}),e._uU(3,"Retrieve TM"),e.qZA(),e._UZ(4,"br"),e._uU(5)),2&o&&(e.xp6(5),e.hij("\n",y.history,"\n"))},styles:[""]}),t})()}];let h=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[i.Bz.forChild(m)],i.Bz]}),t})(),a=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[h]]}),t})()}}]);