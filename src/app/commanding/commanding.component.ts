import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { environment } from '../../environments/environment';

import { Command, Param } from './command';
import { CommandService } from './command.service';

@Component({
  selector: 'app-commanding',
  templateUrl: './commanding.component.html',
  styleUrls: ['./commanding.component.css']
})
export class CommandingComponent implements OnInit {

  command: Command = {} as Command;
  loadCmdResponse: string = '';

	commandDocURL = environment.commandDocURL;

  loadCmdForm = this.formBuilder.group({
    cmdName: '',
    p1Name: '',
    p1Value: '',
    p2Name: '',
    p2Value: '',
    p3Name: '',
    p3Value: '',
    p4Name: '',
    p4Value: '',
    p5Name: '',
    p5Value: '',
    p6Name: '',
    p6Value: ''
  });

  constructor(private formBuilder: FormBuilder,
              private commandService: CommandService) { }

  ngOnInit(): void {
  }

  onLoadCmd(): void {
    console.log('Your order has been submitted', this.loadCmdForm.value);
    this.command.name = this.loadCmdForm.value.cmdName!; 
    this.command.params = new Array<Param>();
    let param1: Param = {name: this.loadCmdForm.value.p1Name!, value: this.loadCmdForm.value.p1Value!};
    this.command.params.push(param1);
    let param2: Param = {name: this.loadCmdForm.value.p2Name!, value: this.loadCmdForm.value.p2Value!};
    this.command.params.push(param2);
    let param3: Param = {name: this.loadCmdForm.value.p3Name!, value: this.loadCmdForm.value.p3Value!};
    this.command.params.push(param3);
    let param4: Param = {name: this.loadCmdForm.value.p4Name!, value: this.loadCmdForm.value.p4Value!};
    this.command.params.push(param4);
    let param5: Param = {name: this.loadCmdForm.value.p5Name!, value: this.loadCmdForm.value.p5Value!};
    this.command.params.push(param5);
    let param6: Param = {name: this.loadCmdForm.value.p6Name!, value: this.loadCmdForm.value.p6Value!};
    this.command.params.push(param6);
    console.log(JSON.stringify(this.command));
    this.loadCmdForm.reset();

    this.commandService.loadCommand(this.command).subscribe(
      response => this.loadCmdResponse = JSON.stringify(response)
    );
  }

}
