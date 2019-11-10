import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"]
})
export class CardComponent implements OnInit {
  @Input() item: string;
  @Input() itemDesc: string;
  @Input() disPrice: string;
  @Input() price: string;
  @Input() extraInfo: string;
  @Input() hideDot: any;
  @Input() showButton: boolean;
  @Input() showBar: boolean;
  @Input() barTextRed: string;
  @Input() barTextGrey: string;
  @Input() barProgress: number;

  ngOnInit() {
    console.log('hideDot', this.hideDot);
  }
}
