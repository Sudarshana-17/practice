interface Iphone{
    useLightingCharger()
}

class iphone implements Iphone{
    useLightingCharger() {
        console.log("using micro USB")
    }
  
}
interface Iandroid {
    microUSBCharger()
}
class android implements Iandroid{
    microUSBCharger() {
        throw new Error("Method not implemented.")
    }
    microUSB() {
        console.log("use micro USB")
        
    }
}

class useLightingTomicroUSB implements Iandroid{
   iphoneDevice:iphone
    microUSBCharger() {
        console.log("i want to use micro usb")
        this.iphoneDevice.useLightingCharger()
    }
    constructor(ipphone:iphone){
        this.iphoneDevice=ipphone
    }


}