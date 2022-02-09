import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonsItemComponent } from './pokemons-item.component';

describe('PokemonsItemComponent', () => {
  let component: PokemonsItemComponent;
  let fixture: ComponentFixture<PokemonsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonsItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
