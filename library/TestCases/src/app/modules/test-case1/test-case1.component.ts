import { Component, OnInit, ElementRef } from '@angular/core';

import * as Stickyfill from 'stickyfilljs';

import { CookieService } from '@uniprank/ngx-cookie-service';

@Component({
    selector: 'uni-test-case1',
    templateUrl: './test-case1.component.html',
    styleUrls: ['./test-case1.component.scss']
})
export class TestCase1Component implements OnInit {
    public markdown = require('raw-loader!./README.md');
    constructor(private _host: ElementRef, private _cookieService: CookieService) {}

    ngOnInit() {
        Stickyfill.add(this._host.nativeElement.querySelector('nav'));
    }

    setCookie(
        name: string,
        value: string,
        expires?: number | Date,
        path?: string,
        domain?: string,
        secure?: boolean,
        sameSite?: 'Lax' | 'Strict'
    ) {
        this._cookieService.set(name, value, expires, path, domain, secure, sameSite);
    }

    getAll(): { [id: string]: any } {
        return this._cookieService.getAll();
    }

    deleteCookie(name: string, path?: string, domain?: string) {
        this._cookieService.delete(name, path, domain);
    }
}
