import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyadvertsPage } from './myadverts.page';

describe('MyadvertsPage', () => {
  let component: MyadvertsPage;
  let fixture: ComponentFixture<MyadvertsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyadvertsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyadvertsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
