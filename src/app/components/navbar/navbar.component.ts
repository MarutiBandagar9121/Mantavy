import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  menuOpen = false;
  
  // Sample dropdown items, replace with your actual items
  dropdownItems = [
    { title: 'Services', items: ['Design', 'Printing & Digital Media', 'Web Development'] },
    { title: 'Work Portfolio', items: ['Our Design Portfolio', 'Print Work', 'Website Portfolio'] }
  ];
  
  // Sample menu items, replace with your actual items
  menuItems=[
    {linkText: 'Home', linkUrl: '/home'},
    {linkText: 'About', linkUrl: '/about'}, 
    {linkText: 'Contact Us', linkUrl: '/services'},
    {linkText: 'Get Our Portfolio', linkUrl: '/blog'},
  ]
  
  // Track which dropdown is open
  openDropdown: number | null = null;
  
  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }
  
  toggleDropdown(index: number): void {
    if (this.openDropdown === index) {
      this.openDropdown = null;
    } else {
      this.openDropdown = index;
    }
  }
  
  closeMenu(): void {
    this.menuOpen = false;
    this.openDropdown = null;
  }
}
