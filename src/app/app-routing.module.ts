import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { UsuarioGuard } from './servicios/usuario.guard';
import { ValidatePage } from './pages/validate/validate.page';

const routes: Routes = [
  {
    path: 'main',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule),
    canLoad: [UsuarioGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'main/tabs/tab1'
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'verificador',
    loadChildren: () => import('./pages/verificador/verificador.module').then( m => m.VerificadorPageModule)
  },
  {
    path:'validate',
    loadChildren: () => import('./pages/validate/validate.module').then(m => m.ValidatePageModule)
  },
  {
    path: 'validate/:idSolicitud',
    component: ValidatePage,
  },





];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
