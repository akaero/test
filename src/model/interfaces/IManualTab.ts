import { OrgItem, RegionItem } from "./LoadOrgsResponse";

export interface ManualAddStore {
    error: string
    gosOrgs: Array<OrgItem>,
    region: Array<RegionItem>,

    savedId:string // id сохраненной карточки для открытия

}

export interface ManualTabResponse {
    SourceUrlName: string,
    SourceUrl: string,
    GosOrg: string
    Region: string
}