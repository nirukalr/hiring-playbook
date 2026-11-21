import { intern } from "./intern";
import { softwareEngineer } from "./software-engineer";
import { seniorSoftwareEngineer } from "./senior-software-engineer";
import { techLead } from "./tech-lead";
import { architect } from "./architect";

/**
 * Role tracks, in menu order. The role page, roles index, side menu, weight bars and
 * feedback builder all read from this list. To add a role: copy a file here, edit it, add it below.
 */
export const roles = [intern, softwareEngineer, seniorSoftwareEngineer, techLead, architect];
