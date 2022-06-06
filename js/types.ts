export type CityType={
    title:string,
    hauses:Array<HauseType>,
    govermentBuilders:Array<GoverMentType>
    citizensNumber:number
}
//GovermentType
export type GoverMentType={
    type:"HOSPITAL"|"FIRE-STATION",
    budget:number,
    staffCount:number,
    address:GovAddressType
}
export type GovAddressType={
    street:StreetType
}

//Hause type
export type StreetType={
    title:string
}
export type AddressType={
    number:number,
    street: StreetType
}

export type HauseType={
    buildedAt:number,
    repaired:boolean,
    address:AddressType
}