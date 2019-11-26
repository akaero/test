import { combineReducers } from "redux";
import { htmlReducer, source_nameReducer, UrlReducer, UdateOfLastSaveReducer, cardIsHiddenReducer, dataReducer, tabIdReducer, dataEditingIdReducer, openRedactorReducer, contextMenuOpenReducer, pasteFioToRedactorReducer, statusMessageReducer, repetitionInRedactorReducer, OpenRepetitionInRedactorWindowReducer, backgroundWorkersReducer, typeOfTabReducer, initHtmlReducer } from "./reducers";
import { manualTabReducer } from "./manualTabReducers";

export var rootReducer = combineReducers<any>({
    typeOfTab: typeOfTabReducer,
    initHtml:initHtmlReducer,
    html: htmlReducer,
    source_name: source_nameReducer, //наименование источника
    url: UrlReducer, //урл источника
    dateOfLastSave: UdateOfLastSaveReducer,//время последнего сохранения
    cardIsHidden: cardIsHiddenReducer, //карточка скрыта или нет
    data: dataReducer,
    tabId: tabIdReducer, //id таба
    dataEditingId: dataEditingIdReducer, //номер редактируемого рпдла
    openRedactor: openRedactorReducer, //открыт ли редактор рпдла
    contextMenuOpen: contextMenuOpenReducer,
    pasteFioToRedactor: pasteFioToRedactorReducer, // фио для вставки в новый рпдл
    statusMessage: statusMessageReducer, //сообщение о результате запроса на сервер

    repetitionInRedactor: repetitionInRedactorReducer, // повторы в окне редактора
    OpenRepetitionInRedactorWindow: OpenRepetitionInRedactorWindowReducer,
    backgroundWorkers: backgroundWorkersReducer, //фоновые задачи,
    manualTabStore: manualTabReducer
})