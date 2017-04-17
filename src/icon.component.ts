import { Component, Directive, Input, ElementRef, ViewEncapsulation } from '@angular/core'
import classNames from 'classnames';

@Directive({
    selector: "[as-button]"
})
export class AsIconDirective {
    constructor(private el: ElementRef){}

    @Input() type: string;

    ngOnInit(){
        this.updateClass()
    }
    private updateClass = () => {
        const {
            type
        } = this;
        this.el.nativeElement.className = classNames({
            anticon: true,
            [`anticon-${type}`]: true
        })
    }
}

@Component({
    moduleId: module.id,
    selector: '[as-icon]',
    templateUrl: './icon.component.html',
    styleUrls: ['./assets/icon.css'],
    encapsulation: ViewEncapsulation.None
})
export class AsIcon {}
