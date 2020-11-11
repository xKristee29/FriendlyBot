module.exports = {
  name: 'sv-info',
  description: '',
  execute(args, db, message){
    if(args[0] === 'yt'){
      db.get("YTSALT").then(value => {
        message.channel.send(value);
        console.log(value);
      });
    }
    else if(args[0] === 'ig'){
      if(args[1] === 'wili') db.get("IG_WILI").then(value => {
        message.channel.send(value);
        console.log(value);
      });
      if(args[1] === 'kristee') db.get("IG_KRI").then(value => {
        message.channel.send(value);
        console.log(value);
      });
      else db.get("IGSALT").then(value => {
        message.channel.send(value);
        console.log(value);
      });
    }
  }
}