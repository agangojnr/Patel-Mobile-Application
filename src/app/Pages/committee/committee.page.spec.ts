import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CommitteePage } from './committee.page';

describe('CommitteePage', () => {
  let component: CommitteePage;
  let fixture: ComponentFixture<CommitteePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommitteePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CommitteePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
