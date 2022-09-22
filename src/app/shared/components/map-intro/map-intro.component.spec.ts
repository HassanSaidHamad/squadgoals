import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapIntroComponent } from './map-intro.component';

describe('MapIntroComponent', () => {
  let component: MapIntroComponent;
  let fixture: ComponentFixture<MapIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapIntroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
