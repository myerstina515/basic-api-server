'use strict';

class FoodModel {
  constructor(){
    this.id = 0;
    this.db = [];
  }

  get(id){
    if(id){
      return this.db.find(record => record.id === id);
    } else {
      return this.db;
    }
  }

  create(obj){
    obj.id = ++this.id;
    this.db.push(obj);
    return obj;
  }

  update(id, obj){
    if (!id) { return null; }
    else {
      this.db[id].updateTo(obj);
    }
    //TODO: figure out how to update an object
    return obj;
  }

  delete(id){
    if(!id) {return null;}

    //TODO: figure out how to delete the object
    return null;
  }
}

module.exports = FoodModel;
