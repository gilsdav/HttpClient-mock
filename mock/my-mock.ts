import { HttpRequest, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { environment } from '../environments/environment';

export function myMock(url: string, method: string, request: HttpRequest<any> ): Observable<HttpEvent<any>> | false {

    let result: Observable<HttpEvent<any>> | false = false;

    if ((environment.mock.all || environment.mock.services.getUsers)
        && url.includes('api/my') && method === 'GET') {
        result = of(
            new HttpResponse({
                status: 200,
                body: {
                    ...
                }
            })
        );
    }

    return result;
}
