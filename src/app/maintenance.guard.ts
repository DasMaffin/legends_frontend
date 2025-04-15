import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { MaintenanceService } from './maintenance.service';

@Injectable({
  providedIn: 'root'
})
export class MaintenanceGuard implements CanActivate {

  constructor(
    private maintenanceService: MaintenanceService,
    private router: Router
  ) {}

  canActivate(): boolean {
    if (this.maintenanceService.isMaintenanceMode) {
      this.router.navigate(['/wip']);
      return false;
    }
    return true;
  }
}
