console.log('---- Televisão privada ----')



class Fabricante {

    constructor(nome, logo, origem) {
        this.nome = nome;
        this.logo = logo;
        this.origem = origem;
    }

    getFabricante() {
        //Destructuring object
        const { nome, logo, origem} = this;
         return `${nome}, ${logo}, ${origem}`;
    }
}

class Tv {
    // Propriedades
    #canais
    #tamanho
    #assinatura
    #marca
    #ligada
    #volume
    #sintonizada

    constructor (tamanho='pequena', assinatura=false, marca=null) {
        this.#canais = {
            listaCanais : [],
            canalAtual : ''
        };
        this.#tamanho = tamanho;
        this.#assinatura = assinatura;
        this.#marca = marca;
        this.#ligada = false;
        this.#sintonizada = false;
        this.#volume = {
            max : 10,
            min : 0,
            atual : 5
        }
    }
    // Props estéticas
    static msg = {
        "MUDAR_CANAL_EXCEP": "Não foi possivel mudar o canal a TV esta Desligada!", //Televisão.msg.MUDAR_CANAL_EXCEP
        "MUDAR_CANAL_OUTOFBOUNDS": "Este canal esta fora do ar",
        "AUMENTAR_VOLUME_EXCEP": "Não foi possivel aumentar o volume a TV esta Desligada!",
        "DIMINUIR_VOLUME_EXCEP": "Não foi possivel diminuir o volume a TV esta Desligada!",
        "SINTONIZAR_EXCEP": "Não foi possivel sintonizar a TV esta Desligada!",
        "SINTONIZAR_TRUE": "Todos os canais ja foram descobertos"
    }
    
    // Metodos
    ligar() {
        return this.#ligada = true;
    }

    desligar() {
        return this.#ligada = false;
    }
    
    sintonizar() {
        if (this.#ligada == false) {
            throw new Error(Tv.msg.SINTONIZAR_EXCEP);
        } else if (this.#sintonizada) {
            throw new Error(Tv.msg.SINTONIZAR_TRUE);
        }

        this.#sintonizada = true;

        if (this.#assinatura) {
            this.#canais.listaCanais.push('Globo', 'SBT', 'Record', 'Cartoon Network', 'HBO', 'TNT');
            console.log('Sintonizando. . .')
            this.#canais.canalAtual = this.#canais.listaCanais[0];
            return 'Canais da tv aberta e suas assianturas sintonizados.'
        } else {
            this.#canais.listaCanais.push('Globo', 'SBT', 'Record');
            console.log('Sintonizando. . .')
            this.#canais.canalAtual = this.#canais.listaCanais[0];
            return  'Canais da tv aberta sintonizados.'
        }
    }

    aumentarVol() {
        if (this.#ligada == false) throw new Error(Tv.msg.AUMENTAR_VOLUME_EXCEP);
            
        return (this.#volume.atual == this.#volume.max) ? this.#volume.max : ++this.#volume.atual;
    }

    diminuirVol() {
        if (this.#ligada == false) throw new Error(Tv.msg.DIMINUIR_VOLUME_EXCEP);
            
        return (this.#volume.atual == this.#volume.min) ? this.#volume.min : --this.#volume.atual;
    }

    mudarCanal(canal = 0) {
        if (canal > this.#canais.listaCanais.length - 1 || canal < 0) {
            throw new Error(Tv.msg.MUDAR_CANAL_OUTOFBOUNDS) ;
        } else if (this.#ligada == false) {
            throw new Error(Tv.msg.MUDAR_CANAL_EXCEP);
        }
    
        return this.#canais.canalAtual = this.#canais.listaCanais[canal];
    }

    
}
console.log('globo = 0, SBT = 1, Record = 2 Não se esqueça de Sintonizar a televisão');
console.log('cartoon = 3, HBO = 4, TNT = 5 Caso tenha a assinatura. No caso a tvLg tem a tvSony não');

const sony = new Fabricante('Sony', 'Sony.jpg', 'Japan');
const tvSony = new Tv('media', false, sony);
const lg = new Fabricante('LG', 'Lg.jpg', 'EUA')
const tvLg = new Tv('Grande', true, lg);