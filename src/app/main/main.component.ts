import { Capitulo } from './../capitulo';
import { Livro } from './../livro';
import { MainService } from './../main.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  livros: Livro[];
  capitulos: Array<any> = [];
  constructor(private mainService: MainService) { }
  livroSelecionado : Livro;
  capituloSelecionado  : number = 0;
  versiculoSelecionado : number = 0;
  versiculos : Array<String>;
  strVersiculo : String;
  listaVersiculos : Array<any> = [];
  ngOnInit() {
    this.getLivros();
  }

  getLivros(): void {
    this.mainService.getLivros()
      .subscribe((livros) => this.livros = livros);
  }

  getCapitulos(livro: Livro):void {
    this.capituloSelecionado = 0;
    this.livroSelecionado = livro;
    this.capitulos = [];
    this.livroSelecionado.chapters.forEach((item, index) => {
      this.capitulos.push({"numero" : index + 1});
    });
    this.versiculos = [];
  }

  getVersiculos(capitulo: number): void {
    this.listaVersiculos = [];
    this.strVersiculo = '';
    this.capituloSelecionado = capitulo;
    this.livroSelecionado.chapters[capitulo - 1].forEach((item, index) => {
      this.listaVersiculos.push({ "numero": index + 1 });
    });
    this.versiculos = this.livroSelecionado.chapters[capitulo - 1];
  }

  verVersiculo(versiculo : number) : void {
    this.versiculoSelecionado = versiculo;
    let v = versiculo -1;
    let c = this.capituloSelecionado -1;
    this.strVersiculo = this.livroSelecionado.chapters[c][v];
  }
}
