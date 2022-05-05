import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BloodDonnationPage } from './blood-donnation.page';

describe('BloodDonnationPage', () => {
  let component: BloodDonnationPage;
  let fixture: ComponentFixture<BloodDonnationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BloodDonnationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BloodDonnationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
