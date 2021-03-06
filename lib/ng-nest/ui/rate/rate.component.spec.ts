import { XButtonModule } from '@ng-nest/ui/button';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XRateComponent } from './rate.component';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { XLayoutModule } from '@ng-nest/ui/layout';
import { XRateModule } from '@ng-nest/ui/rate';
import { FormsModule } from '@angular/forms';
import { XRatePrefix } from './rate.property';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { XThemeModule } from '@ng-nest/ui/theme';

describe(XRatePrefix, () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, XThemeModule, FormsModule, XRateModule, XButtonModule, XLayoutModule],
      declarations: [TestXRateComponent, TestXRateDisabledComponent]
    }).compileComponents();
  }));
  describe(`default.`, () => {
    let fixture: ComponentFixture<TestXRateComponent>;
    let rate: DebugElement;
    beforeEach(() => {
      fixture = TestBed.createComponent(TestXRateComponent);
      fixture.detectChanges();
      rate = fixture.debugElement.query(By.directive(XRateComponent));
    });
    it('should create.', () => {
      expect(rate).toBeDefined();
    });
  });
  describe(`disabled.`, () => {
    let fixture: ComponentFixture<TestXRateDisabledComponent>;
    let rate: DebugElement;
    beforeEach(() => {
      fixture = TestBed.createComponent(TestXRateDisabledComponent);
      fixture.detectChanges();
      rate = fixture.debugElement.query(By.directive(XRateComponent));
    });
    it('should create.', () => {
      expect(rate).toBeDefined();
    });
  });
});

@Component({
  template: `
    <x-theme showDark></x-theme>
    <x-row>
      <x-col span="24">
        <x-rate></x-rate>
      </x-col>
    </x-row>
    <x-row>
      <x-col span="24">
        <x-rate [(ngModel)]="model"></x-rate>
      </x-col>
    </x-row>
  `,
  styles: [
    `
      :host {
        background-color: var(--x-background);
        padding: 1rem;
        border: 0.0625rem solid var(--x-border);
      }
      x-row > x-col:not(:first-child) {
        margin-top: 1rem;
      }
      x-row > x-col {
        width: 14rem;
      }
    `
  ]
})
class TestXRateComponent {
  model = 3;
}

@Component({
  template: `
    <x-theme showDark></x-theme>
    <x-row>
      <x-col span="24">
        <x-rate disabled></x-rate>
      </x-col>
    </x-row>
    <x-row>
      <x-col span="24">
        <x-rate [(ngModel)]="model" disabled></x-rate>
      </x-col>
    </x-row>
  `,
  styles: [
    `
      :host {
        background-color: var(--x-background);
        padding: 1rem;
        border: 0.0625rem solid var(--x-border);
      }
      x-row > x-col:not(:first-child) {
        margin-top: 1rem;
      }
      x-row > x-col {
        width: 14rem;
      }
    `
  ]
})
class TestXRateDisabledComponent {
  model = 3;
}
