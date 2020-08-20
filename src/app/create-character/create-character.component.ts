import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-create-character",
  templateUrl: "./create-character.component.html",
  styleUrls: ["./create-character.component.css"],
})
export class CreateCharacterComponent implements OnInit {
  availableSides = [
    { display: "None", value: "" },
    { display: "Dark", value: "dark" },
    { display: "Light", value: "light" },
  ];

  constructor() {}

  ngOnInit() {}
}
