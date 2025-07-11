const fs = require('fs');
const os = require('os');



const userInfo = os.userInfo();
const systeminfo = {
  username: userInfo.username ,
  platform:os.platform,
  arch:os.arch(),
  cpu:os.cpus.length
};


const systemdata =`
username : ${systeminfo.username}
platfrom : ${systeminfo.platform}
arch : ${systeminfo.arch}
cores : ${systeminfo.cpus}
`
//console.log(systemdata);

fs.writeFileSync('file.text','all system info added : \n ');
fs.appendFileSync('file.text', systemdata);
const data = fs.readFileSync('file.text','utf-8' );


console.log(data);