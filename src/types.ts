export type PointType='stationnement'|'affut'|'observation'|'securite'|'personnalise';
export interface MapPoint {id:string;type:PointType;name:string;lat:number;lng:number;time:string;notes:string}
export interface TimelineItem {id:string;label:string;time:string}
export interface GearItem {id:string;label:string;checked:boolean}
export interface Outing {id:string;title:string;date:string;place:string;notes:string;animals:string;habitat:string;weather:string;temperature:string;wind:string;sunrise:string;sunset:string;hideType:string;status:string;zone:{lat:number;lng:number;radius:number};points:MapPoint[];timeline:TimelineItem[];gear:GearItem[];created_at?:string;updated_at?:string}
export const pointLabels:Record<PointType,string>={stationnement:'Stationnement',affut:'Affût',observation:'Observation',securite:'Sécurité',personnalise:'Personnalisé'};
const gear=['Appareil','Objectifs','Batteries','Cartes mémoire','Trépied','Jumelles','Camouflage','Siège','Lampe','Eau','Vêtements'];
const timeline=['Départ','Stationnement','Marche','Arrivée à l’affût','Observation','Retour'];
export const blankOuting=():Outing=>({id:crypto.randomUUID(),title:'Nouvelle sortie',date:new Date().toISOString().slice(0,10),place:'',notes:'',animals:'',habitat:'Forêt',weather:'',temperature:'',wind:'',sunrise:'',sunset:'',hideType:'Affût fixe',status:'À préparer',zone:{lat:48.8566,lng:2.3522,radius:500},points:[],timeline:timeline.map(label=>({id:crypto.randomUUID(),label,time:''})),gear:gear.map(label=>({id:crypto.randomUUID(),label,checked:false}))});

