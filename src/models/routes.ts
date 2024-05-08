export interface IRoute {
    title: string;
    route: string;
}

export const QUESTIONNAIRE: string = '/questionnaire'

const ROUTE_CLIENT_INFO: string = QUESTIONNAIRE + '/client';
const ROUTE_CLIENT_INFO_TITLE: string = 'Информация о клиенте';

const ROUTE_ENTITY_INFO: string = QUESTIONNAIRE + '/entity';
const ROUTE_ENTITY_INFO_TITLE: string = 'Информация о организации';

const ROUTE_FOUNDER_INFO: string = QUESTIONNAIRE + '/founders';
const ROUTE_FOUNDER_INFO_TITLE: string = 'Информация об учредителях';

const ROUTE_IMMOVABLE_INFO: string = QUESTIONNAIRE + '/immovable';
const ROUTE_IMMOVABLE_INFO_TITLE: string = 'Информация об  имуществе';

export const ClientInfoRoute: IRoute = {
    route: ROUTE_CLIENT_INFO,
    title: ROUTE_CLIENT_INFO_TITLE
} as const;

export const EntityInfoRoute: IRoute = {
    route: ROUTE_ENTITY_INFO,
    title: ROUTE_ENTITY_INFO_TITLE
} as const;

export const ImmovableInfoRoute: IRoute = {
    route: ROUTE_IMMOVABLE_INFO,
    title: ROUTE_IMMOVABLE_INFO_TITLE
} as const;

export const FounderInfoRoute: IRoute = {
    route: ROUTE_FOUNDER_INFO,
    title: ROUTE_FOUNDER_INFO_TITLE
} as const;

