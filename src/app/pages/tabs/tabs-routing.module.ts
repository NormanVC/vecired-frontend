import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { MisCertificadosPageModule } from '../mis-certificados/mis-certificados.module';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'acuerdos',
        loadChildren: () => import('../acuerdos/acuerdos.module').then(m => m.AcuerdosPageModule)
      },
      {
        path: 'crear-aviso',
        loadChildren: () => import('../crear-aviso/crear-aviso.module').then(m => m.CrearAvisoPageModule)
      },
      {
        path: 'crear-acuerdo',
        loadChildren: () => import('../crear-acuerdo/crear-acuerdo.module').then( m => m.CrearAcuerdoPageModule)
      },
      {
        path: 'opciones',
        loadChildren: () => import('../opciones/opciones.module').then( m => m.OpcionesPageModule)
      },
      {
        path: 'votaciones',
        loadChildren: () => import('../votaciones/votaciones.module').then( m => m.VotacionesPageModule)
      },
      {
        path: 'detalle-votacion',
        loadChildren: () => import('../detalle-votacion/detalle-votacion.module').then( m => m.DetalleVotacionPageModule)
      },
      {
        path: 'editar-acuerdo',
        loadChildren: () => import('../editar-acuerdo/editar-acuerdo.module').then( m => m.EditarAcuerdoPageModule)
      },
      {
        path: 'editar-opciones',
        loadChildren: () => import('../editar-opciones/editar-opciones.module').then( m => m.EditarOpcionesPageModule)
      },
      {
        path: 'mis-avisos',
        loadChildren: () => import('../mis-avisos/mis-avisos.module').then( m => m.MisAvisosPageModule)
      },
      {
        path: 'editar-aviso',
        loadChildren: () => import('../editar-aviso/editar-aviso.module').then( m => m.EditarAvisoPageModule)
      },
      {
        path: 'comunidad',
        loadChildren: () => import('../comunidad/comunidad.module').then( m => m.ComunidadPageModule)
      },
      {
        path: 'crear-com',
        loadChildren: () => import('../crear-com/crear-com.module').then( m => m.CrearComPageModule)
      },
      {
        path: 'editar-com',
        loadChildren: () => import('../editar-com/editar-com.module').then( m => m.EditarComPageModule)
      },
      {
        path: 'buscar-com',
        loadChildren: () => import('../buscar-com/buscar-com.module').then( m => m.BuscarComPageModule)
      },
      {
        path: 'info',
        loadChildren: () => import('../info/info.module').then( m => m.InfoPageModule)
      },
      {
        path: 'registros-acuerdos',
        loadChildren: () => import('../registros-acuerdos/registros-acuerdos.module').then( m => m.RegistrosAcuerdosPageModule)
      },
      {
        path: 'solicitud',
        loadChildren: () => import('../solicitud/solicitud.module').then( m => m.SolicitudPageModule)
      },
      {
        path: 'gestionar',
        loadChildren: () => import('../gestionar/gestionar.module').then( m => m.GestionarPageModule)
      },
      {
        path: 'condiciones',
        loadChildren: () => import('../condiciones/condiciones.module').then( m => m.CondicionesPageModule)
      },
      {
        path: 'mis-certificados',
        loadChildren: () => import('../mis-certificados/mis-certificados.module').then(m=> m.MisCertificadosPageModule)
      },
      {
        path: 'editar-certificado',
        loadChildren: () => import('../editar-certificado/editar-certificado.module').then( m => m.EditarCertificadoPageModule)
      },
      {
        path: 'gest-cert',
        loadChildren: () => import('../gest-cert/gest-cert.module').then( m => m.GestCertPageModule)
      },
      {
        path: 'estado-cert',
        loadChildren: () => import('../estado-cert/estado-cert.module').then( m => m.EstadoCertPageModule)
      },
      {
        path: 'crear-cert',
        loadChildren: () => import('../crear-cert/crear-cert.module').then( m => m.CrearCertPageModule)
      },
      {
        path: 'solicitar-cert',
        loadChildren: () => import('../solicitar-cert/solicitar-cert.module').then( m => m.SolicitarCertPageModule)
      },
      {
        path: 'ops-cert',
        loadChildren: () => import('../ops-cert/ops-cert.module').then( m => m.OpsCertPageModule)
      },
      {
        path: 'ver-doc',
        loadChildren: () => import('../ver-doc/ver-doc.module').then( m => m.VerDocPageModule)
      },
      {
        path: 'loader',
        loadChildren: () => import('../loader/loader.module').then(m => m.LoaderPageModule)
      },
      {
        path: 'codigo-qr',
        loadChildren: () => import('../codigo-qr/codigo-qr.module').then(m => m.CodigoQrPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
