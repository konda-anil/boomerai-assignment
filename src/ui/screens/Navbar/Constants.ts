import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faChartPie, faCodeFork, faPuzzlePiece, faTableColumns } from "@fortawesome/free-solid-svg-icons";

type NavItem = {
    title: string;
    link: string;
    icon: IconProp;
    isActive: boolean;
}

export const NAV_ITEMS: NavItem[] = [
    {title: 'Dashboard', link: '/dashboard', icon: faTableColumns, isActive: false},
    {title: 'Applications', link: '/applications', icon: faCodeFork, isActive: true},
    {title: 'Reports', link: '/reports', icon: faChartPie, isActive: false},
    {title: 'Integrations', link: '/integrations', icon: faPuzzlePiece, isActive: false}
]