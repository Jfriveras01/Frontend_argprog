import { Component, OnInit} from '@angular/core';
import { RedesService} from '../Services/redes.service';
import { Redes } from '../model/redes';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  networks: Redes[] = [];

  constructor(private redesService:RedesService) { }

  ngOnInit(): void {
      this.redesService.getRedes().subscribe((networks)=>[
        this.networks = networks
      ])
        
  }

}
