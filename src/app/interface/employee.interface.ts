
export interface ITMSEmployeeData{
    id: number,
    name: string,
    task: ITask[],
    temp: "#98B2D1",
}

export interface ITask{
    blockedBy: string,
    currentStatus: string,
    description: string
    estimated: number,
    id: number,
    todo: number
}


// export interface IEmployee {
//     employee: TMSEmploye[]
//   }
  
  export interface IEmployee {
    name: string
    id: number
  }

    export interface GlossDef {
        para: string;
        GlossSeeAlso: string[];
    }

    export interface GlossEntry {
        ID: string;
        SortAs: string;
        GlossTerm: string;
        Acronym: string;
        Abbrev: string;
        GlossDef: GlossDef;
        GlossSee: string;
    }

    export interface GlossList { GlossEntry: GlossEntry;}

    export interface GlossDiv {
        title: string;
        GlossList: GlossList;
    }

    export interface Glossary {
        title: string;
        GlossDiv: GlossDiv;
    }

    export interface IGloss { glossary: Glossary; }

