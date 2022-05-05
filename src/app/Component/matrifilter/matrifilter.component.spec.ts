import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MatrifilterComponent } from './matrifilter.component';

describe('MatrifilterComponent', () => {
  let component: MatrifilterComponent;
  let fixture: ComponentFixture<MatrifilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatrifilterComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MatrifilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
