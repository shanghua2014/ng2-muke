/**
 * 应用的根模块
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { HighlightDirective } from './highlight.directive';

@NgModule({
    declarations: [    // 引入自定义指令
        AppComponent,
        HighlightDirective
    ],
    imports: [    // 引入模块
        BrowserModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule {}