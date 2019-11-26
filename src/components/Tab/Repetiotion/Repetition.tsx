import * as React from 'react';

interface RepetitionProps {
    repetitions: Repetition[],
    OpenRepetitionWindow: boolean,
    OnClose: any,
    id: string

}

export interface Repetition {
    SourcesUrl_id: string,
    FIO: string,
    Positions: string,
    DopInfos: string,
    SourcesUrl_parseUrl: string,
    Remark: string
}

export class Repetition extends React.Component<RepetitionProps>{
    render() {
        const w:any = window;

        const openTab = w.ShowSourcesUrlId;
        
        return (
            (!this.props.OpenRepetitionWindow ? "" :
                <div className="repetiotion-modal" style={{ display: "block" }} aria-hidden="false">
                    <div className="modal-body">
                        <div className='pull-right close' onClick={() => this.props.OnClose(this.props.id)}>
                            <span className="icon-remove"></span>
                        </div>

                        <h3>Иформация о повторе</h3>


                        <table className="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <td>ФИО</td>
                                    <td>Должность</td>
                                    <td>Доп инфо</td>
                                    <td>Адрес суда</td>
                                    <td>О суде</td>
                                    <td>Cсылка на повтор</td>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.repetitions.map((repetition) => {
                                    return (
                                        <tr>
                                            <td>{repetition.FIO}</td>
                                            <td>{repetition.Positions}</td>
                                            <td>{repetition.DopInfos}</td>
                                            <td>{repetition.SourcesUrl_parseUrl}</td>
                                            <td>{repetition.Remark}</td>
                                            <td className="repetition_openTab" onClick={()=>openTab(repetition.SourcesUrl_id,null,repetition.Remark)}>Открыть страницу</td>
                                        </tr>
                                    )
                                })}
                                <tr></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            ))
    }
}