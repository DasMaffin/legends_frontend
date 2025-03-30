import { Routes } from '@angular/router';
import { GdrpComponent } from './gdrp/gdrp.component';
import { IndexComponent } from './index/index.component';

export const routes: Routes = [    
    { path: '**', component: IndexComponent },
    { path: '', component: IndexComponent },
    { path: 'gdpr', component: GdrpComponent },
];
