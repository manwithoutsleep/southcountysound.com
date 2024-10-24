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

    it('should render title', () => {
        const fixture = TestBed.createComponent(BandListComponent);
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector('h1')?.textContent).toContain('South County Sound Bands');
    });
});
