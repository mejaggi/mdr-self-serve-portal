import { Users, Cloud, Code2, Monitor, BriefcaseBusiness, Layers } from 'lucide-react';
export const teams = [
 { id:'identity', name:'Identity & Access', category:'Infrastructure', description:'The right access, for the right people. Manage identities and permissions.', icon:Users, tone:'', services:['Onboard a joiner','Offboard a leaver','Create an AD group'], count:12, owner:'IT Operations' },
 { id:'cloud', name:'Cloud & Infrastructure', category:'Infrastructure', description:'Provision environments and keep your infrastructure running smoothly.', icon:Cloud, tone:'blue', services:['Provision an environment','Create a resource group','Manage cloud access'], count:9, owner:'Cloud Team' },
 { id:'engineering', name:'Application Engineering', category:'Application', description:'From repository to release. Everything your application teams need.', icon:Code2, tone:'violet', services:['Grant repository access','Run a GitHub workflow','Create a Jira project'], count:14, owner:'Engineering' },
 { id:'workplace', name:'Modern Workplace', category:'Business', description:'Tools and workspaces that help everyone do their best work.', icon:Monitor, tone:'amber', services:['Request a software licence','Access a Confluence space','Create a Teams workspace'], count:8, owner:'Workplace Team' },
 { id:'business', name:'Business Operations', category:'Business', description:'Less admin, more impact. Simplify everyday business operations.', icon:BriefcaseBusiness, tone:'rose', services:['Request application access','Onboard a vendor','Request a shared mailbox'], count:7, owner:'Business Operations' },
 { id:'platform', name:'Platform & DevOps', category:'Application', description:'Ship with confidence using standardised pipelines and platform services.', icon:Layers, tone:'', services:['Run an Azure pipeline','Request a deployment','Provision a service account'], count:11, owner:'Platform Team' },
];
export type RequestStatus = 'Pending approval' | 'Approved' | 'Executing' | 'Completed' | 'Rejected';
export type PortalRequest = { id:string; action:string; team:string; subject:string; reason:string; status:RequestStatus; date:string; requester:string; comments:string };
export const initialRequests:PortalRequest[] = [
 { id:'REQ-1042', action:'Grant repository access', team:'Application Engineering', subject:'Alex Morgan · payments-api', reason:'Access required for the new release.', status:'Pending approval', date:'10 Oct 2026', requester:'Alex Morgan', comments:'' },
 { id:'REQ-1041', action:'Provision an environment', team:'Cloud & Infrastructure', subject:'payments-staging', reason:'Staging environment for QA.', status:'Executing', date:'10 Oct 2026', requester:'Alex Morgan', comments:'' },
 { id:'REQ-1040', action:'Access a Confluence space', team:'Modern Workplace', subject:'Engineering space', reason:'New team member documentation access.', status:'Completed', date:'09 Oct 2026', requester:'Alex Morgan', comments:'Approved by workplace owner' },
 { id:'REQ-1039', action:'Create an AD group', team:'Identity & Access', subject:'APP-Finance-Readers', reason:'Read-only application group.', status:'Pending approval', date:'09 Oct 2026', requester:'Sam Taylor', comments:'' },
];
export function reviewRequest(request:PortalRequest, approved:boolean, comments:string):PortalRequest {
 if(request.status !== 'Pending approval') return request;
 return {...request, status:approved ? 'Approved' : 'Rejected', comments};
}
