
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