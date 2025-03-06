import { BadgeCheck, AlertCircle, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { Deal } from "@/app/deals/_data/deal-schema";
import { ICON_SIZES } from "@/constants/constants";

const getStageIcon = (stage: Deal['stage']) => {
  switch(stage) {
    case 'closed-won':
      return <BadgeCheck className="text-crm-success" size={ICON_SIZES.xSmall} />;
    case 'closed-lost':
      return <AlertCircle className="text-crm-error" size={ICON_SIZES.xSmall} />;
    default:
      return <Clock className="text-crm-warning" size={ICON_SIZES.xSmall} />;
  }
};

const getStageColor = (stage: Deal['stage']) => {
  console.log(stage)
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
    <div className="p-3 rounded-lg bg-card border border-border-light hover-scale">
      <div className="flex justify-between items-start">
        <div className="flex-1 min-w-0">
          <h4 className="font-medium text-sm truncate">{deal.name}</h4>
          <div className="flex items-center space-x-2 mt-1">
            <span className={cn(
              "text-xs px-2 py-0.5 rounded-full",
              getStageColor(deal.stageTitle)
            )}>
              {deal.stageTitle.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
            </span>
            <span className="text-[11px] text-muted-foreground">
              {formatDate(deal.date)}
            </span>
          </div>
        </div>
        
        <div className="flex items-center rounded-md px-2 py-1 border border-border-light">
          <span className="font-medium text-[10px] mr-2">${deal.price.toLocaleString()}</span>
          {getStageIcon(deal.stageTitle)}
        </div>
      </div>
      
      <div className="mt-2">
        <div className="w-full bg-[var(--background)] h-1.5 rounded-full">
          <div 
            className={cn(
              "h-full rounded-full",
              deal.stage === 'closed-won' ? "bg-success" :
              deal.stage === 'closed-lost' ? "bg-error" : "bg-accent"
            )}
            style={{ width: `${probability}%` }}
          ></div>
        </div>
        <div className="flex justify-between mt-1 mx-1">
          <span className="text-xs text-muted-foreground">Probability</span>
          <span className="text-xs font-medium">{probability}%</span>
        </div>
      </div>
    </div>
  );
};