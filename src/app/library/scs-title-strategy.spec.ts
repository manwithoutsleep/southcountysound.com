import { fakeAsync, TestBed, tick } from "@angular/core/testing";
import { ScsTitleStrategy } from "./scs-title-strategy";
import { provideRouter, Router, RouterModule, TitleStrategy } from "@angular/router";
import { DOCUMENT } from "@angular/common";
import { Component } from "@angular/core";
import { provideLocationMocks } from '@angular/common/testing';

describe('scsTitleStrategy', () => {
    let router: Router;
    let document: Document;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                // provideLocationMocks(),
                RouterModule.forRoot([])
            ],
            providers: [
                {
                    provide: TitleStrategy,
                    useClass: ScsTitleStrategy
                }
            ]
        });

        router = TestBed.inject(Router);
        document = TestBed.inject(DOCUMENT);
    });

    it('should be true', () => {
        expect(true).toBe(true);
    });

    it('should set page title correctly when title is not provided', fakeAsync(() => {
        router.resetConfig([
            {
                path: 'home',
                component: TestComponent
            }
        ]);

        router.navigateByUrl('/home');
        tick();
        expect(document.title).toBe('South County Sound');
    }));

    it('should set page title correctly when title is empty string', fakeAsync(() => {
        router.resetConfig([
            {
                path: 'home',
                title: '',
                component: TestComponent
            }
        ]);

        router.navigateByUrl('/home');
        tick();
        expect(document.title).toBe('South County Sound');
    }));

    it('should prepend South County Sound | to the provided title', fakeAsync(() => {
        router.resetConfig([
            {
                path: 'home',
                title: 'Home',
                component: TestComponent
            }
        ]);

        router.navigateByUrl('/home');
        tick();
        expect(document.title).toBe('South County Sound | Home');
    }));

    it('should set the title as-is when the provided title contains South County', fakeAsync(() => {
        router.resetConfig([
            {
                path: 'home',
                title: 'South County Home',
                component: TestComponent
            }
        ]);

        router.navigateByUrl('/home');
        tick();
        expect(document.title).toBe('South County Home');
    }));
});

@Component({ template: '' })
export class TestComponent {
}