import * as React from 'react';
import { render } from 'react-dom';
import { FIND_REPETIOTION_FROM_REDACTOR, FIND_REPETIOTION, COLORIZE, TAB_TYPE_MANUAL } from '../../../model/models/constants';

export interface HeaderProps {
    Remark: string,
    ParseUrl: string,
    UpdateDate: string,
    backgroundWorkers: string[],
    typeOfTab:string

}

class HeaderView extends React.Component<HeaderProps>{

    render() {
        const { Remark, ParseUrl, UpdateDate, backgroundWorkers,typeOfTab } = this.props;
        const backgroundWorkersDiv = () => {
            console.log(backgroundWorkers);
            if(typeOfTab == TAB_TYPE_MANUAL) return "";

              return  backgroundWorkers.map((worker) => {
                        if(worker == FIND_REPETIOTION)
                            {
                                return (
                                    <div>
                                        <img style={{ width: "15px" }} src="/Content/themes/base/images/wait.gif" />
                                        <text> Поиск повторений</text>
                                    </div>
                                )
                            }

                            if(worker == COLORIZE){
                                return (
                                    <div>
                                        <img style={{ width: "15px" }} src="/Content/themes/base/images/wait.gif" />
                                        <text>Подсветка элементов</text> 
                                    </div>
                                )
                            }

                       

                         return "";
                    });


        }

        return (
            <div className="row-fluid">
                <table className="table table-striped table-bordered table-condensed">
                    <tbody>
                        <tr>
                            <th>Наименование источника</th>
                            <th>URL</th>
                            <th>Дата и время сохранения страницы</th>
                            {typeOfTab!=TAB_TYPE_MANUAL?<th>Фоновые процессы</th>:""}
                        </tr>
                        <tr>
                            <td>
                                {Remark}
                            </td>
                            <td>
                                <a href={ParseUrl} target="_blank">{ParseUrl}</a>
                            </td>
                            <td>
                                {UpdateDate}
                            </td>
                         
                            {typeOfTab!=TAB_TYPE_MANUAL?   <td>{backgroundWorkersDiv()}</td>:""}

                        </tr>
                    </tbody>
                </table>
                
                
            </div>)
    }
}

export default HeaderView;
