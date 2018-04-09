import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

import { myMock } from './my-mock';

@Injectable()
export class MockHttpInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const url = request.url;
        const method = request.method;
        return myMock(url, method, request) || next.handle(request);
    }
}

export const mockInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: MockHttpInterceptor,
    multi: true
};
