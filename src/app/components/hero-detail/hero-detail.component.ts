import { Component, OnInit } from '@angular/core'
import { NgForm } from '@angular/forms'
import { Hero } from "../../models/hero.model"
import  Swal  from "sweetalert2"
import { Observable } from 'rxjs'
import { HeroDBService } from 'src/app/services/hero.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero = new Hero()

  constructor(
    private _heroDBServices: HeroDBService,
    private _route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this._route.snapshot.paramMap.get('id');

    if (id !== 'new') {
      this._heroDBServices.getHero(id).subscribe(
        (answer: Hero) => {
          this.hero = answer;
          this.hero.id = id;
        }
      )
    }
  }

  save( form: NgForm) {
    if (form.invalid) {
      console.log('Formulario no valido')
      return
    } 
    
    Swal.fire({
      title: 'Espere',
      text: 'Guardando Informacion',
      allowOutsideClick: false
    })
    Swal.showLoading()

    let peticion: Observable<any>

    if (this.hero.id) {
      peticion = this._heroDBServices.updateHero(this.hero)
    } else {
      peticion = this._heroDBServices.createHero(this.hero)
    }
    
    peticion.subscribe(resp => {
      Swal.fire({
        title: this.hero.nombre,
        text: 'Se actualizo Correctamente'
      })
    } )

  }
}
