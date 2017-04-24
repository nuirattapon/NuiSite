import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';


import { CvComponent } from './cv/cv.component'
import { PagenotfoundComponent} from './shared/pagenotfound/pagenotfound.component'

const routes: Routes = [

  { path: 'cv', component: CvComponent },
  //{ path: 'blog', component: BlogComponent },
  { path: 'blog', loadChildren: './blog/blog.module#BlogModule' },
  { path: 'blog/:id', loadChildren: './blog/blog.module#BlogModule' },
  { path: '', component: CvComponent },
  { path: '**', component: PagenotfoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routableComponents = [

];