import { BadgeCheck, AlertCircle, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { Deal } from "@/app/deals/data/deal-schema";

const getStageIcon = (stage: Deal['stage']) => {
  switch(stage) {
    case 'closed-won':
      return <BadgeCheck className="h-4 w-4 text-crm-success" />;
    case 'closed-lost':
      return <AlertCircle className="h-4 w-4 text-crm-error" />;
    default:
      return <Clock className="h-4 w-4 text-crm-warning" />;
  }
};

const getStageColor = (stage: Deal['stage']) => {
  switch(stage) {
    case 'lead':
      return 'bg-blue-500/10 text-blue-500';
    case 'opportunity':
      return 'bg-purple-500/10 text-purple-500';
    case 'proposal':
      return 'bg-amber-500/10 text-amber-500';
    case 'negotiation':
      return 'bg-orange-500/10 text-orange-500';
    case 'closed-won':
      return 'bg-green-500/10 text-green-500';
    case 'closed-lost':
      return 'bg-red-500/10 text-red-500';
  }
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', { 
    month: 'short', 
    day: 'numeric', 
    year: 'numeric' 
  }).format(date);
};

export default function DealItem({ deal }: { deal : Deal }){
    const probability = Math.floor(Math.random() * 100);

  return (
    <div className="p-3 rounded-lg border border-crm-border-light bg-crm-card/50 hover-scale">
      <div className="flex justify-between items-start">
        <div className="flex-1 min-w-0">
          <h4 className="font-medium text-sm truncate">{deal.name}</h4>
          <div className="flex items-center space-x-2 mt-1">
            <span className={cn(
              "text-xs px-2 py-0.5 rounded-full",
              getStageColor(deal.stage)
            )}>
              {deal.stageTitle.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
            </span>
            <span className="text-xs text-crm-muted">
              {formatDate(deal.date)}
            </span>
          </div>
        </div>
        
        <div className="flex items-center rounded-md px-2 py-1">
          <span className="font-medium text-sm mr-2">${deal.price.toLocaleString()}</span>
          {getStageIcon(deal.stage)}
        </div>
      </div>
      
      <div className="mt-2">
        <div className="w-full bg-crm-highlight h-1.5 rounded-full">
          <div 
            className={cn(
              "h-full rounded-full",
              deal.stage === 'closed-won' ? "bg-crm-success" :
              deal.stage === 'closed-lost' ? "bg-crm-error" : "bg-crm-accent"
            )}
            style={{ width: `${probability}%` }}
          ></div>
        </div>
        <div className="flex justify-between mt-1">
          <span className="text-xs text-crm-muted">Probability</span>
          <span className="text-xs font-medium">{probability}%</span>
        </div>
      </div>
    </div>
  );
};