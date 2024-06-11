import { Component } from '@angular/core';

@Component({
  selector: 'app-barre-recherche',
  templateUrl: './barre-recherche.component.html',
  styleUrl: './barre-recherche.component.scss',
})
export class BarreRechercheComponent {
  searchTerm: string = '';

  search() {
    const all = [...(document.body.querySelectorAll('*') as any)];
    const textNodes = all.flatMap((e) =>
      [...e.childNodes].filter((v) => v.nodeType === 3)
    );
    const foundNodes = textNodes.filter(
      (e) =>
        this.searchTerm &&
        e.nodeValue.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    const span = document.createElement('span');
    span.setAttribute('search-result', 'true');
    const oldResults = [
      ...(document.querySelectorAll('span[search-result]') as any),
    ];
    oldResults.forEach((e) =>
      e.replaceWith(document.createTextNode(e.innerText))
    );
    foundNodes.forEach((e) => {
      const sp = span.cloneNode(true) as HTMLSpanElement;
      const rgx = new RegExp(`(${this.searchTerm})`, 'ig');
      sp.innerHTML = e.nodeValue.replace(
        rgx,
        `<span style="color:red; background:rgba(255,255,0, 0.5);">$1</span>`
      );
      e.replaceWith(sp);
    });
  }
}
