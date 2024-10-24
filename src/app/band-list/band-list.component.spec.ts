import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BandListComponent } from './band-list.component';
import { RouterModule } from '@angular/router';

describe('BandListComponent', () => {
    let component: BandListComponent;
    let fixture: ComponentFixture<BandListComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                BandListComponent,
                RouterModule.forRoot([])
            ]
        })
            .compileComponents();

        fixture = TestBed.createComponent(BandListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
