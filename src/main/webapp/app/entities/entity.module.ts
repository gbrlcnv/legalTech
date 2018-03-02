import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { LegalTechRegionMySuffixModule } from './region-my-suffix/region-my-suffix.module';
import { LegalTechCountryMySuffixModule } from './country-my-suffix/country-my-suffix.module';
import { LegalTechLocationMySuffixModule } from './location-my-suffix/location-my-suffix.module';
import { LegalTechDepartmentMySuffixModule } from './department-my-suffix/department-my-suffix.module';
import { LegalTechTaskMySuffixModule } from './task-my-suffix/task-my-suffix.module';
import { LegalTechEmployeeMySuffixModule } from './employee-my-suffix/employee-my-suffix.module';
import { LegalTechJobMySuffixModule } from './job-my-suffix/job-my-suffix.module';
import { LegalTechJobHistoryMySuffixModule } from './job-history-my-suffix/job-history-my-suffix.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        LegalTechRegionMySuffixModule,
        LegalTechCountryMySuffixModule,
        LegalTechLocationMySuffixModule,
        LegalTechDepartmentMySuffixModule,
        LegalTechTaskMySuffixModule,
        LegalTechEmployeeMySuffixModule,
        LegalTechJobMySuffixModule,
        LegalTechJobHistoryMySuffixModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LegalTechEntityModule {}
