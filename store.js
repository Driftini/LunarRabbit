class App {
    constructor(name, icon, shortdesc, fulldesc, auth, date, ver, script) {
        this.name = name
        this.icon = icon
        this.shortdesc = shortdesc
        this.fulldesc = fulldesc
        this.auth = auth
        this.date = date
        this.script = script
        this.ver = ver
    }
}

const Lunar = {
    appList: document.getElementById("list"),
    appendApp: function(obj) {
        let appended = document.createElement("button")

        let appendedIcon = document.createElement("img")
        appendedIcon.src = obj.icon
        
        let appendedRow = document.createElement("div")
        appendedRow.classList = ["row"]

        let appendedName = document.createElement("label")
        appendedName.innerText = obj.name
        appendedName.classList = ["name"]
        
        let appendedVer = document.createElement("label")
        appendedVer.innerText = " (" + obj.ver + ")"
        appendedVer.classList = ["ver"]

        let appendedDesc = document.createElement("label")
        appendedDesc.innerText = obj.shortdesc
        appendedDesc.classList = ["desc"]
      
      	let appendedCol = document.createElement("div")
        appendedCol.classList = ["column"]

        let appendedDate = document.createElement("label")
        appendedDate.innerText = obj.date
        appendedDate.classList = ["date"]

        let appendedAuth = document.createElement("label")
        appendedAuth.innerText = obj.auth
        appendedAuth.classList = ["auth"]
        
        this.appList.appendChild(appended)
        appended.appendChild(appendedIcon)
        appended.appendChild(appendedRow)
        appendedRow.appendChild(appendedName)
        appendedRow.appendChild(appendedVer)
        appended.appendChild(appendedDesc)
        appended.appendChild(appendedCol)
        appendedCol.appendChild(appendedAuth)
        appendedCol.appendChild(appendedDate)
    },
  	viewSettings: () => {
    	document.getElementById("noapp").style.display = "none"
        document.getElementById("settings").style.display = "block"
    },
  	viewApp: (obj) => {},
  	filterAuth: () => {
    	document.getElementById("f_name").value = ""
        let apps = document.getElementById("list").getElementsByTagName("button")
        let filter = document.getElementById("f_auth").value.toUpperCase()
        let auth
        
        for (i = 0; i < apps.length; i++) {
        	auth = apps[i].getElementsByClassName("auth")[0]
            if (auth.innerText.toUpperCase().indexOf(filter) > -1) {
                	apps[i].style.display = "flex";
                } else {
                	apps[i].style.display = "none";
                }
        }
    },
	filterName: () => {
    	document.getElementById("f_auth").value = ""
        let apps = document.getElementById("list").getElementsByTagName("button")
        let filter = document.getElementById("f_name").value.toUpperCase()
        let name
        
        for (i = 0; i < apps.length; i++) {
        	name = apps[i].getElementsByClassName("name")[0]
            if (name.innerText.toUpperCase().indexOf(filter) > -1) {
                	apps[i].style.display = "flex";
                } else {
                	apps[i].style.display = "none";
                }
        }
    }
}

let bro = new App("bro","https://www.windows93.net/c/sys/skins/w93/apps/3d.png","The cock is real . . .","I SAID THE COCK IS REAL FINALLY!!! ! !COCOCOCCKFOREVER", "Driftini", "05/07/2020", "1.0")

let bro2 = new App("Sex Installer","https://www.windows93.net/c/sys/skins/w93/install.png","free se x 2012","I SAID THE COCK IS REAL FINALLY!!! ! !COCOCOCCKFOREVER", "Driftini", "06/09/1969", "1.4", "script")

Lunar.appendApp(bro)
Lunar.appendApp(bro2)


document.getElementById("settingsbutton").addEventListener("click", Lunar.viewSettings)
document.getElementById("f_auth").addEventListener("keyup", Lunar.filterAuth)
document.getElementById("f_name").addEventListener("keyup", Lunar.filterName)