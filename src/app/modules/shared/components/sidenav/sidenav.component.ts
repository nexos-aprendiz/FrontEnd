import { MediaMatcher } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  mobileQuery: MediaQueryList;
  username: any;

  menuNav = [
    {name: "Home", route: "home", icon: "home"},
    {name: "Empleado", route: "empleado", icon: "persona"},
    {name: "Mercancia", route: "mercancia", icon: "directions_car"},
    {name: "Cargos", route: "cargos", icon: "group"},
    {name: "Historial mercancia", route: "historial mercancia", icon: "work_history"}
  ]

  constructor(media: MediaMatcher, private keycloakService: KeycloakService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
  }
  shouldRun = true;

  ngOnInit(): void {
    this.username = this.keycloakService.getUsername();
  }

  logout(){
    this.keycloakService.logout();
  }
}

