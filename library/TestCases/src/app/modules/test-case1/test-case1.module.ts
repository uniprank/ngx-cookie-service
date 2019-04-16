import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarkdownModule } from 'ngx-markdown';

import { NgxCookieServiceModule } from '@uniprank/ngx-cookie-service';

import { TestCase1RoutingModule } from './test-case1-routing.module';
import { TestCase1Component } from './test-case1.component';

@NgModule({
    declarations: [TestCase1Component],
    imports: [CommonModule, MarkdownModule, TestCase1RoutingModule, NgxCookieServiceModule.forRoot()]
})
export class TestCase1Module {}
