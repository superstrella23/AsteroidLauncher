//const { Client } = require("discord-rpc-patch")

//Constantes
const returnButton1 = document.getElementById('loginaCancelButton')
const launch_button = document.getElementById('launch_button')

const { URL }                 = require('url')


//lets
let loginViewOnCancel = VIEWS.loginOptions
let landingOffTP = VIEWS.landing

var isofflimemode = false


returnButton1.onclick = (e) => {
    switchView(getCurrentView(), loginViewOnCancel, 500, 500, () => {
        
    })
}

const button1 = document.getElementById('loginaButton')

button1.onclick = (e) => {
    switchView(getCurrentView(), landingOffTP, 500, 500, () => {
            isofflimemode = true;
            document.getElementById('user_text').textContent = " " + document.getElementById('nick').value;        
            //username.value = document.getElementById('nick').value;
    })
}

const { Client } = require('minecraft-launcher-core')
const Launcher = new Client


launch_button.onclick = (e) => {
      if(isofflimemode == true){
        console.log("isofflinemode asdf")
        const nickInput = document.getElementById("nick").value
        let opt = {
            authorization: {
                acces_token : '',
                client_token: '',
                uuid: '',
                name: nickInput,
                user_properties: '{}',
                meta: {
                    type: 'mojang' || 'msa',
                    demo: false,
                    xuid: '',
                    clintId: ''
                }
            },
            root: "./minecraft",
            version: {
                number: "1.18.2",
                type: "release"
            },
            memory: {
                max: "8G",
                min: "4G"
            },
            forge: "../forge-1.18.2-40.2.4-installer (1)",
            clientPackage: 'https://drive.google.com/uc?id=1BKbv7ClPGafE1UDFGXWufpiXUj2Q9iK-&export=download'
        }

        document.getElementById('nick').disabled = true;
        Launcher.launch(opt)
        Launcher.on('debug', (e) => console.log(e))
        Launcher.on('data', (e) => console.log(e))
        Launcher.on('data', (e) => {  
        })
      }
}

