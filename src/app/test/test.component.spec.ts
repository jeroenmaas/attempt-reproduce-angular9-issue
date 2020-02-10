import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TestComponent} from './test.component';
import {AngularMultiSelectModule} from 'angular2-multiselect-dropdown';
import {FormsModule} from '@angular/forms';

describe('TestComponent', () => {
    let component: TestComponent;
    let fixture: ComponentFixture<TestComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TestComponent],
            imports: [
                AngularMultiSelectModule,
                FormsModule
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
