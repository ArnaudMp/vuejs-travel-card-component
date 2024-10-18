
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T extends DefineComponent> = T & DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>>
interface _GlobalComponents {
      'HomeCards': typeof import("../components/global/HomeCards.vue")['default']
    'DestinationCard': typeof import("../components/DestinationCard.vue")['default']
    'FooterComponent': typeof import("../components/FooterComponent.vue")['default']
    'HeaderComponent': typeof import("../components/HeaderComponent.vue")['default']
    'HeroComponent': typeof import("../components/HeroComponent.vue")['default']
    'MapComponent': typeof import("../components/MapComponent.vue")['default']
    'RateComponent': typeof import("../components/RateComponent.vue")['default']
    'TravelCard': typeof import("../components/TravelCard.vue")['default']
    'CookieControl': typeof import("../node_modules/@dargmuesli/nuxt-cookie-control/dist/runtime/components/CookieControl.vue")['default']
    'CookieIframe': typeof import("../node_modules/@dargmuesli/nuxt-cookie-control/dist/runtime/components/CookieIframe.vue")['default']
    'NuxtRating': typeof import("../node_modules/nuxt-rating/dist/runtime/components/NuxtRating.vue")['default']
    'NuxtStar': typeof import("../node_modules/nuxt-rating/dist/runtime/components/NuxtStar.vue")['default']
    'MapboxAttributionControl': typeof import("../node_modules/nuxt-mapbox/dist/runtime/components/AttributionControl.vue")['default']
    'MapboxCustomGeocoder': typeof import("../node_modules/nuxt-mapbox/dist/runtime/components/CustomGeocoder.vue")['default']
    'MapboxDefaultMarker': typeof import("../node_modules/nuxt-mapbox/dist/runtime/components/DefaultMarker.vue")['default']
    'MapboxDefaultPopup': typeof import("../node_modules/nuxt-mapbox/dist/runtime/components/DefaultPopup.vue")['default']
    'MapboxFullscreenControl': typeof import("../node_modules/nuxt-mapbox/dist/runtime/components/FullscreenControl.vue")['default']
    'MapboxGeocoder': typeof import("../node_modules/nuxt-mapbox/dist/runtime/components/Geocoder.vue")['default']
    'MapboxGeolocateControl': typeof import("../node_modules/nuxt-mapbox/dist/runtime/components/GeolocateControl.vue")['default']
    'MapboxLayer': typeof import("../node_modules/nuxt-mapbox/dist/runtime/components/Layer.vue")['default']
    'MapboxMap': typeof import("../node_modules/nuxt-mapbox/dist/runtime/components/Map.vue")['default']
    'MapboxNavigationControl': typeof import("../node_modules/nuxt-mapbox/dist/runtime/components/NavigationControl.vue")['default']
    'MapboxScaleControl': typeof import("../node_modules/nuxt-mapbox/dist/runtime/components/ScaleControl.vue")['default']
    'MapboxSource': typeof import("../node_modules/nuxt-mapbox/dist/runtime/components/Source.vue")['default']
    'NuxtWelcome': typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'NuxtLayout': typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'NuxtErrorBoundary': typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
    'ClientOnly': typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
    'DevOnly': typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
    'ServerPlaceholder': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'NuxtLink': typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'NuxtLoadingIndicator': typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'NuxtImg': typeof import("../node_modules/@nuxt/image/dist/runtime/components/nuxt-img")['default']
    'NuxtPicture': typeof import("../node_modules/@nuxt/image/dist/runtime/components/nuxt-picture")['default']
    'Icon': typeof import("../node_modules/nuxt-icon/dist/runtime/Icon.vue")['default']
    'IconCSS': typeof import("../node_modules/nuxt-icon/dist/runtime/IconCSS.vue")['default']
    'ColorScheme': typeof import("../node_modules/@nuxtjs/color-mode/dist/runtime/component.vue3.vue")['default']
    'NuxtLinkLocale': typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/NuxtLinkLocale")['default']
    'SwitchLocalePathLink': typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/SwitchLocalePathLink")['default']
    'NuxtPage': typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
    'NoScript': typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'Link': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
    'Base': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
    'Title': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
    'Meta': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
    'Style': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
    'Head': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
    'Html': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
    'Body': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
    'NuxtIsland': typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'NuxtRouteAnnouncer': IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
      'LazyHomeCards': typeof import("../components/global/HomeCards.vue")['default']
    'LazyDestinationCard': typeof import("../components/DestinationCard.vue")['default']
    'LazyFooterComponent': typeof import("../components/FooterComponent.vue")['default']
    'LazyHeaderComponent': typeof import("../components/HeaderComponent.vue")['default']
    'LazyHeroComponent': typeof import("../components/HeroComponent.vue")['default']
    'LazyMapComponent': typeof import("../components/MapComponent.vue")['default']
    'LazyRateComponent': typeof import("../components/RateComponent.vue")['default']
    'LazyTravelCard': typeof import("../components/TravelCard.vue")['default']
    'LazyCookieControl': typeof import("../node_modules/@dargmuesli/nuxt-cookie-control/dist/runtime/components/CookieControl.vue")['default']
    'LazyCookieIframe': typeof import("../node_modules/@dargmuesli/nuxt-cookie-control/dist/runtime/components/CookieIframe.vue")['default']
    'LazyNuxtRating': typeof import("../node_modules/nuxt-rating/dist/runtime/components/NuxtRating.vue")['default']
    'LazyNuxtStar': typeof import("../node_modules/nuxt-rating/dist/runtime/components/NuxtStar.vue")['default']
    'LazyMapboxAttributionControl': typeof import("../node_modules/nuxt-mapbox/dist/runtime/components/AttributionControl.vue")['default']
    'LazyMapboxCustomGeocoder': typeof import("../node_modules/nuxt-mapbox/dist/runtime/components/CustomGeocoder.vue")['default']
    'LazyMapboxDefaultMarker': typeof import("../node_modules/nuxt-mapbox/dist/runtime/components/DefaultMarker.vue")['default']
    'LazyMapboxDefaultPopup': typeof import("../node_modules/nuxt-mapbox/dist/runtime/components/DefaultPopup.vue")['default']
    'LazyMapboxFullscreenControl': typeof import("../node_modules/nuxt-mapbox/dist/runtime/components/FullscreenControl.vue")['default']
    'LazyMapboxGeocoder': typeof import("../node_modules/nuxt-mapbox/dist/runtime/components/Geocoder.vue")['default']
    'LazyMapboxGeolocateControl': typeof import("../node_modules/nuxt-mapbox/dist/runtime/components/GeolocateControl.vue")['default']
    'LazyMapboxLayer': typeof import("../node_modules/nuxt-mapbox/dist/runtime/components/Layer.vue")['default']
    'LazyMapboxMap': typeof import("../node_modules/nuxt-mapbox/dist/runtime/components/Map.vue")['default']
    'LazyMapboxNavigationControl': typeof import("../node_modules/nuxt-mapbox/dist/runtime/components/NavigationControl.vue")['default']
    'LazyMapboxScaleControl': typeof import("../node_modules/nuxt-mapbox/dist/runtime/components/ScaleControl.vue")['default']
    'LazyMapboxSource': typeof import("../node_modules/nuxt-mapbox/dist/runtime/components/Source.vue")['default']
    'LazyNuxtWelcome': typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'LazyNuxtLayout': typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'LazyNuxtErrorBoundary': typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
    'LazyClientOnly': typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
    'LazyDevOnly': typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
    'LazyServerPlaceholder': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'LazyNuxtLink': typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'LazyNuxtLoadingIndicator': typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'LazyNuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'LazyNuxtImg': typeof import("../node_modules/@nuxt/image/dist/runtime/components/nuxt-img")['default']
    'LazyNuxtPicture': typeof import("../node_modules/@nuxt/image/dist/runtime/components/nuxt-picture")['default']
    'LazyIcon': typeof import("../node_modules/nuxt-icon/dist/runtime/Icon.vue")['default']
    'LazyIconCSS': typeof import("../node_modules/nuxt-icon/dist/runtime/IconCSS.vue")['default']
    'LazyColorScheme': typeof import("../node_modules/@nuxtjs/color-mode/dist/runtime/component.vue3.vue")['default']
    'LazyNuxtLinkLocale': typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/NuxtLinkLocale")['default']
    'LazySwitchLocalePathLink': typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/SwitchLocalePathLink")['default']
    'LazyNuxtPage': typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
    'LazyNoScript': typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'LazyLink': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
    'LazyBase': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
    'LazyTitle': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
    'LazyMeta': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
    'LazyStyle': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
    'LazyHead': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
    'LazyHtml': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
    'LazyBody': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
    'LazyNuxtIsland': typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'LazyNuxtRouteAnnouncer': IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export const HomeCards: typeof import("../components/global/HomeCards.vue")['default']
export const DestinationCard: typeof import("../components/DestinationCard.vue")['default']
export const FooterComponent: typeof import("../components/FooterComponent.vue")['default']
export const HeaderComponent: typeof import("../components/HeaderComponent.vue")['default']
export const HeroComponent: typeof import("../components/HeroComponent.vue")['default']
export const MapComponent: typeof import("../components/MapComponent.vue")['default']
export const RateComponent: typeof import("../components/RateComponent.vue")['default']
export const TravelCard: typeof import("../components/TravelCard.vue")['default']
export const CookieControl: typeof import("../node_modules/@dargmuesli/nuxt-cookie-control/dist/runtime/components/CookieControl.vue")['default']
export const CookieIframe: typeof import("../node_modules/@dargmuesli/nuxt-cookie-control/dist/runtime/components/CookieIframe.vue")['default']
export const NuxtRating: typeof import("../node_modules/nuxt-rating/dist/runtime/components/NuxtRating.vue")['default']
export const NuxtStar: typeof import("../node_modules/nuxt-rating/dist/runtime/components/NuxtStar.vue")['default']
export const MapboxAttributionControl: typeof import("../node_modules/nuxt-mapbox/dist/runtime/components/AttributionControl.vue")['default']
export const MapboxCustomGeocoder: typeof import("../node_modules/nuxt-mapbox/dist/runtime/components/CustomGeocoder.vue")['default']
export const MapboxDefaultMarker: typeof import("../node_modules/nuxt-mapbox/dist/runtime/components/DefaultMarker.vue")['default']
export const MapboxDefaultPopup: typeof import("../node_modules/nuxt-mapbox/dist/runtime/components/DefaultPopup.vue")['default']
export const MapboxFullscreenControl: typeof import("../node_modules/nuxt-mapbox/dist/runtime/components/FullscreenControl.vue")['default']
export const MapboxGeocoder: typeof import("../node_modules/nuxt-mapbox/dist/runtime/components/Geocoder.vue")['default']
export const MapboxGeolocateControl: typeof import("../node_modules/nuxt-mapbox/dist/runtime/components/GeolocateControl.vue")['default']
export const MapboxLayer: typeof import("../node_modules/nuxt-mapbox/dist/runtime/components/Layer.vue")['default']
export const MapboxMap: typeof import("../node_modules/nuxt-mapbox/dist/runtime/components/Map.vue")['default']
export const MapboxNavigationControl: typeof import("../node_modules/nuxt-mapbox/dist/runtime/components/NavigationControl.vue")['default']
export const MapboxScaleControl: typeof import("../node_modules/nuxt-mapbox/dist/runtime/components/ScaleControl.vue")['default']
export const MapboxSource: typeof import("../node_modules/nuxt-mapbox/dist/runtime/components/Source.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/@nuxt/image/dist/runtime/components/nuxt-img")['default']
export const NuxtPicture: typeof import("../node_modules/@nuxt/image/dist/runtime/components/nuxt-picture")['default']
export const Icon: typeof import("../node_modules/nuxt-icon/dist/runtime/Icon.vue")['default']
export const IconCSS: typeof import("../node_modules/nuxt-icon/dist/runtime/IconCSS.vue")['default']
export const ColorScheme: typeof import("../node_modules/@nuxtjs/color-mode/dist/runtime/component.vue3.vue")['default']
export const NuxtLinkLocale: typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/NuxtLinkLocale")['default']
export const SwitchLocalePathLink: typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/SwitchLocalePathLink")['default']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const NuxtRouteAnnouncer: IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyHomeCards: typeof import("../components/global/HomeCards.vue")['default']
export const LazyDestinationCard: typeof import("../components/DestinationCard.vue")['default']
export const LazyFooterComponent: typeof import("../components/FooterComponent.vue")['default']
export const LazyHeaderComponent: typeof import("../components/HeaderComponent.vue")['default']
export const LazyHeroComponent: typeof import("../components/HeroComponent.vue")['default']
export const LazyMapComponent: typeof import("../components/MapComponent.vue")['default']
export const LazyRateComponent: typeof import("../components/RateComponent.vue")['default']
export const LazyTravelCard: typeof import("../components/TravelCard.vue")['default']
export const LazyCookieControl: typeof import("../node_modules/@dargmuesli/nuxt-cookie-control/dist/runtime/components/CookieControl.vue")['default']
export const LazyCookieIframe: typeof import("../node_modules/@dargmuesli/nuxt-cookie-control/dist/runtime/components/CookieIframe.vue")['default']
export const LazyNuxtRating: typeof import("../node_modules/nuxt-rating/dist/runtime/components/NuxtRating.vue")['default']
export const LazyNuxtStar: typeof import("../node_modules/nuxt-rating/dist/runtime/components/NuxtStar.vue")['default']
export const LazyMapboxAttributionControl: typeof import("../node_modules/nuxt-mapbox/dist/runtime/components/AttributionControl.vue")['default']
export const LazyMapboxCustomGeocoder: typeof import("../node_modules/nuxt-mapbox/dist/runtime/components/CustomGeocoder.vue")['default']
export const LazyMapboxDefaultMarker: typeof import("../node_modules/nuxt-mapbox/dist/runtime/components/DefaultMarker.vue")['default']
export const LazyMapboxDefaultPopup: typeof import("../node_modules/nuxt-mapbox/dist/runtime/components/DefaultPopup.vue")['default']
export const LazyMapboxFullscreenControl: typeof import("../node_modules/nuxt-mapbox/dist/runtime/components/FullscreenControl.vue")['default']
export const LazyMapboxGeocoder: typeof import("../node_modules/nuxt-mapbox/dist/runtime/components/Geocoder.vue")['default']
export const LazyMapboxGeolocateControl: typeof import("../node_modules/nuxt-mapbox/dist/runtime/components/GeolocateControl.vue")['default']
export const LazyMapboxLayer: typeof import("../node_modules/nuxt-mapbox/dist/runtime/components/Layer.vue")['default']
export const LazyMapboxMap: typeof import("../node_modules/nuxt-mapbox/dist/runtime/components/Map.vue")['default']
export const LazyMapboxNavigationControl: typeof import("../node_modules/nuxt-mapbox/dist/runtime/components/NavigationControl.vue")['default']
export const LazyMapboxScaleControl: typeof import("../node_modules/nuxt-mapbox/dist/runtime/components/ScaleControl.vue")['default']
export const LazyMapboxSource: typeof import("../node_modules/nuxt-mapbox/dist/runtime/components/Source.vue")['default']
export const LazyNuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const LazyNuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const LazyNuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
export const LazyClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const LazyDevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const LazyServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const LazyNuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const LazyNuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const LazyNuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const LazyNuxtImg: typeof import("../node_modules/@nuxt/image/dist/runtime/components/nuxt-img")['default']
export const LazyNuxtPicture: typeof import("../node_modules/@nuxt/image/dist/runtime/components/nuxt-picture")['default']
export const LazyIcon: typeof import("../node_modules/nuxt-icon/dist/runtime/Icon.vue")['default']
export const LazyIconCSS: typeof import("../node_modules/nuxt-icon/dist/runtime/IconCSS.vue")['default']
export const LazyColorScheme: typeof import("../node_modules/@nuxtjs/color-mode/dist/runtime/component.vue3.vue")['default']
export const LazyNuxtLinkLocale: typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/NuxtLinkLocale")['default']
export const LazySwitchLocalePathLink: typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/SwitchLocalePathLink")['default']
export const LazyNuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const LazyNoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const LazyLink: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const LazyBase: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const LazyTitle: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const LazyMeta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const LazyStyle: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const LazyHead: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const LazyHtml: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const LazyBody: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const LazyNuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const LazyNuxtRouteAnnouncer: IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>

export const componentNames: string[]
