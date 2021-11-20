import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FamilyInfoPage } from './family-info.page';

describe('FamilyInfoPage', () => {
  let component: FamilyInfoPage;
  let fixture: ComponentFixture<FamilyInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamilyInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FamilyInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
