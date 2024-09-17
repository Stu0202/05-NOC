
interface CheckServiceUseCase{
    execute(url:string):Promise<boolean>;

}

type SuccessCallBack = () => void;
type ErrorCallBack = (error: string) => void;




export class CheckService implements CheckServiceUseCase{

    
    constructor(
        private successCallBack: SuccessCallBack,
        private errorCallBack: ErrorCallBack
    ) {}

    async execute(url:string):Promise<boolean>{
       
        try {
            const req = await fetch(url)
            if(!req.ok){
                throw new Error(`Erron on check service ${url}}`);
            }
            this.successCallBack();
           
            return true;

        } catch (error) {
            this.errorCallBack('Error en la api');
            console.log(`${error}`)


            return false
        }
        
    
    }
}