import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'msgpai';

  texto: string = ''

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  enviar() {
    const iframeElement = this.el.nativeElement.querySelector('#meu-iframe');
    const iframeContent = iframeElement.contentWindow;
    iframeContent.postMessage(this.texto, '*');
  }
}
