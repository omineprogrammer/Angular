import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from 'src/app/models/hero.model';
import { HeroDBService } from 'src/app/services/hero.service';
import { getBSClassFromCasa } from 'src/app/tools/tools';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = []
  loading = true

  constructor(
    private _heroesService: HeroDBService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this._heroesService.getHeroes().subscribe(
      answer => {
        this.heroes = answer;
        this.loading = false;
      }
    )
  }

  getHero(i: number) {
    return this.heroes[i]
  }

  getBSClassFromCasa = getBSClassFromCasa

  viewDetail(id: string) {
    this._router.navigate(["/hero", id])
  }

}
