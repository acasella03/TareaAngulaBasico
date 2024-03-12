import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextoContadorComponent } from './texto-contador.component';

describe('TextoContadorComponent', () => {
  let component: TextoContadorComponent;
  let fixture: ComponentFixture<TextoContadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextoContadorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TextoContadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
