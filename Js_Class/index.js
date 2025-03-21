class Computer{
    #SSD =512  //PRIVATE PROPERTY JONNO # USE KORE
    camera = 50
    constructor(name,ram){
        this.name =name,
        this.ram = ram
        console.log(this) //constructor use korle automaticly call hobe

    }
    aboutComputer(){
        console.log(`computer name :${this.name},
            ram:${this.ram}GB,SSD: ${this.#SSD}`)
            this.#SSDDETAILS()
    }
    #SSDDETAILS(){
        console.log(`SSD: ${this.#SSD}`)
    }
    get cameraDetails(){
        return this.camera
    } //get akta function na ami aeta k directly access nite parbo aeta object style a accces kora jabe

    set cameraDetails(px){
       this.camera = px
    }

}
let hp = new Computer("hp 124",16)
console.log(hp)
hp.aboutComputer()
hp.cameraDetails = "40px"
console.log(hp.cameraDetails)
console.log(hp.cameraDetails)