import { NgModule, ModuleWithProviders, Provider } from '@angular/core';
import { CookieService } from './cookie.service';

const directives: any[] = [];
const components: any[] = [];
const providers: Provider[] = [CookieService];

@NgModule({
    declarations: [...directives, ...components],
    exports: [...directives, ...components]
})
export class NgxCookieServiceModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: NgxCookieServiceModule,
            providers: [...providers]
        };
    }
}
