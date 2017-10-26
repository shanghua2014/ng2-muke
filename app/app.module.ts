/**
 * 应用的根模块
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { HighlightDirective } from './highlight.directive';
import { LoggerService } from './logger.service';

@NgModule({
    declarations: [    // 引入自定义指令
        AppComponent,
        HighlightDirective
    ],
    imports: [    // 引入模块
        BrowserModule,
        FormsModule
    ],
    providers: [ LoggerService ],    // 注入服务
    bootstrap: [ AppComponent ]
})
export class AppModule {}