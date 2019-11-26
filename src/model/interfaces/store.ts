import DataItem from "./DataItem";
import { ContextMenuModel } from "./ContextMenu";
import StatusMessage from "./statusMessage";
import { Repetition } from "../../components/Tab/Repetiotion/Repetition";
import { ManualAddStore } from "./IManualTab";

export default interface State{

    typeOfTab:string //тип таба, либо ручное добавление( то есть мы сами создали в OpenData..Official_SourcesUrl, соотвественно html нет и тд), либо автоматическое добавление с html и тд
    initHtml:string, //сюда сохраняем исходный html
    html:string,
    source_name:string, //наименование источника
    url:string, //урл источника
    dateOfLastSave:string,//время последнего сохранения
    backgroundWorkers:string[] //фоновые задачи типо поиск повторов
    cardIsHidden:boolean, //карточка скрыта или нет
    data:Array<DataItem>
    tabId:string, //id таба

    //redactor
    dataEditingId:string ,//номер редактируемого рпдла
    openRedactor: boolean, //открыт ли редактор рпдла
    pasteFioToRedactor:string, //фио которое вставляется при нажатии на контекстное меню в html
    repetitionInRedactor:Repetition[],
    statusMessage:StatusMessage, //сообщение со статусом операции
    OpenRepetitionInRedactorWindow: boolean, //открыта ли карточка с повтором

    contextMenuOpen:ContextMenuModel, //отрыто ли контекстное меню

    //manualAddTab
    manualTabStore: ManualAddStore
}



