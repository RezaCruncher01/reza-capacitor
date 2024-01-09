import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PresensiHistoriPage } from './presensi-histori.page';

describe('PresensiHistoriPage', () => {
  let component: PresensiHistoriPage;
  let fixture: ComponentFixture<PresensiHistoriPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PresensiHistoriPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
