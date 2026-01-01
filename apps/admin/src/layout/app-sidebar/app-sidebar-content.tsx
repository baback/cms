import {
    SidebarContent,
} from "@tryghost/shade"

import NavMain from "./nav-main";
import NavContent from "./nav-content";
import NavSettings from "./nav-settings";

function AppSidebarContent() {
    return (
        <SidebarContent className="px-3 pt-4 justify-between">
            <div className="flex flex-col gap-2 sidebar:gap-4">
                <NavMain />
                <NavContent />
            </div>
            <div className="flex flex-col gap-2 sidebar:gap-4">
                <NavSettings className="pb-0" />
            </div>
        </SidebarContent>
    )
}

export default AppSidebarContent;
