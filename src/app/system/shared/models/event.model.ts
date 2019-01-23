export class WFMEvent {
    constructor(
        public type: string,
        public amount: number,
        public category: number,
        public date,
        public description: string,
        public id?: string,
    ) { }
}