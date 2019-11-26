import * as React from 'react';
import { OrgItem, RegionItem } from '../../../model/interfaces/LoadOrgsResponse';

export interface ManualTabViewProps {
    tabId: string,
    gosOrgs: OrgItem[],
    regions: RegionItem[],
    onGosOrganChange: any,
    onRegionChange: any,
    closeGosOrganHelper: any,
    closeRegionHelper: any,
    onsendForm: any,
    savedId:string

}

interface ManualTabState {
    GosOrg: string,
    Name: string,
    Url: string,
    Region: string
}

export class ManualTabView extends React.Component<ManualTabViewProps, ManualTabState>{
    constructor(props: ManualTabViewProps) {
        super(props);
        this.state = {
            GosOrg: "",
            Name: "",
            Url: "",
            Region: ""
        }

        this.gosOrganHandler.bind(this);
        this.gosOrganSelectHandler.bind(this);
        this.nameChangeHandler.bind(this);
        this.urlChangeHandler.bind(this);
        this.regionChangeHandler.bind(this);
        this.sendFormHandler.bind(this);
    }

    sendFormHandler(){
        const response = {
            SourceUrlName:this.state.Name,
            SourceUrl: this.state.Url,
            GosOrg: this.state.GosOrg,
            Region: this.state.Region
        }
        return this.props.onsendForm(response);
    }

    regionChangeHandler(event: any) {
        const value = event.target.value;
        this.setState({ ...this.state, Region: value });
        if (value.length >= 3) {
            this.props.onRegionChange(value);
        }
    }

    regionSelectHandler(event: any) {
        this.setState({ Region: event.target.innerHTML });
        this.props.closeRegionHelper();
    }

    urlChangeHandler(event: any) {
        const value = event.target.value;
        this.setState({ ...this.state, Url: value });
    }

    nameChangeHandler(event: any) {
        const value = event.target.value;
        this.setState({ ...this.state, Name: value });
    }

    gosOrganHandler(event: any) {
        const value = event.target.value;
        this.setState({ ...this.state, GosOrg: value });
        if (value.length >= 3) {
            this.props.onGosOrganChange(value);
        }
    }

    gosOrganSelectHandler(event: any) {
        this.setState({ GosOrg: event.target.innerHTML });
        this.props.closeGosOrganHelper();
    }

    render() {
        const { gosOrgs } = this.props;
        // console.log(this.props.savedId + "!");
        const w: any = window;
        if(this.props.savedId != ""){
            w.confirmCloseWindowId(-1);
            w.ShowSourcesUrlId(this.props.savedId);     //закрываем вкладку и переключаемся на сохраненную
        }
        return (
            <div className="row-fluid">
                <div className="container-fluid">
                    <div className="row"
                    >

                        <div className="col-sm-12">
                            <div className='manual_adding_form'>
                                <div className='pull-right close' onClick={() => w.confirmCloseWindowId(-1)}>
                                    <span> <img style={{ width: "15px" }} src="/Content/themes/base/images/close_btn.svg"></img></span>
                                </div>
                                <div className='' ><h4>Создайте карточку</h4></div>

                                <form className="form-horizontal">

                                    <div className="control-group">
                                        
                                        <label className="control-label" >Государственный орган</label>
                                        <div className="controls">
                                            <input type="text"
                                                value={this.state.GosOrg}
                                                placeholder='Начните набор для отображения подсказок'
                                                onChange={(event) => this.gosOrganHandler(event)}
                                            />
                                        </div>
                                        {this.props.gosOrgs.length > 0 ?
                                            <div className="controls " >
                                                <div className="position_box" >
                                                    {
                                                        this.props.gosOrgs.map((org: OrgItem) => {
                                                            return (
                                                                <div className="position_box__item" key={org.Id} onClick={(event) => this.gosOrganSelectHandler(event)}>{org.Name}</div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div> : ""}
                                    </div>

                                    <div className="control-group">
                                        <label className="control-label" >Наименование источника</label>
                                        <div className="controls">
                                            <input type="text"
                                                value={this.state.Name}
                                                onChange={(event) => this.nameChangeHandler(event)}
                                            />
                                        </div>
                                    </div>

                                    <div className="control-group">
                                        <label className="control-label" >URL</label>
                                        <div className="controls">
                                            <input type="text"
                                                value={this.state.Url}
                                                onChange={(event) => this.urlChangeHandler(event)}
                                            />
                                        </div>
                                    </div>

                                    <div className="control-group">
                                        <label className="control-label" >Регион</label>
                                        <div className="controls">
                                            <input type="text"
                                                value={this.state.Region}
                                                placeholder='Начните набор для отображения подсказок'
                                                onChange={(event) => this.regionChangeHandler(event)}
                                            />
                                        </div>
                                        {this.props.regions.length > 0 ?
                                            <div className="controls " >
                                                <div className="position_box" >
                                                    {
                                                        this.props.regions.map((region: RegionItem) => {
                                                            return (
                                                                <div className="position_box__item" key={region.Id} onClick={(event) => this.regionSelectHandler(event)}>{region.Name}</div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div> : ""}
                                    </div>
                                   
                                        
                                </form>

                                <div className="pull-right">
                                            <input type="button"
                                                value='Создать карточку'
                                                className='btn btn-success manual_adding_form__submit_btn'
                                                onClick={()=>this.props.onsendForm({
                                                    SourceUrlName:this.state.Name,
                                                    SourceUrl: this.state.Url,
                                                    GosOrg: this.state.GosOrg,
                                                    Region: this.state.Region
                                                })
                                                
                                            }
                                            />
                                     
                                    </div>
                            </div>


                        </div>
                    </div>

                </div>
            </div>
        )
    }
}