/**
 * 这是一个普通的组件
 */
import { Component, OnInit } from '@angular/core';
import { LoggerService } from './logger.service';
@Component({
    selector: 'my-app',    // 组件名称
    templateUrl: './app/app.component.html'    // 组件模板
})

export class AppComponent implements OnInit {
    private greeting: string;
    private msgToChild: string;
    private msgFromChild: string;
    constructor(private log: LoggerService) { }

    ngOnInit() {
        this.log.debug('组件初始化完成！');
        this.msgToChild = '哈哈哈，父级传给子级';
        this.greeting = 'Angular 2组件 ';
    }
    receive(msg: string) {
        this.msgFromChild = msg;
    }
}