import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BloodgroupTownPage } from './bloodgroup-town.page';

describe('BloodgroupTownPage', () => {
  let component: BloodgroupTownPage;
  let fixture: ComponentFixture<BloodgroupTownPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BloodgroupTownPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BloodgroupTownPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
