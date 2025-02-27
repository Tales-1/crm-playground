import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/layout/header/notifications-menu";
  
import IconWrapper from "./icon-wrapper";
import { Bell, BellDot } from "lucide-react";
import { ICON_SIZES } from "@/constants/constants";
import { Separator } from "@/components/ui/separator";
  
export default function NotificationBell(){

    return(
        <Dialog>
          <DialogTrigger>
            <IconWrapper>
              <Bell size={ICON_SIZES.small} />
            </IconWrapper>
          </DialogTrigger>
          
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="flex items-center gap-4">
                <BellDot size={ICON_SIZES.small} />
                Notifications
                 <span className="bg-[#303030] text-xs py-[4px] px-2 rounded-lg text-background">2</span>
                </DialogTitle>
              <Separator />

              <div>
                <ul className="flex flex-col gap-5">
                    <li className="border-b border-spacing-3 py-3 flex flex-col gap-1">
                        <p className="text-sm">New Contact: 'Phil McCrack' added</p>
                        <div className="flex justify-between text-foreground/50 text-xs">
                            <span>Friday 3:12pm</span>
                            <span>2 hours ago</span>
                        </div>
                        <div className="action"></div>
                            
                    </li>
                    <li className="border-b border-spacing-3 py-3 flex flex-col gap-1">
                        <p className="text-sm">New Product: 'Weed' added by Snoop Dogg</p>
                        <div className="flex justify-between text-foreground/50 text-xs">
                            <span>Friday 3:12pm</span>
                            <span>2 hours ago</span>
                        </div>
                        <div className="action"></div>
                            
                    </li>
                    <li className="border-b border-spacing-3 py-3 flex flex-col gap-1">
                        <p className="text-sm">New Deal: 'Box of Chocolates' added by Jason</p>
                        <div className="flex justify-between text-foreground/50 text-xs">
                            <span>Friday 3:12pm</span>
                            <span>2 hours ago</span>
                        </div>
                        <div className="action"></div>
                            
                    </li>
                    <li className="border-b border-spacing-3 py-3 flex flex-col gap-1">
                        <p className="text-sm">New Deal: 'Products and Stocks' added by Jimmy</p>
                        <div className="flex justify-between text-foreground/50 text-xs">
                            <span>Friday 3:12pm</span>
                            <span>2 hours ago</span>
                        </div>
                        <div className="action"></div>
                            
                    </li>
                    <li className="border-b border-spacing-3 py-3 flex flex-col gap-1">
                        <p className="text-sm">New Deal: 'Products and Stocks' added</p>
                        <div className="flex justify-between text-foreground/50 text-xs">
                            <span>Friday 3:12pm</span>
                            <span>2 hours ago</span>
                        </div>
                        <div className="action"></div>
                            
                    </li>
                </ul>
              </div>
            </DialogHeader>
          </DialogContent>
        </Dialog>

    )
}