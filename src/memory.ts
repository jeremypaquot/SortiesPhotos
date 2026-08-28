import type{Outing}from'./types.js';
export class MemoryOutings{private items:Outing[];constructor(seed:Outing[]=[]){this.items=structuredClone(seed)}async list(){return structuredClone(this.items)}async save(o:Outing){this.items=[...this.items.filter(x=>x.id!==o.id),structuredClone(o)];return o}async remove(id:string){this.items=this.items.filter(x=>x.id!==id)}}

