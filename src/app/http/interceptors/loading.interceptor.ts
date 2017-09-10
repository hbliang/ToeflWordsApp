import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import NProgress from 'nprogress/nprogress.js';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        NProgress.start();
        NProgress.inc();
        return next.handle(req).do(event => {
            if (event instanceof HttpResponse) {
                NProgress.done();
            }
        }, error => {
            if (error instanceof HttpErrorResponse) {
                NProgress.done();

                let message: string = '';
                if (error.error && error.error.message) {
                    message = error.error.message;
                } else {
                    message = error.message;
                }
                
                alert(message);
            }
        });
    }
}