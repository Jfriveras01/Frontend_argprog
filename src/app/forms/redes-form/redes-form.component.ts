import { Component, EventEmitter, Input, Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Redes } from 'src/app/model/redes';

@Component({
  selector: 'app-redes-form',
  templateUrl: './redes-form.component.html',
  styleUrls: ['./redes-form.component.css']
})
export class RedesFormComponent {
  @Input() redes?:Redes;
  @Output() onSaveRedes: EventEmitter<Redes> = new EventEmitter();
  @Output() onDeleteRedes: EventEmitter<Redes> = new EventEmitter();

  redesForm: FormGroup;
 

  constructor(private formBuilder: FormBuilder) {
    this.redesForm = this.formBuilder.group ({
      url_s:['',[Validators.required]],

    })
  }

  onSave(){
    if(this.redes){
      this.redes.url = this.redesForm.value.url_s
      this.onSaveRedes.emit(this.redes)
      this.redesForm.reset()
    }
  }

  onDelete(redes:Redes){
    this.onDeleteRedes.emit(redes)
    console.log(redes);
    
  }
}
