import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.isAuthorized(route)){
      return true;
    }else{
      this.router.navigate(['/']);
      return false;
    }
  }

  private isAuthorized(route:ActivatedRouteSnapshot):boolean{
    const role = localStorage.getItem('role');
    const roleExp = route.data['roles'];
    return roleExp.includes(role);
  }
  
}
