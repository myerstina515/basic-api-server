class ClothesModel {
  constructor(){
    this.id = 0;
    this.name;
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
    if(!id) {return null;}
    else{
      const i = this.db.findIndex(record => record.id === parseInt(id));
      this.db[i].name = obj.name;
      return this.db[i];
    }
    //TODO: figure out how to update an object
  }

  delete(id){
    if(!id) {return null;}
    else {
      const i = this.db.findIndex(record => record.id);
      this.db.find(record => record.id === parseInt(id));
      this.db.splice(i, 1);
      return this.db;
    }
    //TODO: figure out how to delete an object
  }
}

module.exports = ClothesModel;
