import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemosComponent } from './pokemos.component';

describe('PokemosComponent', () => {
  let component: PokemosComponent;
  let fixture: ComponentFixture<PokemosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PokemosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
