import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BgtownMembersPage } from './bgtown-members.page';

describe('BgtownMembersPage', () => {
  let component: BgtownMembersPage;
  let fixture: ComponentFixture<BgtownMembersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BgtownMembersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BgtownMembersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
