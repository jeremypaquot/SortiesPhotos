import {createClient} from '@supabase/supabase-js';import type{Outing}from'./types';import{blankOuting}from'./types';import{MemoryOutings}from'./memory';
const url=import.meta.env.VITE_SUPABASE_URL as string|undefined,key=import.meta.env.VITE_SUPABASE_ANON_KEY as string|undefined;
export const configured=Boolean(url&&key);const supabase=configured?createClient(url!,key!):null;
const samples=()=>{const a=blankOuting();Object.assign(a,{title:'Chevreuils à l’aube',date:'2026-09-12',place:'Forêt de Fontainebleau',animals:'Chevreuil, pic noir',weather:'Éclaircies',temperature:'12',wind:'Nord-Est',sunrise:'07:18',sunset:'20:08',hideType:'Affût mobile',status:'Prête'});a.zone={lat:48.4047,lng:2.7016,radius:700};const b=blankOuting();Object.assign(b,{title:'Oiseaux des marais',date:'2026-10-04',place:'Baie de Somme',animals:'Avocette, spatule blanche',habitat:'Marais'});b.zone={lat:50.214,lng:1.55,radius:900};return[a,b]};const memory=new MemoryOutings(samples());
const unpack=(r:any):Outing=>({...r.data,id:r.id,created_at:r.created_at,updated_at:r.updated_at});
export async function listOutings(){if(!supabase)return memory.list();const{data,error}=await supabase.from('outings').select('*').order('date');if(error)throw error;return(data??[]).map(unpack)}
export async function saveOuting(o:Outing){if(!supabase)return memory.save(o);const{data,error}=await supabase.from('outings').upsert({id:o.id,title:o.title,date:o.date,data:o,updated_at:new Date().toISOString()}).select().single();if(error)throw error;return unpack(data)}
export async function deleteOuting(id:string){if(!supabase)return memory.remove(id);const{error}=await supabase.from('outings').delete().eq('id',id);if(error)throw error}

