import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable({ providedIn: 'root' })
export class DashboardGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const token = route.queryParamMap.get('token');

    if (token === 'admin') {
      // Armazena no localStorage
      localStorage.setItem('adminToken', token);
      return true;
    }

    // Tenta resgatar do localStorage (se vier de um reload, por exemplo)
    const storedToken = localStorage.getItem('adminToken');

    if (storedToken === 'admin') {
      return true;
    }

    // Bloqueia ou redireciona
    return false;
  }
}
