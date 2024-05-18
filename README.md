### Kilimanjaro MD User Bot

A simple WhatsApp User bot.
<p align="center">
<img src="https://telegra.ph/file/f1743cfafa7bd3c4c4d11.jpg" width="300" height="300"/>
</p>
<p align="center">
  <a href="https://rb.gy/izabex"><img src="http://readme-typing-svg.herokuapp.com?color=d1fa02&center=true&vCenter=true&multiline=false&lines=Kilimanjaro+md+WHATSAPP+BOT+🗻🗻" alt="">
</p>
<p align="center">
<a href="https://wa.me/message/A4QG2JZKBXFTN1"><img title="Creator" src="https://img.shields.io/badge/Creator-ᴠᴇɴᴏᴄʏʙᴇʀ-red.svg?style=for-the-badge&logo=github"></a>
</p>
<p align="center">
<a href="https://github.com/kingjux?tab=followers"><img title="Followers" src="https://img.shields.io/github/followers/AlipBot?color=green&style=flat-square"></a>
<a href="https://github.com/kingjux/Kilimanjaro-md/stargazers/"><img title="Stars" src="https://img.shields.io/github/stars/kingjux/Kilimanjaro-md?color=white&style=flat-square"></a>
<a href="https://github.com/kingjux/Los-Rios-md/network/members"><img title="Forks" src="https://img.shields.io/github/forks/kingjux/Kilimanjaro-md?color=yellow&style=flat-square"></a>
<a href="https://github.com/kingjux/Los-Rios-md/watchers"><img title="Watching" src="https://img.shields.io/github/watchers/kingjux/Kilimanjaro-md?label=Watchers&color=red&style=flat-square"></a>
<a href="https://github.com/kingjux/Kilimanjaro-md/"><img title="Size" src="https://img.shields.io/github/repo-size/AlipBot/Api-Alpis?style=flat-square&color=darkred"></a>
<a href="https://hits.seeyoufarm.com"><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https://github.com/kingjux/Kilimanjaro-md/%2Fhit-counter&count_bg=%2379C83D&title_bg=%23555555&icon=probot.svg&icon_color=%2304FF00&title=hits&edge_flat=false"/></a>
<a href="https://github.com/kingjux/Kilimanjaro-md/graphs/commit-activity"><img height="20" src="https://img.shields.io/badge/Maintained-No-red.svg"></a>&nbsp;&nbsp;
</p>

## Setup

1. Deploy on Heroku
   - Click [SCAN 𝐐𝐑𝟏](https://kili-qr.onrender.com) 𝐨𝐫 [𝐒𝐂𝐀𝐍 𝐐𝐑𝟐](https://kilimanjaro-qr-99684a96d64f.herokuapp.com/)and scan the QR code through the "WhatsApp Linked Devices" option in your WhatsApp app.
   - or use [𝐏𝐀𝐈𝐑 𝐂𝐎𝐃𝐄 𝐒𝐄𝐑𝐕𝐄𝐑 𝟏](https://kilimanjaro.onrender.com/pair) 𝐎𝐑 [𝐏𝐀𝐈𝐑 𝐂𝐎𝐃𝐄 𝐒𝐄𝐑𝐕𝐄𝐑 𝟐](https://kilimanjaropairer-32ef0ce51a8d.herokuapp.com/pair) instead
   - You will get a session ID in WhatsApp, copy the ID only.
   - If you don't have an account on [Heroku](https://signup.heroku.com/), [create an account now](https://signup.heroku.com/).
   - If you don't have a GitHub account, [sign up](https://github.com/join) now.
   - [FORK](https://github.com/kingjux/whatsapp-Kilimanjaro-md/fork) this repository.
   - Now [DEPLOY](https://kilimanjaro-seven.vercel.app/).

2. Deploy on Koyeb
   - Create an account on [Koyeb](https://app.koyeb.com/auth/signup). [Sign up now](https://app.koyeb.com/auth/signup).
   - Get [DATABASE_URL](https://github.com/kingjux/Kilimanjaro-md/wiki/DATABASE_URL). You'll need this while deploying.
   - Get [SESSION_ID](https://venocyber-md-qr.onrender.com). Open Linked Devices in WhatsApp and [SCAN](https://venocyber-md-qr.onrender.com) now.
   - [pair code here](https://venocyber-md-session-oz6r.onrender.com/pair) 
   - Get the Koyeb API key. [Let's Go](https://app.koyeb.com/account/api).
   - [DEPLOY](https://qr-hazel-alpha.vercel.app/koyeb) now.
   - Enter [Environment Variables](https://github.com/kingjux/Kilimanjaro-md/wiki/Environment_Variables). [Read More](https://github.com/kingjux/Kilimanjaro-md/wiki/Environment_Variables).
   - Enter a name and click "Create Service."

3. Deploy on VPS or PC (Example here as in Ubuntu)

   - Install with script

         wget -N -O kilimanjaro.sh http://bit.ly/43JqREw && chmod +x kilimanjaro.sh && ./kilimanjaro.sh

   - Install without a script
       - Install git, ffmpeg, and curl:

             sudo apt -y update && sudo apt -y upgrade
             sudo apt -y install git ffmpeg curl

       - Install nodejs:

             sudo apt -y remove nodejs
             curl -fsSl https://deb.nodesource.com/setup_lts.x | sudo bash - && sudo apt -y install nodejs

       - Install yarn:

             npm install -g yarn

       - Install pm2:

             sudo yarn global add pm2

       - Clone the repository and install packages:

             git clone https://github.com/kingjux/Kilimanjaro-md botName
              cd botName
               yarn install --network-concurrency 1

       - Enter Environment Variables: Copy-paste the lines below (remove SESSION_ID if not needed):

             echo "SESSION_ID = Session_Id_you_Got_After_Scan_Dont_Add_This_Line_If_You_Can_Scan_From_Terminal_Itself
             PREFIX = .
             STICKER_PACKNAME = Venocyber
             ALWAYS_ONLINE = false
             RMBG_KEY = null
             LANGUAG = en
             WARN_LIMIT = 3
             FORCE_LOGOUT = false
             BRAINSHOP = 159501,6pq8dPiYt7PdqHz3
             MAX_UPLOAD = 200
             REJECT_CALL = false
             SUDO = 989876543210
             TZ = Asia/Kolkata
             VPS = true
             AUTO_STATUS_VIEW = true
             SEND_READ = true
             AJOIN = true
             DISABLE_START_MESSAGE = false
             PERSONAL_MESSAGE = null" > config.env

    - [Read More](https://github.com/kingjux/Kilimanjaro-md/wiki/Environment_Variables)

    - Edit the `config.env` using nano if needed. To save, press `Ctrl + O`, then press `Enter`, and to exit, press `Ctrl + X`.

    - Start and stop the bot:
        - To start the bot: `pm2 start . --name botName --attach --time`
        - To stop the bot: `pm2 stop botName`

### Thanks To

- [Venocybertech](https://github.com/venocybertech) for [WhatsAsena](https://github.com/venocybertech)
- [kingjux](https://github.com/kingjux) for [Baileys](https://github.com/kingjux)
