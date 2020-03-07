import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-box-common-layout',
  templateUrl: './box-common-layout.component.html',
  styleUrls: ['./box-common-layout.component.scss']
})
export class BoxCommonLayoutComponent implements OnInit {

  @Input() boxTittle: string;

  constructor() { }

  ngOnInit(): void {
  }

}
