import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DreamListComponent } from './dream-list.component';
import { RouterModule } from '@angular/router';

describe('DreamListComponent', () => {
  let component: DreamListComponent;
  let fixture: ComponentFixture<DreamListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        DreamListComponent,
        RouterModule.forRoot([])
    ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DreamListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
      const fixture = TestBed.createComponent(DreamListComponent);
      fixture.detectChanges();
      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled.querySelector('h1')?.textContent).toContain('Dreams in the South County Sound');
  });
});
