export class Archivo {
    constructor(
        public id?: number,
        public titulo?: string,
        public extension?: number,
        public categoria?: number,
        public fecha?: string,
    ) { }

    static fromJson(archivoJSON): Archivo {
        return Object.assign(new Archivo(), archivoJSON)
    }

    // contiene(palabra: string): boolean {
    //     return this.descripcion.includes(palabra) || (this.asignatario && this.asignatario.nombre.includes(palabra))
    // }

    // cumplio(porcentaje: number): boolean {
    //     return this.porcentajeCumplimiento === porcentaje
    // }

    // cumplioMenosDe(porcentaje: number): boolean {
    //     return this.porcentajeCumplimiento < porcentaje
    // }

    // sePuedeCumplir(): boolean {
    //     return this.porcentajeCumplimiento < CUMPLIDA && this.estaAsignada()
    // }

    // cumplir() {
    //     this.porcentajeCumplimiento = CUMPLIDA
    // }

    // desasignar() {
    //     this.asignatario = null
    // }

    // sePuedeDesasignar() {
    //     return this.sePuedeCumplir()
    // }

    // asignarA(asignatario: Usuario) {
    //     this.asignatario = asignatario
    // }

    // estaAsignadoA(asignatario: Usuario) {
    //     return this.asignatario && asignatario && this.asignatario.nombre === asignatario.nombre
    // }

    // sePuedeAsignar(): boolean {
    //     return !this.estaCumplida()
    // }

    // estaCumplida(): boolean {
    //     return this.porcentajeCumplimiento === CUMPLIDA
    // }

    // estaAsignada(): boolean {
    //     return !!this.asignatario
    // }

    toJSON(): any {
        return {
            ...this,
        }
    }

}
