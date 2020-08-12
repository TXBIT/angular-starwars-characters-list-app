import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-tabs",
  templateUrl: "./tabs.component.html",
  styleUrls: ["./tabs.component.css"],
})
export class TabsComponent implements OnInit {
  characters = [
    {
      name: "Luke Skywalker",
      side: "",
    },
    {
      name: "Darth Vader",
      side: "",
    },
  ];

  chosenList = "all";

  constructor() {}

  ngOnInit() {}

  onChoose(side: string) {
    this.chosenList = side;
  }

  getCharacters() {
    if (this.chosenList === "all") {
      return this.characters.slice();
    }
    return this.characters.filter((char) => char.side === this.chosenList);
  }

  onSideChosen(charInfo: any) {
    const pos = this.characters.findIndex(
      (char) => char.name === charInfo.name
    );

    this.characters[pos].side = charInfo.side;
  }
}
