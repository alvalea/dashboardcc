"use strict";(self.webpackChunkdashboardcc=self.webpackChunkdashboardcc||[]).push([[14],{5014:(Z,r,l)=>{l.r(r),l.d(r,{CommandingModule:()=>C});var p=l(7581),d=l(2340),a=l(1571),t=l(433),i=l(529);let s=(()=>{class e{constructor(m){this.http=m,this.token=d.N.token,this.commandURL=d.N.commandURL}loadCommand(m){let o=JSON.stringify(m);return this.http.post(this.commandURL,o,{headers:new i.WM({Authorization:this.token,"Content-Type":"application/json"})})}}return e.\u0275fac=function(m){return new(m||e)(a.LFG(i.eN))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const c=[{path:"",component:(()=>{class e{constructor(m,o){this.formBuilder=m,this.commandService=o,this.command={},this.loadCmdResponse="",this.commandDocURL=d.N.commandDocURL,this.loadCmdForm=this.formBuilder.group({cmdName:"",p1Name:"",p1Value:"",p2Name:"",p2Value:"",p3Name:"",p3Value:"",p4Name:"",p4Value:"",p5Name:"",p5Value:"",p6Name:"",p6Value:""})}ngOnInit(){}onLoadCmd(){console.log("Your order has been submitted",this.loadCmdForm.value),this.command.name=this.loadCmdForm.value.cmdName,this.command.params=new Array,this.command.params.push({name:this.loadCmdForm.value.p1Name,value:this.loadCmdForm.value.p1Value}),this.command.params.push({name:this.loadCmdForm.value.p2Name,value:this.loadCmdForm.value.p2Value}),this.command.params.push({name:this.loadCmdForm.value.p3Name,value:this.loadCmdForm.value.p3Value}),this.command.params.push({name:this.loadCmdForm.value.p4Name,value:this.loadCmdForm.value.p4Value}),this.command.params.push({name:this.loadCmdForm.value.p5Name,value:this.loadCmdForm.value.p5Value}),this.command.params.push({name:this.loadCmdForm.value.p6Name,value:this.loadCmdForm.value.p6Value}),console.log(JSON.stringify(this.command)),this.loadCmdForm.reset(),this.commandService.loadCommand(this.command).subscribe(v=>this.loadCmdResponse=JSON.stringify(v))}}return e.\u0275fac=function(m){return new(m||e)(a.Y36(t.qu),a.Y36(s))},e.\u0275cmp=a.Xpm({type:e,selectors:[["app-commanding"]],decls:45,vars:3,consts:[["target","_blank",3,"href"],[3,"formGroup","ngSubmit"],["for","cmdName"],["id","cmdName","type","text","formControlName","cmdName","placeholder","CMD02000"],["for","p1Name"],["id","p1Name","type","text","formControlName","p1Name","placeholder","PARAM000"],["id","p1Value","type","text","formControlName","p1Value","placeholder","1"],["for","p2Name"],["id","p2Name","type","text","formControlName","p2Name","placeholder","PARAM001"],["id","p2Value","type","text","formControlName","p2Value","placeholder","1"],["for","p3Name"],["id","p3Name","type","text","formControlName","p3Name","placeholder","PARAM002"],["id","p3Value","type","text","formControlName","p3Value","placeholder","1"],["for","p4Name"],["id","p4Name","type","text","formControlName","p4Name","placeholder","PARAM003"],["id","p4Value","type","text","formControlName","p4Value","placeholder","1"],["for","p5Name"],["id","p5Name","type","text","formControlName","p5Name","placeholder","PARAM004"],["id","p5Value","type","text","formControlName","p5Value","placeholder","1"],["for","p6Name"],["id","p6Name","type","text","formControlName","p6Name","placeholder","PARAM005"],["id","p6Value","type","text","formControlName","p6Value","placeholder","1"],["type","submit",1,"button"]],template:function(m,o){1&m&&(a.TgZ(0,"a",0),a._uU(1,"Commanding OpenAPI"),a.qZA(),a._UZ(2,"br")(3,"br"),a.TgZ(4,"h4"),a._uU(5,"Load Command"),a.qZA(),a.TgZ(6,"form",1),a.NdJ("ngSubmit",function(){return o.onLoadCmd()}),a.TgZ(7,"div")(8,"label",2),a._uU(9," Command Name "),a.qZA(),a._UZ(10,"input",3),a.qZA(),a.TgZ(11,"div")(12,"label",4),a._uU(13," Param1 "),a.qZA(),a._UZ(14,"input",5)(15,"input",6),a.qZA(),a.TgZ(16,"div")(17,"label",7),a._uU(18," Param2 "),a.qZA(),a._UZ(19,"input",8)(20,"input",9),a.qZA(),a.TgZ(21,"div")(22,"label",10),a._uU(23," Param3 "),a.qZA(),a._UZ(24,"input",11)(25,"input",12),a.qZA(),a.TgZ(26,"div")(27,"label",13),a._uU(28," Param4 "),a.qZA(),a._UZ(29,"input",14)(30,"input",15),a.qZA(),a.TgZ(31,"div")(32,"label",16),a._uU(33," Param5 "),a.qZA(),a._UZ(34,"input",17)(35,"input",18),a.qZA(),a.TgZ(36,"div")(37,"label",19),a._uU(38," Param6 "),a.qZA(),a._UZ(39,"input",20)(40,"input",21),a.qZA(),a.TgZ(41,"button",22),a._uU(42,"Load"),a.qZA()(),a._UZ(43,"br"),a._uU(44)),2&m&&(a.s9C("href",o.commandDocURL,a.LSH),a.xp6(6),a.Q6J("formGroup",o.loadCmdForm),a.xp6(38),a.hij("\n",o.loadCmdResponse,"\n"))},dependencies:[t._Y,t.Fj,t.JJ,t.JL,t.sg,t.u]}),e})()}];let h=(()=>{class e{}return e.\u0275fac=function(m){return new(m||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({imports:[p.Bz.forChild(c),p.Bz]}),e})(),C=(()=>{class e{}return e.\u0275fac=function(m){return new(m||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({imports:[t.u5,t.UX,h]}),e})()}}]);