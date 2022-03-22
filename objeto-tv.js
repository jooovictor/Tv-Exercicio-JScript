console.log('---- Televisão ----')

class Tv {
    //Props
    constructor (tamanho='pequena', assinatura=false, marca='') {
        this.canais = {
            listaCanais : [],
            canalAtual : ''
        };
        this.tamanho = tamanho;
        this.assinatura = assinatura;
        this.marca = marca;
        this.ligada = false;
        this.sintonizada = false;
        this.volume = {
            max : 10,
            min : 0,
            atual : 5
        }
    }

    //Metodos
    ligar() {
        return this.ligada = true;
    }
    
    sintonizar() {
        if (this.ligada == false) {
            return 'Tv desligada';
        } else if (this.sintonizada) {
            return 'Tv já sintonizada';
        }

        this.sintonizada = true;

        if (this.assinatura) {
            this.canais.listaCanais.push('Globo', 'SBT', 'Record', 'Cartoon Network', 'HBO', 'TNT');
            console.log('Sintonizando. . .')
            this.canais.canalAtual = this.canais.listaCanais[0];
            return 'Canais da tv aberta e suas assianturas sintonizados.'
        } else {
            this.canais.listaCanais.push('Globo', 'SBT', 'Record');
            console.log('Sintonizando. . .')
            this.canais.canalAtual = this.canais.listaCanais[0];
            return  'Canais da tv aberta sintonizados.'
        }
    }

    aumentarVol() {
        if (this.ligada == false) {
            return 'Tv desligada';
        }

        if (this.volume.atual == this.volume.max) {
            return this.volume.max;
        }

        return ++this.volume.atual;
    }

    diminuirVol() {
        if (this.ligada == false) {
            return 'Tv desligada';
        }

        if (this.volume.atual == this.volume.min) {
            return this.volume.min;
        }

        return --this.volume.atual;
    }

    mudarCanal(canal) {
        if (canal > this.canais.listaCanais.length -1) {
            return 'Canal fora do ar';
        } else if (canal < 0) {
            return 'Canal fora do ar';
        }
        return this.canais.canalAtual = this.canais.listaCanais[canal];
    }

    
}

const tvSg = new Tv('media', false, 'samsung');
const tvLg = new Tv('Grande', true, 'LG');
