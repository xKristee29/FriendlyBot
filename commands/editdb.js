module.exports = {
  name: 'editdb',
  description: '',
  execute(args, db, message){
    if(args[0] === 'set'){
      db.set(args[1], args[2]).then(() => {});
    }
    if(args[0] === 'delete'){
      db.delete(args[1]).then(() => {});
    }
    if(args[0] === 'show'){
      db.list().then(keys => {
        for(const key of keys){
          db.get(key).then(value => {
            console.log(key,' => ',value);
          });
        }
        console.log(keys);
      });
    }
  }
}