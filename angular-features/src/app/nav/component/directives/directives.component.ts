import { Component } from '@angular/core';
import { Hero, heroes } from './hero';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent {
  color: string;
  heroes = heroes;
  hero = this.heroes[0];
  condition = false;
  logs: string[] = [];
  showSad = true;
  status = 'ready';

  trackById(index: number, hero: Hero): number {
    return hero.id;
  }
}
