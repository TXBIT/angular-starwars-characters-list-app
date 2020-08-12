import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { StarWarsService } from "../star-wars.service";

@Component({
  selector: "app-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.css"],
})
export class ItemComponent implements OnInit {
  @Input() character: any;
  @Output() sideAssigned = new EventEmitter<{ name: string; side: string }>();

  constructor() {}

  ngOnInit() {}

  onAssign(side: string) {
    // this.character.side = side;
    // this.sideAssigned.emit({ name: this.character.name, side });
    const swService = new StarWarsService();
    swService.onSideChosen({ name: this.character.name, side });
  }
}
