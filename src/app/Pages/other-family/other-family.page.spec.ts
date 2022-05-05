import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OtherFamilyPage } from './other-family.page';

describe('OtherFamilyPage', () => {
  let component: OtherFamilyPage;
  let fixture: ComponentFixture<OtherFamilyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherFamilyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OtherFamilyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
