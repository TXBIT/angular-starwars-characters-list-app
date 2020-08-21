import { Component, OnInit } from "@angular/core";

import { StarWarsService } from "../star-wars.service";

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

  swService: StarWarsService;
  defaultName = "Obi-Wan";

  constructor(starWarsService: StarWarsService) {
    this.swService = starWarsService;
  }

  ngOnInit() {}

  onSubmit(submittedForm: any) {
    if (submittedForm.invalid) {
      return;
    }
    this.swService.addCharacter(
      submittedForm.value.name,
      submittedForm.value.side
    );
  }
}
