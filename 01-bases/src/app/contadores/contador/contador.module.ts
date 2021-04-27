import {NgModule} from '@angular/core';
import { ContadorComponent } from './contador.component';

@NgModule({
    declarations: [
        ContadorComponent
    ],
    // Que cosas queremos hacer publicas
    exports: [
        ContadorComponent
    ],
    // Solo Modulos
    
})
export class ContadorModule {}