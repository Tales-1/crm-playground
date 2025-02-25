export type StageDetails = {
    title: string;
    color: string;
    deals: Deal[];
};

export type Deal = {
    id:number;
    organisation: string;
    primaryPerson: string;
    price: number;
    date: string;
    dealTarget: DealTargetEnum;
    stageTitle:string
};

export enum DealTargetEnum {
    OnTarget = 1,
    Approaching,
    Overdue,
    NoTarget
}

export const groupedDeals: StageDetails[] = [
    {
        title: "Qualification",
        color: "#FFA1A3",
        deals: [
            { id:1, organisation: "LTD Solutions", primaryPerson: "John Doe", price: 100000, date: "03/03/2024", dealTarget: DealTargetEnum.OnTarget, stageTitle:"Qualification"  },
            // { id:2, title: "TechCorp", primaryPerson: "Jane Smith", price: "£250,000.00", date: "10/04/2024", dealTarget: DealTargetEnum.Overdue, stageTitle:"Qualification"  },
            // { id:3, title: "InnovateX", primaryPerson: "Alice Brown", price: "£75,500.00", date: "15/05/2024", dealTarget: DealTargetEnum.Approaching, stageTitle:"Qualification"  }, },
        ]
    },
    {
        title: "Needs Analysis",
        color: "#DFCF70",
        deals: [
            { id:5, organisation: "BrightFuture Inc", primaryPerson: "Michael Johnson", price: 180000, date: "05/07/2024", dealTarget: DealTargetEnum.OnTarget, stageTitle:"Needs Analysis"  },
            { id:6, organisation: "GrowthTech", primaryPerson: "Emma White", price: 95000, date: "18/08/2024", dealTarget: DealTargetEnum.NoTarget, stageTitle:"Needs Analysis"  },
            { id:7, organisation: "Synergy Solutions", primaryPerson: "Oliver Green", price: 210000, date: "29/09/2024", dealTarget: DealTargetEnum.Overdue, stageTitle:"Needs Analysis"  },
        ]
    },
    {
        title: "Value Proposition",
        color: "#D0BAEF",
        deals: [
            { id:9, organisation: "Market Movers", primaryPerson: "Daniel Carter", price: 275000, date: "20/11/2024", dealTarget: DealTargetEnum.Overdue, stageTitle:"Value Proposition"  },
            { id:10, organisation: "Expand Inc", primaryPerson: "Isabella Hall", price: 310000, date: "25/12/2024", dealTarget: DealTargetEnum.Approaching, stageTitle:"Value Proposition" },
            { id:11, organisation: "Pioneer Systems", primaryPerson: "James Brown", price: 150000, date: "30/01/2025", dealTarget: DealTargetEnum.NoTarget, stageTitle:"Value Proposition" } ,
        ]
    },
    {
        title: "Closed",
        color: "#009D47",
        deals: [
            { id:13, organisation: "Summit Tech", primaryPerson: "Ethan Clarke", price: 500000, date: "10/03/2025", dealTarget: DealTargetEnum.NoTarget, stageTitle:"Closed"  },
            { id:14, organisation: "Horizon Dynamics", primaryPerson: "Mia Evans", price: 430000, date: "15/04/2025", dealTarget: DealTargetEnum.Approaching, stageTitle:"Closed"  },
            { id:15, organisation: "Peak Performance", primaryPerson: "Lucas Wright", price: 290000, date: "22/05/2025", dealTarget: DealTargetEnum.Overdue, stageTitle:"Closed"  },
        ]
    }
];