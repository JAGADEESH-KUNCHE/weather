import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherBlogComponent } from './weather-blog.component';

describe('WeatherBlogComponent', () => {
  let component: WeatherBlogComponent;
  let fixture: ComponentFixture<WeatherBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
