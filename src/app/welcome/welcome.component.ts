import { Component, OnInit, ElementRef, HostListener } from "@angular/core";
import {
  animate,
  state,
  style,
  transition,
  trigger,
  useAnimation
} from "@angular/animations";
import { fadeIn, fadeOut } from "../animation";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.scss"],
  animations: [
    trigger("fadeInOut", [
      transition("void <=> *", useAnimation(fadeIn)),
      transition("* <=> void", useAnimation(fadeOut))
    ]),
    trigger("scrollAnimation", [
      state(
        "show",
        style({
          opacity: 1,
          zIndex: 0
        })
      ),
      state(
        "hide",
        style({
          opacity: 0,
          zIndex: 0
        })
      ),
      transition("show => hide", animate("700ms ease-out")),
      transition("hide => show", animate("700ms ease-in"))
    ])
  ]
})
export class WelcomeComponent implements OnInit {
  state = "hide";

  constructor(public el: ElementRef) {}

  ngOnInit() {}

  @HostListener("window:scroll", ["$event"])
  checkScroll() {
    const componentPosition = this.el.nativeElement.offsetTop;
    const scrollPosition = window.pageYOffset;

    if (scrollPosition >= componentPosition) {
      this.state = "show";
    } else {
      this.state = "hide";
    }
  }
}
