import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewOtherFamilyPage } from './view-other-family.page';

describe('ViewOtherFamilyPage', () => {
  let component: ViewOtherFamilyPage;
  let fixture: ComponentFixture<ViewOtherFamilyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewOtherFamilyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewOtherFamilyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
