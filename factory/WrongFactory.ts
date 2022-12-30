import { ContentService } from "../services/ContentService";

const map = new Map<string, ContentService>();

export function getMap() {
    return map;
}

export function getContentService(locale: string) {
  let service = map.get(locale)
  if(service) {
    return service
  }
  service =  new ContentService(locale)
  map.set(locale, service)
  return service;
}
