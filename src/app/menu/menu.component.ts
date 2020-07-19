import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  items: MenuItem[];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'Postacie',
        items: [
          { label: 'Człowiek' },
          { label: 'Elf' },
          { label: 'Krasnolud' },
          { label: 'Goblin' },
          { label: 'Ork' },
          { label: 'Inne' },
        ],
      },
      {
        label: 'Lokacje',
        command: () => this.toRoute('locationsList'),
      },
      {
        label: 'Dodaj pozycję',
        items: [
          {
            label: 'Dodaj postać',
            command: () => this.toRoute('locationsList'),
          },

          {
            label: 'Dodaj lokację',
            command: () => this.toRoute('addLocation'),
          },
        ],
      },
      {
        label: 'O nas',
      },
    ];
  }

  toRoute(page: string): void {
    this.router.navigateByUrl(page);
  }
}
