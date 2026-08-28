import{strict as assert}from'node:assert';import{MemoryOutings}from'../src/memory.js';import{blankOuting}from'../src/types.js';
const store=new MemoryOutings();const outing=blankOuting();outing.title='Création';await store.save(outing);assert.equal((await store.list()).length,1);outing.title='Modification';await store.save(outing);assert.equal((await store.list())[0].title,'Modification');await store.remove(outing.id);assert.equal((await store.list()).length,0);console.log('CRUD création/modification/suppression : OK');

