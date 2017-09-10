import { Component, OnInit } from '@angular/core';

import { WordService } from '../../services/word.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  private lists: string[];
  private activeList: string;

  private isOpenMenu: boolean;
  
  constructor(private wordService: WordService) {
    this.isOpenMenu = false;
    this.activeList = 'My App';
  }

  ngOnInit() {
    this.wordService.getLists().subscribe(response => this.lists = response);
  }

  public onSelectList(list) {
    this.activeList = list;
    this.wordService.loadWords(list);
  }
}
