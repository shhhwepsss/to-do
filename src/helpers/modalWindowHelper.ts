export class modalWindowHelper {
    private window;

    constructor(modalWindow: React.MutableRefObject<HTMLDivElement | null>) {
        this.window = modalWindow
    }
    openWindow(){
        if(this.window !== null){
            this.window.current!.classList.toggle("non-active")
            this.window.current!.classList.toggle("active")
        }
        
    }
    closeWindow(){
        if(this.window !== null){
            this.window.current!.classList.toggle("active")
            this.window.current!.classList.toggle("non-active")
        }
    }
}