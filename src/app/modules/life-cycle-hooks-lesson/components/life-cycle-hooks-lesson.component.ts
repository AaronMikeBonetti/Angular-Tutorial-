import { Component, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life-cycle-hooks-lesson',
  templateUrl: './life-cycle-hooks-lesson.component.html',
  styleUrls: ['./life-cycle-hooks-lesson.component.scss'],
  standalone: true,
})
export class LifeCycleHooksLessonComponent implements OnInit {
  constructor() {}

  //ngOnChanges is called when the component's input properties change,
  //It receives a SimpleChanges object containing the current and previous values of the changed properties.

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChange: changes made!', changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit: Component Initialized!');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck: Component Checked!');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit: Component Content Initialized!');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked: Component Content Checked!');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit: Component View Initialized!');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked: Component View Checked Initialized!');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy: Component Unmounted!');
  }

  clickButton(): void {
    console.log('Button Clicked!');
    let button = document.querySelector('button');
    if (
      button &&
      (button.style.backgroundColor === 'blue' ||
        button.style.backgroundColor === '')
    ) {
      button.style.backgroundColor = 'red';
    } else if (button) {
      button.style.backgroundColor = 'blue';
    }
  }
}
