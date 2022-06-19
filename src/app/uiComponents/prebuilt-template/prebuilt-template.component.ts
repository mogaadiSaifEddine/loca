import { Component, Input, OnInit } from '@angular/core';
import { PreTemplate } from 'src/app/models/Template.model';

@Component({
  selector: 'app-prebuilt-template',
  templateUrl: './prebuilt-template.component.html',
  styleUrls: ['./prebuilt-template.component.scss'],
})
export class PrebuiltTemplateComponent implements OnInit {
  @Input()
  preBuiltTemplate!: PreTemplate;

  @Input()
  showDesc!: boolean;

  constructor() {}

  ngOnInit(): void {}
}
