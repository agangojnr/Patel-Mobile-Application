import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OtherFamilyInfoPage } from './other-family-info.page';

describe('OtherFamilyInfoPage', () => {
  let component: OtherFamilyInfoPage;
  let fixture: ComponentFixture<OtherFamilyInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherFamilyInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OtherFamilyInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
