import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsIcon, AsIconDirective } from './icon.component'

@NgModule({
    imports: [ CommonModule ],
    exports: [ AsIcon, AsIconDirective ],
    declarations: [ AsIcon, AsIconDirective ]
})

export class AsIconModule {}
