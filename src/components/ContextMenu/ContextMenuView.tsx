import * as React from "react";

interface contextMenuProps{
    
    show:boolean,
    x:number,
    y:number,
    CreateNewPerson:any,
    fio:string
}

export class contextMenuView extends React.Component<contextMenuProps>{
constructor(props:contextMenuProps){
    super(props)

    // this.copySelection.bind(this);
}
    //  copySelection(event:any){
    //      event.preventDefault();
    //     document.execCommand('copy');
    //     alert('copy!');
    // }

    render() {
        return (
          (this.props.show?
            <div className="menu_context" style={{left:this.props.x+"px", top:this.props.y+"px"}}>
                <ul className="menu-options">
                    <li className="menu-option" onClick={()=>{this.props.CreateNewPerson(this.props.fio)}}>Создать новую запись</li>
                    {/* <li className="menu-option" onClick={()=>this.copySelection(event)}>Копировать</li> */}
                </ul>
            </div>:"")
        )
    }
}

