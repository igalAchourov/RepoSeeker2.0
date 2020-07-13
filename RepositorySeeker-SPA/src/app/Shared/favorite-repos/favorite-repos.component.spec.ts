import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteReposComponent } from './favorite-repos.component';

describe('FavoriteReposComponent', () => {
  let component: FavoriteReposComponent;
  let fixture: ComponentFixture<FavoriteReposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoriteReposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteReposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
