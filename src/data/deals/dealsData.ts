export type StageDetails = {
    title: string;
    color: string;
    deals: Deal[];
};

export type Deal = {
    title: string;
    primaryPerson: string;
    price: string;
    date: string;
    onTarget: OnTargetEnum;
};

enum OnTargetEnum {
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
            { title: "LTD Solutions", primaryPerson: "John Doe", price: "£100,000.00", date: "03/03/2024", onTarget: OnTargetEnum.OnTarget },
            { title: "TechCorp", primaryPerson: "Jane Smith", price: "£250,000.00", date: "10/04/2024", onTarget: OnTargetEnum.Overdue },
            { title: "InnovateX", primaryPerson: "Alice Brown", price: "£75,500.00", date: "15/05/2024", onTarget: OnTargetEnum.Approaching },
            { title: "NextGen Ltd", primaryPerson: "Robert Wilson", price: "£320,000.00", date: "22/06/2024", onTarget: OnTargetEnum.NoTarget }
        ]
    },
    {
        title: "Needs Analysis",
        color: "#DFCF70",
        deals: [
            { title: "BrightFuture Inc", primaryPerson: "Michael Johnson", price: "£180,000.00", date: "05/07/2024", onTarget: OnTargetEnum.OnTarget },
            { title: "GrowthTech", primaryPerson: "Emma White", price: "£95,000.00", date: "18/08/2024", onTarget: OnTargetEnum.NoTarget },
            { title: "Synergy Solutions", primaryPerson: "Oliver Green", price: "£210,000.00", date: "29/09/2024", onTarget: OnTargetEnum.Overdue },
            { title: "Visionary Ltd", primaryPerson: "Sophia Black", price: "£400,000.00", date: "12/10/2024", onTarget: OnTargetEnum.Approaching }
        ]
    },
    {
        title: "Value Proposition",
        color: "#D0BAEF",
        deals: [
            { title: "Market Movers", primaryPerson: "Daniel Carter", price: "£275,000.00", date: "20/11/2024", onTarget: OnTargetEnum.Overdue },
            { title: "Expand Inc", primaryPerson: "Isabella Hall", price: "£310,000.00", date: "25/12/2024", onTarget: OnTargetEnum.Approaching },
            { title: "Pioneer Systems", primaryPerson: "James Brown", price: "£150,000.00", date: "30/01/2025", onTarget: OnTargetEnum.NoTarget },
            { title: "Nova Enterprises", primaryPerson: "Charlotte Adams", price: "£225,000.00", date: "05/02/2025", onTarget: OnTargetEnum.OnTarget }
        ]
    },
    {
        title: "Closed",
        color: "#009D47",
        deals: [
            { title: "Summit Tech", primaryPerson: "Ethan Clarke", price: "£500,000.00", date: "10/03/2025", onTarget: OnTargetEnum.NoTarget },
            { title: "Horizon Dynamics", primaryPerson: "Mia Evans", price: "£430,000.00", date: "15/04/2025", onTarget: OnTargetEnum.Approaching },
            { title: "Peak Performance", primaryPerson: "Lucas Wright", price: "£290,000.00", date: "22/05/2025", onTarget: OnTargetEnum.Overdue },
            { title: "Everest Solutions", primaryPerson: "Amelia Scott", price: "£350,000.00", date: "30/06/2025", onTarget: OnTargetEnum.OnTarget }
        ]
    }
];