import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BandComponent } from './band.component';
import { RouterModule } from '@angular/router';

describe('BandComponent', () => {
    let component: BandComponent;
    let fixture: ComponentFixture<BandComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                BandComponent,
                RouterModule.forRoot([])
            ]
        })
            .compileComponents();

        fixture = TestBed.createComponent(BandComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
