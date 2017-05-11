export class Router {
    constructor(success, error){
        this.state = 0;
        this.success = success;
        this.error = error;
    }

    route(argument){
        if(this.state === 0){
            this.success(argument);
        } else {
            this.error(argument);
        }
    }

    setErrorState(){
        this.state = 1;
    }

    setSuccessState(){
        this.state = 0;
    }
}