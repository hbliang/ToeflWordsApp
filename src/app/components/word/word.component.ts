import { Component, OnInit } from '@angular/core';
import { YandexService } from '../../services/yandex.service';
import { WordService } from '../../services/word.service';
import { Word } from './word';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css']
})

export class WordComponent implements OnInit {
  public words: Word[];

  constructor(private yandexService: YandexService, private wordService: WordService) {
    this.wordService.words$.subscribe(words => this.words = words);
  }

  ngOnInit() {

  }

  public toggleTranslation(word: Word) {
    if (word.translation.length > 0) {
      word.translation = [];
    } else {
      this.yandexService.translate(word.name).subscribe(response => {
        word.translation = response['text'];
      });
    }
  }
}
