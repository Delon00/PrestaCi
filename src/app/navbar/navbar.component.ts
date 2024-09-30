import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule,  } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isScrolled = false;
  isMenuOpen = false;

  toggleMenu() {this.isMenuOpen = !this.isMenuOpen;}
  constructor() {}

  ngOnInit(): void {}

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    
    if (scrollY > 50) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }
}
