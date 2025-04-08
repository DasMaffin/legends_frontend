import { Routes } from '@angular/router';
import { GdrpComponent } from './gdpr/gdpr.component';
import { IndexComponent } from './index/index.component';
import { VoteComponent } from './vote/vote.component';

export const routes: Routes = [    
    { path: '', component: IndexComponent },
    { path: 'gdpr', component: GdrpComponent },
    { path: 'vote', component: VoteComponent },



    { path: '**', component: IndexComponent } // Make sure this is last!
];
