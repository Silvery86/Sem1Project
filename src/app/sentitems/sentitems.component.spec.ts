import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentitemsComponent } from './sentitems.component';

describe('SentitemsComponent', () => {
  let component: SentitemsComponent;
  let fixture: ComponentFixture<SentitemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SentitemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SentitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
