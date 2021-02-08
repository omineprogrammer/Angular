import { RouterModule, Routes } from "@angular/router"
import { HomeComponent } from "./components/home/home.component"
import { AboutComponent } from "./components/about/about.component"
import { HeroesComponent } from "./components/heroes/heroes.component"
import { VillainsComponent } from "./components/villains/villains.component"
import { HeroDetailComponent } from "./components/hero-detail/hero-detail.component"
import { SearcherComponent } from "./components/searcher/searcher.component"
import { HeroNewComponent } from "./components/hero-new/hero-new.component"

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'heroes', component: HeroesComponent }, 
    { path: 'hero', component: HeroDetailComponent },
    { path: 'hero/:id', component: HeroDetailComponent },
    { path: 'villains', component: VillainsComponent },
    { path: 'hero/search/:expression', component: SearcherComponent },
    { path: 'villain/search/:expression', component: SearcherComponent },
    { path: 'about', component: AboutComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true})
