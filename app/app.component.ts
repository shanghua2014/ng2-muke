/**
 * 这是一个普通的组件
 */
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-app',    // 组件名称
    templateUrl: './app/app.component.html'    // 组件模板
})

export class AppComponent implements OnInit {
    private greeting:string;
    constructor() {}

    ngOnInit() {
        this.greeting = 'Angular 2组件 ';
    }
}