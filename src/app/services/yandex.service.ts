import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class YandexService {
  private url: string;
  private key: string;

  constructor(private http: HttpClient) {
    this.url = 'https://translate.yandex.net/api/v1.5/tr.json/translate';
    // this.key = 'trnsl.1.1.20170909T042040Z.7d0f913ca0a60c27.a581f5291abed2880fd52ec4080833b0ed01c0db';
    this.key = 'trnsl.1.1.20170909T042040Z.7d0f913ca0a60c27.a581f5291abed2880fd52ec4080833b0ed01c0db';
  }

  public translate(text = '', lang = {from: 'en', to: 'zh'}) {
    let Params = new HttpParams();

    Params = Params.append('text', text);
    Params = Params.append('key', this.key);
    Params = Params.append('lang', lang.from + '-' + lang.to);

    return this.http.get(this.url, { params: Params });
  }
}
