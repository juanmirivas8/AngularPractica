import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import { INote } from '../../model/INote';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
   @Input('note') public note:INote = {
    id:-1,
    title:'',
    description:''
  };

  @Output() editNote = new EventEmitter<INote>();
  @Output() removeNote = new EventEmitter<INote>();
  @ViewChild('boton') boton:any;
  constructor() {
   }

  ngOnInit(): void {
    console.log("NGONINIT")
  }
  ngAfterContentInit(){
    console.log("NGAFTERCONTENTINIT");
  }

  public editNoteFn(){
    if(this.note.id==-1) return;
    this.editNote.emit(this.note);
  }
  public removeNoteFn(){
    if(this.note.id==-1) return;
    this.removeNote.emit(this.note);
  }

}
