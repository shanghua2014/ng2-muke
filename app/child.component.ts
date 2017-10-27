/**
 * Input 装饰器，用来接收父级数据
 * Output 装饰器，用来传递数据给父级，需要与 EventEmitter 配合使用
 */
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'child',
    templateUrl: './app/child.component.html'
})

export class ChildComponent implements OnInit {
    @Input() private message: string;
    @Output() private outer = new EventEmitter<string>();
    
    ngOnInit() { }
    sendToParent() {
        this.outer.emit('message from child');
    }
}