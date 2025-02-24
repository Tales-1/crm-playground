export type StageDetails = {
    title: string;
    color: string;
    deals: Deal[];
};

export type Deal = {
    id:number;
    title: string;
    primaryPerson: string;
    price: string;
    date: string;
    dealTarget: DealTargetEnum;
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
            { id:1, title: "LTD Solutions", primaryPerson: "John Doe", price: "£100,000.00", date: "03/03/2024", dealTarget: DealTargetEnum.OnTarget },
            { id:2, title: "TechCorp", primaryPerson: "Jane Smith", price: "£250,000.00", date: "10/04/2024", dealTarget: DealTargetEnum.Overdue },
            { id:3, title: "InnovateX", primaryPerson: "Alice Brown", price: "£75,500.00", date: "15/05/2024", dealTarget: DealTargetEnum.Approaching },
        ]
    },
    {
        title: "Needs Analysis",
        color: "#DFCF70",
        deals: [
            { id:5, title: "BrightFuture Inc", primaryPerson: "Michael Johnson", price: "£180,000.00", date: "05/07/2024", dealTarget: DealTargetEnum.OnTarget },
            { id:6, title: "GrowthTech", primaryPerson: "Emma White", price: "£95,000.00", date: "18/08/2024", dealTarget: DealTargetEnum.NoTarget },
            { id:7, title: "Synergy Solutions", primaryPerson: "Oliver Green", price: "£210,000.00", date: "29/09/2024", dealTarget: DealTargetEnum.Overdue },
        ]
    },
    {
        title: "Value Proposition",
        color: "#D0BAEF",
        deals: [
            { id:9, title: "Market Movers", primaryPerson: "Daniel Carter", price: "£275,000.00", date: "20/11/2024", dealTarget: DealTargetEnum.Overdue },
            { id:10, title: "Expand Inc", primaryPerson: "Isabella Hall", price: "£310,000.00", date: "25/12/2024", dealTarget: DealTargetEnum.Approaching },
            { id:11, title: "Pioneer Systems", primaryPerson: "James Brown", price: "£150,000.00", date: "30/01/2025", dealTarget: DealTargetEnum.NoTarget },
        ]
    },
    {
        title: "Closed",
        color: "#009D47",
        deals: [
            { id:13, title: "Summit Tech", primaryPerson: "Ethan Clarke", price: "£500,000.00", date: "10/03/2025", dealTarget: DealTargetEnum.NoTarget },
            { id:14, title: "Horizon Dynamics", primaryPerson: "Mia Evans", price: "£430,000.00", date: "15/04/2025", dealTarget: DealTargetEnum.Approaching },
            { id:15, title: "Peak Performance", primaryPerson: "Lucas Wright", price: "£290,000.00", date: "22/05/2025", dealTarget: DealTargetEnum.Overdue },
        ]
    }
];