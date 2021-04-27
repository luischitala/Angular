import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    // Que cosas queremos hacer publicas
    exports: [
        ListadoComponent
    ],
    // Solo Modulos
    imports: [
        // Nos permite usar ngif ngfor
        CommonModule
    ]
})
export class HeroesModule {}