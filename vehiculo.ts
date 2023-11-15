class Vehiculo{
    marca: string;
    puerta: number;

    constructor(marca_:string, puerta_:number) {
        this.marca = marca_;
        this.puerta = puerta_;
    }

    acelerar(): void{
        console.log('acelerando...!!!!')
    }

    frenar(): void{
        console.log('frenando...!!!!')
    }
}

const coche = new Vehiculo('ford', 4);
console.log('primer coche', coche.marca)
coche.acelerar()
coche.acelerar()