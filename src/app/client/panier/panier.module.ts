import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanierRoutingModule } from './panier-routing.module';
import { ClientSharedModule } from '../shared/shared.module';
import { PanierComponent } from './panier.component';
import { ResumeComponent } from './resume/resume.component';
import { ArticleComponent } from './article/article.component';


@NgModule({
    declarations: [
        PanierComponent,
        ResumeComponent,
        ArticleComponent,
        ArticleComponent,
        ResumeComponent
    ],
    imports: [
        CommonModule,
        PanierRoutingModule,
        ClientSharedModule,
    ]
})
export class PanierModule { }
