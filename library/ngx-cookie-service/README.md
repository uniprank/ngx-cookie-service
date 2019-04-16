[![npm version](https://img.shields.io/npm/v/@uniprank/ngx-cookie-service.svg?style=flat)](https://www.npmjs.com/package/@uniprank/ngx-cookie-service)
[![npm downloads](https://img.shields.io/npm/dm/@uniprank/ngx-cookie-service.svg?style=flat)](https://npmjs.org/package/@uniprank/ngx-cookie-service)
[![npm license](https://img.shields.io/npm/l/@uniprank/ngx-cookie-service.svg)](https://npmjs.org/package/@uniprank/ngx-cookie-service)

This is an copy of an existing [project](https://github.com/7leads/ngx-cookie-service) because the other version doesn't fit with JEST and other testing setups.

See Examples here [Example](https://uniprank.github.io/ngx-cookie-service/test-cases)

## Installation

First you need to install the npm module:

```sh
npm install @uniprank/ngx-cookie-service --save
```

If you use SystemJS to load your files, you might have to update your config with this if you don't use `defaultJSExtensions: true`:

```js
System.config({
    packages: {
        '@uniprank/ngx-cookie-service': { defaultExtension: 'js' }
    }
});
```

Finally, you can use ngx-cookie-service in your Angular project (NOT AngularJS).
It is recommended to instantiate `CookieService` in the bootstrap of your application and to never add it to the "providers" property of your components, this way you will keep it as a singleton.
If you add it to the "providers" property of a component it will instantiate a new instance of the service that won't be initialized.

```js
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgxCookieServiceModule } from '@uniprank/ngx-cookie-service';

@NgModule({
    imports: [BrowserModule, NgxCookieServiceModule.forRoot()],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {}
```

## Using

#### Use Cookie Service

Use `CookieService` to set, get or delete cookies.

```js
import { NgModule, Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CookieService } from '@uniprank/ngx-cookie-service';

@Component({
	selector: 'app',
	template: `<div></div>`
})
export class AppComponent implements OnInit {
	constructor(private _cookieService: CookieService) {}

	ngOnInit() {
		// check if cookie exists (example)
		this._cookieService.check('cookie-name');
		// get a cookie (example)
		this._cookieService.get('cookie-name');
		// get all cookies (example)
		this._cookieService.getAll();
		// set a cookie (example)
		this._cookieService.set('cookie-name', 'cookie-value');
		this._cookieService.set('cookie-name', 'cookie-value', 'days' | Date);
		this._cookieService.set('cookie-name', 'cookie-value', 'days' | Date, 'path');
		this._cookieService.set('cookie-name', 'cookie-value', 'days' | Date, 'path', 'domain');
		this._cookieService.set('cookie-name', 'cookie-value', 'days' | Date, 'path', 'domain', 'secure');
		this._cookieService.set('cookie-name', 'cookie-value', 'days' | Date, 'path', 'domain', 'secure', 'Lax' | 'Strict');
		// delete a cookie
		this._cookieService.delete('cookie-name');
		this._cookieService.delete('cookie-name', 'path');
		this._cookieService.delete('cookie-name', 'path', 'domain');
		// delete all cookies
		this._cookieService.deleteAll();
		this._cookieService.deleteAll('path');
		this._cookieService.deleteAll('path', 'domain');
	}
}
```

# TODO:

-   Finish unit tests

## License

[MIT](LICENSE)
