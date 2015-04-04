export class SingletonService
{
    message:String;
    static instance:SingletonService;
    static isCreating:Boolean = false;

    constructor() {
        if (!SingletonService.isCreating) {
            throw new Error("You can't call new in Singleton instances! Call SingletonService.getInstance() instead.");
        }
    }

    static getInstance() {
        if (SingletonService.instance == null) {
            SingletonService.isCreating = true;
            SingletonService.instance = new SingletonService();
            SingletonService.isCreating = false;
        }

        return SingletonService.instance;
    }

    setMessage(message:String) {
        this.message = message;
    }

    getMessage() {
        return this.message;
    }
}
