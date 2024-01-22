import { Component, OnInit, Renderer2 } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('in', style({ opacity: 1 })),
      transition('void => *', [
        style({ opacity: 0 }),
        animate(300)
      ]),
      transition('* => void', [
        animate(300, style({ opacity: 0 }))
      ])
    ])
  ]
})

export class MenuComponent implements OnInit {
  isSplitScreen = false;  
  isAccueilHovered = false;
  isListHovered = false;
  isCreateHovered = false;
  isContactHovered = false;
  isCircleVisible = true;
  isWaveVisible = false;

  constructor(private renderer: Renderer2, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  
  titleBase: string = 'FLY';
  titlePartText: string[] = 'WITHME'.split('');
  showTitlePartText: boolean = false;

  showTitlePart() {
   console.log('SHOW');
      this.showTitlePartText = true;
  }

  hideTitlePart() {
    console.log('HIDE');
    this.showTitlePartText = false;
  }  

  crossClicked: boolean = false;

  toggleWaves() {
    this.crossClicked = !this.crossClicked;
    if (this.crossClicked) {
      this.showTitlePartText = false;
    }
    this.isSplitScreen = !this.isSplitScreen;

    if (this.isSplitScreen) {
      this.renderer.addClass(document.body, 'split-screen');
    } else {
      this.renderer.removeClass(document.body, 'split-screen');
    }
  }

  hideSplitScreen() {
    this.isSplitScreen = false;
    this.renderer.removeClass(document.body, 'split-screen');
  }

  isLinkMenuClicked(route: string) {
    const currentRoute = this.route.snapshot.routeConfig?.path;
    if (currentRoute === route) {
        console.log('MEME PAGE');
        return;
    }

    this.isCircleVisible = false;
    this.isWaveVisible = true;
    this.hideSplitScreen();
  }
}
