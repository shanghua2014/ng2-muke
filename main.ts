import 'reflect-metadata';    // 动态引导必要库，用来处理源数据相关
import 'zone.js';             // 用来检测ng2的变化检测

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app/app.module';

/**
 * platformBrowserDynamic() 动态引导
 */
platformBrowserDynamic().bootstrapModule(AppModule)
    .then(success => console.log(`Bootstrap success`))
    .catch(err => console.error(err));