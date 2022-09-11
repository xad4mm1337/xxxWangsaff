
const fs = require('fs')
const chalk = require('chalk')


//gausah di apa² in!
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
//=================================================//
//—————「 Set Kebutuhan Button & Kontak 」—————//
//ubah aja kalau ada yang gapunya gsh di hps anggap aja credits :), note tanda ' gausah di hapus!
global.youtube = 'https://youtube.com/channel/UCM9bNaVMgT7rKmdk6qUoqLw'
global.ig = 'https://www.instagram.com/127.00.01'
global.mygc = 'wa.me/50767755555'
global.myweb = 'https://myhypermall.com/'
global.linkgrupss = "https://chat.whatsapp.com/"
global.linkpro = 'mailto:support@whatsapp.com?subject=Deactivate%20My%20Account%20Number&body=Please%20Deactivate%20The%20My%20Account%20Number%20%2B62XXXXXXXX%20Immediately%20Because%20The%20Number%20Has%20Been%20Lost'
global.email = 'ad4mm1337@gmail.com'
global.region = 'indonesia'
//—————「 Set Nama Own & Bot 」—————//
global.ownername = 'ꪶ 𝐗𝐚𝐝𝟒𝐦𝐦 〩 1337 丰 ' //ubah jadi nama mu, note tanda ' gausah di hapus!
global.botname = 'ꪶ 𝐗𝐚𝐝𝟒𝐦𝐦 〩 1337 丰' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.footer = 'ꪶ 𝐗𝐚𝐝𝟒𝐦𝐦 〩  1337 丰' //ubah jadi nama mu, note tanda ' gausah di hapus!
//=================================================//
// Other
global.owner = ['50767755555']
global.packname = 'ꪶ 𝐗𝐚𝐝𝟒𝐦𝐦 〩 𝐌𝐨𝐝𝐬 丰'
global.ownerr = ['ꪶ 𝐗𝐚𝐝𝟒𝐦𝐦 〩 𝐌𝐨𝐝𝐬 丰']
global.author = 'Bot Privat🎭'
global.sessionName = './fallen'
global.prefa = ['','!','.',',','🐤','🗿']
global.sp = '⭔'
global.mess = {    
    wait: '*Loading... Sabar Wibu*_',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
}
//=================================================//

//=================================================//

//=================================================//
global.thumb = fs.readFileSync("./baseikal/image/hw.jpg")
global.visoka = fs.readFileSync("./baseikal/video/hikal.gif")
global.log0 = fs.readFileSync("./baseikal/image/haikal.jpg")
global.menuimg = 'https://k.top4top.io/p_2388xws321.jpg'
global.ggikal = fs.readFileSync("./baseikal/video/haikal.mp4")
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
