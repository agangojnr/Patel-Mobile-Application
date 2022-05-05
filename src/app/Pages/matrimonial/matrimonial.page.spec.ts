import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MatrimonialPage } from './matrimonial.page';

describe('MatrimonialPage', () => {
  let component: MatrimonialPage;
  let fixture: ComponentFixture<MatrimonialPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatrimonialPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MatrimonialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
