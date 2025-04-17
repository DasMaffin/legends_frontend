import { Routes } from '@angular/router';
import { GdprComponent } from './gdpr/gdpr.component';
import { IndexComponent } from './index/index.component';
import { VoteComponent } from './vote/vote.component';
import { WipComponent } from './wip/wip.component';
import { MaintenanceGuard } from './maintenance.guard';
import { ShopComponent } from './shop/shop.component';

export const routes: Routes = [
    { path: 'wip', component: WipComponent }, // If a site should show when server is in maintenance mode add it outside the next brackets like this.
    { path: 'shop', component: ShopComponent },

    {
        path: '',
        canActivate: [MaintenanceGuard],
        children: [
            { path: '', component: IndexComponent },
            { path: 'gdpr', component: GdprComponent },
            { path: 'vote', component: VoteComponent },


            
            { path: '**', component: IndexComponent } // fallback (also guarded)
        ]
    }
];
