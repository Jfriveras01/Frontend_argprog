import { Component, OnInit} from '@angular/core';
import { RedesService} from '../Services/redes.service';
import { Redes } from '../model/redes';
import { Router } from '@angular/router';
import { TokenService } from '../Services/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLogged = false;

  networks: Redes[] = [];

  constructor(private redesService:RedesService, private router:Router, private tokenSerice:TokenService) { }

  ngOnInit(): void {
      this.redesService.getRedes().subscribe((networks)=>[
        this.networks = networks
      ])
      
      if(this.tokenSerice.getToken()){
        this.isLogged = true;
      }else{
        this.isLogged = false;
      }
  }

  onLogOut():void{
    this.tokenSerice.logOut();
    window.location.reload();
  }

  login(){
    this.router.navigate(['/login'])

  }
}
