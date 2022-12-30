import { ContentService } from "../services/ContentService";
import { GlobalRef } from "../services/GlobalRef";

const mapRef = new GlobalRef<Map<string, ContentService>>("contentServiceMap")
if(!mapRef.value) {
  mapRef.value = new Map<string, ContentService>()
}
const map = mapRef.value

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