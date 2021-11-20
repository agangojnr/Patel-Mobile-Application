import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BusinessInfoPage } from './business-info.page';

describe('BusinessInfoPage', () => {
  let component: BusinessInfoPage;
  let fixture: ComponentFixture<BusinessInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BusinessInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
