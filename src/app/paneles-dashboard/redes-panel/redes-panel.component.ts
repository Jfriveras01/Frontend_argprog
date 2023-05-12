import { Component, OnInit } from '@angular/core';
import { RedesService } from 'src/app/Services/redes.service';
import { Redes } from 'src/app/model/redes';

@Component({
  selector: 'app-redes-panel',
  templateUrl: './redes-panel.component.html',
  styleUrls: ['./redes-panel.component.css']
})
export class RedesPanelComponent implements OnInit {

  redes: Redes[] = [];

  onAddingRE:boolean = false;


  constructor(private redesService: RedesService) { }

  ngOnInit(): void {

    this.redesService.getRedes().subscribe((redes)=>[
      this.redes = redes
    ])
  }

  toggleOnAddingRE(){
    this.onAddingRE =! this.onAddingRE;
  }

  saveRedesChanges(redes:Redes){
    this.redesService.updateRedes(redes).subscribe();
    alert("Red Modificada")
  }

  // addRedes(redes:Redes){
  //   this.redesService.addRedes(redes).subscribe((redes)=>[
  //     this.redes.push(redes)
  //   ])
  //   this.toggleOnAddingRE()
  // }

  // removeRedes(redes:Redes){
  //   this.redesService.deleteRedes(redes).subscribe(()=>[
  //     this.redes = this.redes.filter( (s) => s.id !== redes.id)
  //   ])
  //   alert(redes.red + ": Removida")
  // }

}
