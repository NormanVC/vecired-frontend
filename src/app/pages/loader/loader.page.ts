import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Emisor } from 'src/app/interfaces/interfaces';
import { Subscription } from 'rxjs';
import { EmisorService } from 'src/app/servicios/emisor.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.page.html',
  styleUrls: ['./loader.page.scss'],
})
export class LoaderPage implements OnInit, OnDestroy {
  emisor: Emisor = {};
  private emisorSubscription: Subscription;
  private redireccionado = false;

  constructor(
    private ruta: Router,
    private emisorService: EmisorService
  ) { }

  ngOnInit() {
    this.destruirEmisor();
    this.redirect();
  }

  ngOnDestroy() {
    if (this.emisorSubscription) {
      this.emisorSubscription.unsubscribe();
    }
  }

  async redirect() {
    if (!this.redireccionado) {
      const retrasoEnMilisegundos = 3000; //(2 segundos)

      await this.delay(retrasoEnMilisegundos);

      this.redireccionado = true;

      try {
        this.ruta.navigateByUrl('/main/tabs/estado-cert?nocache=' + new Date().getTime());
      } catch (error) {
        console.error('Error durante la redirección:', error);
      }
    }
  }

  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  private destruirEmisor() {
    this.emisorSubscription = this.emisorService.Objeto.subscribe((respuesta: any) => {
      this.emisor = respuesta;
    });
  }
}
