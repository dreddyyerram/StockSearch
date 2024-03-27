import {RouteReuseStrategy, DetachedRouteHandle, ActivatedRouteSnapshot, UrlSegment} from '@angular/router';
import { ComponentRef, Injectable } from '@angular/core';
import {NodeApiService} from "./node-api.service";

@Injectable()
export class CustomRouteReuseStrategy implements RouteReuseStrategy {

  constructor(private backend: NodeApiService) {
  }
  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    return this.isDetachable(route);
  }

  store(route: ActivatedRouteSnapshot, handler: DetachedRouteHandle) {
    const storeKey =  this.getStoreKey(route);
    let path = route.url.map((s: UrlSegment) => s.path).join('/');
    if (handler) {
      const rootHandler = {
        handle: handler,
        storeTime: +new Date(),
        path: path
      };
      if (this.backend.handlers[storeKey] && this.backend.handlers[storeKey].path !== path) {
        const componentRef: ComponentRef<any> = (this.backend.handlers[storeKey].handle as any).componentRef;
        if (componentRef) {
          console.log("Destroying the component", storeKey, this.backend.handlers[storeKey].path)
          componentRef.destroy();
        }
      }
      route.data["reattached"] = true;
      console.log('Storing the component', storeKey, path);
      this.backend.handlers[storeKey] = rootHandler;
    }
  }

  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    const storeKey =  this.getStoreKey(route);
    if (this.isAtachable(route, storeKey)) {
      // this.clearNewerHandlerOnAttach(this.backend.handlers[storeKey].storeTime);
      return true;
    }
    return false;
  }

  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
    const storeKey =  this.getStoreKey(route);
    console.log('Retrieving the component', this.backend);
    return this.backend.handlers[storeKey]?.handle;
  }

  shouldReuseRoute( future: ActivatedRouteSnapshot, current: ActivatedRouteSnapshot): boolean {
    return future.routeConfig === current.routeConfig;
  }

  private getStoreKey(route: ActivatedRouteSnapshot): string {
    let baseKey ='';
    if(route?.routeConfig?.data?.['storeKey']){
      baseKey = route.routeConfig.data['storeKey'];
    }
    return baseKey
  }

  private isDetachable(route: ActivatedRouteSnapshot) {
    if (route?.routeConfig?.data?.['shouldDetach']) {
      return true;
    }
    return false;
  }

  private isAtachable(route: ActivatedRouteSnapshot, storeKey: string) {
    if (this.isDetachable(route) && this.backend.handlers[storeKey]?.handle) {
      console.log('Attaching the component', storeKey);
      return true;
    }
    return false;
  }

  private clearNewerHandlerOnAttach(storeTime: number) {
    const handlerKeys = Object.keys(this.backend.handlers);
    handlerKeys.forEach(k => {
      if (this.backend.handlers[k].storeTime > storeTime) {
        const componentRef: ComponentRef<any> = (this.backend.handlers[k].handle as any).componentRef;
        if (componentRef) {
          componentRef.destroy();
        }
        delete this.backend.handlers[k];
        console.log('Clearing the component', k);
      }
    });
  }
}

