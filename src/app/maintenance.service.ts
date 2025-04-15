import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MaintenanceService {
  public isMaintenanceMode = true; // If true all sites redirect to WIP
  constructor() { }
}
