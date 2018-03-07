import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './views/login/login.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';

import { AuthGuard } from './services/auth-guard.service';
import { QuestionListComponent } from './views/question-list/question-list.component'
import {NotificationComponent } from './views/notification/notification.component'

const appRoutes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'dashboard',
        canActivate: [AuthGuard],
        component: DashboardComponent
    },
    {
        path: 'question',
        component: QuestionListComponent
    },
    {
        path: 'notification',
        component: NotificationComponent
    }
];

export const AppRoutes = RouterModule.forRoot(appRoutes);