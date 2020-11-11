module.exports = {
  name: 'amongus',
  description: '',
  execute(args, db, message){
    if(args[0] === 'lastcrack'){
      db.get("AUCRACK").then(value => {
        message.channel.send(value);
        console.log(value);
      });
    }
  }
}