import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bestiario } from './bestiario';

describe('Bestiario', () => {
  let component: Bestiario;
  let fixture: ComponentFixture<Bestiario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bestiario],
    }).compileComponents();

    fixture = TestBed.createComponent(Bestiario);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
