import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MybusinessesPage } from './mybusinesses.page';

describe('MybusinessesPage', () => {
  let component: MybusinessesPage;
  let fixture: ComponentFixture<MybusinessesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MybusinessesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MybusinessesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
