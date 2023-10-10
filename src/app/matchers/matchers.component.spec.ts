import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchersComponent } from './matchers.component';

describe('MatchersComponent', () => {
  let component: MatchersComponent;
  let fixture: ComponentFixture<MatchersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatchersComponent]
    });
    fixture = TestBed.createComponent(MatchersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  //* Exact Equality
  test('two plus two is four', () => {
    expect(2 + 2).toBe(4);
  });

  test('Object values', () => {
    const data = { name: 'Aquiles' };
    expect(data).toEqual({ name: 'Aquiles' });
  });

  test('Object values to Be', () => {
    const data = { name: 'Aquiles' };
    expect(data).toBe({ name: 'Aquiles' });
  });
});
