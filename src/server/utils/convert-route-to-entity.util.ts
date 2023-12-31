const mapping: Record<string, string> = {
  organizations: 'organization',
  trains: 'train',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
