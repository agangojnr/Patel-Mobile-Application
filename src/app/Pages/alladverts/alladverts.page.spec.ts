import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlladvertsPage } from './alladverts.page';

describe('AlladvertsPage', () => {
  let component: AlladvertsPage;
  let fixture: ComponentFixture<AlladvertsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlladvertsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlladvertsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
