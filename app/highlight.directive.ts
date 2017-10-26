/**
 * 导入 ElementRef, Renderer 模块，辅助渲染
 */
import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
    selector: 'highlight',
})
export class HighlightDirective { 
    constructor (el:ElementRef) {
        alert(111)
        el.nativeElement.style.backgroundColor = 'green';
    }
}