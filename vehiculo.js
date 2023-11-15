var Vehiculo = /** @class */ (function () {
    function Vehiculo(marca_, puerta_) {
        this.marca = marca_;
        this.puerta = puerta_;
    }
    Vehiculo.prototype.acelerar = function () {
        console.log('acelerando...!!!!');
    };
    Vehiculo.prototype.frenar = function () {
        console.log('frenando...!!!!');
    };
    return Vehiculo;
}());
var coche = new Vehiculo('ford', 4);
console.log('primer coche', coche.marca);
coche.acelerar();
coche.acelerar();
