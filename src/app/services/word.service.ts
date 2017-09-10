import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import { Word } from '../components/word/word';

@Injectable()
export class WordService {
  private words = new Subject<Word[]>();

  // Observable string streams
  words$ = this.words.asObservable();

  constructor(private http: HttpClient) {}

  public getLists() {
    return this.http.get<string[]>('/assets/words/lists.json');
  }

  public loadWords(list = 'All') {
    this.http.get<Word[]>('/assets/words/' + list + '.json').subscribe(words => {
      this.words.next(words);
    });
  }
}
