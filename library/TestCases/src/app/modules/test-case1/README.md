You can find the complete test case at GitHub. [Test Case 1](https://github.com/uniprank/ngx-cookie-service/tree/master/library/TestCases/src/app/modules/test-case1)

## TestCase1 Module

```js
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgxCookieServiceModule } from '@uniprank/ngx-cookie-service';

@NgModule({
    declarations: [TestCase1Component],
    imports: [CommonModule, NgxCookieServiceModule.forRoot()]
})
export class TestCase1Module {}
```

## TestCase1 Component

```javascript
@Component({
	selector: 'uni-test-case1',
	template: `<div></div>`
})
export class TestCase1Component implements OnInit {
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
