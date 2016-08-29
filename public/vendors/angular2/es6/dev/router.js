/**
 * @module
 * @description
 * Maps application URLs into application states, to support deep-linking and navigation.
 */
export { Router } from './src/router/router';
export { RouterOutlet } from './src/router/router_outlet';
export { RouterLink } from './src/router/router_link';
export { RouteParams, RouteData } from './src/router/instruction';
export { PlatformLocation } from './src/router/platform_location';
export { RouteRegistry, ROUTER_PRIMARY_COMPONENT } from './src/router/route_registry';
export { LocationStrategy, APP_BASE_HREF } from './src/router/location_strategy';
export { HashLocationStrategy } from './src/router/hash_location_strategy';
export { PathLocationStrategy } from './src/router/path_location_strategy';
export { Location } from './src/router/location';
export * from './src/router/route_config_decorator';
export * from './src/router/route_definition';
export { CanActivate } from './src/router/lifecycle_annotations';
export { Instruction, ComponentInstruction } from './src/router/instruction';
export { OpaqueToken } from 'angular2/core';
export { ROUTER_PROVIDERS_COMMON } from 'angular2/src/router/router_providers_common';
export { ROUTER_PROVIDERS, ROUTER_BINDINGS } from 'angular2/src/router/router_providers';
import { RouterOutlet } from './src/router/router_outlet';
import { RouterLink } from './src/router/router_link';
import { CONST_EXPR } from './src/facade/lang';
/**
 * A list of directives. To use the router directives like {@link RouterOutlet} and
 * {@link RouterLink}, add this to your `directives` array in the {@link View} decorator of your
 * component.
 *
 * ### Example ([live demo](http://plnkr.co/edit/iRUP8B5OUbxCWQ3AcIDm))
 *
 * ```
 * import {Component} from 'angular2/core';
 * import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig} from 'angular2/router';
 *
 * @Component({directives: [ROUTER_DIRECTIVES]})
 * @RouteConfig([
 *  {...},
 * ])
 * class AppCmp {
 *    // ...
 * }
 *
 * bootstrap(AppCmp, [ROUTER_PROVIDERS]);
 * ```
 */
export const ROUTER_DIRECTIVES = CONST_EXPR([RouterOutlet, RouterLink]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYW5ndWxhcjIvcm91dGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFFSCxTQUFRLE1BQU0sUUFBTyxxQkFBcUIsQ0FBQztBQUMzQyxTQUFRLFlBQVksUUFBTyw0QkFBNEIsQ0FBQztBQUN4RCxTQUFRLFVBQVUsUUFBTywwQkFBMEIsQ0FBQztBQUNwRCxTQUFRLFdBQVcsRUFBRSxTQUFTLFFBQU8sMEJBQTBCLENBQUM7QUFDaEUsU0FBUSxnQkFBZ0IsUUFBTyxnQ0FBZ0MsQ0FBQztBQUNoRSxTQUFRLGFBQWEsRUFBRSx3QkFBd0IsUUFBTyw2QkFBNkIsQ0FBQztBQUNwRixTQUFRLGdCQUFnQixFQUFFLGFBQWEsUUFBTyxnQ0FBZ0MsQ0FBQztBQUMvRSxTQUFRLG9CQUFvQixRQUFPLHFDQUFxQyxDQUFDO0FBQ3pFLFNBQVEsb0JBQW9CLFFBQU8scUNBQXFDLENBQUM7QUFDekUsU0FBUSxRQUFRLFFBQU8sdUJBQXVCLENBQUM7QUFDL0MsY0FBYyxxQ0FBcUMsQ0FBQztBQUNwRCxjQUFjLCtCQUErQixDQUFDO0FBRTlDLFNBQVEsV0FBVyxRQUFPLG9DQUFvQyxDQUFDO0FBQy9ELFNBQVEsV0FBVyxFQUFFLG9CQUFvQixRQUFPLDBCQUEwQixDQUFDO0FBQzNFLFNBQVEsV0FBVyxRQUFPLGVBQWUsQ0FBQztBQUMxQyxTQUFRLHVCQUF1QixRQUFPLDZDQUE2QyxDQUFDO0FBQ3BGLFNBQVEsZ0JBQWdCLEVBQUUsZUFBZSxRQUFPLHNDQUFzQyxDQUFDO09BRWhGLEVBQUMsWUFBWSxFQUFDLE1BQU0sNEJBQTRCO09BQ2hELEVBQUMsVUFBVSxFQUFDLE1BQU0sMEJBQTBCO09BQzVDLEVBQUMsVUFBVSxFQUFDLE1BQU0sbUJBQW1CO0FBRTVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FxQkc7QUFDSCxhQUFhLGlCQUFpQixHQUFVLFVBQVUsQ0FBQyxDQUFDLFlBQVksRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbW9kdWxlXG4gKiBAZGVzY3JpcHRpb25cbiAqIE1hcHMgYXBwbGljYXRpb24gVVJMcyBpbnRvIGFwcGxpY2F0aW9uIHN0YXRlcywgdG8gc3VwcG9ydCBkZWVwLWxpbmtpbmcgYW5kIG5hdmlnYXRpb24uXG4gKi9cblxuZXhwb3J0IHtSb3V0ZXJ9IGZyb20gJy4vc3JjL3JvdXRlci9yb3V0ZXInO1xuZXhwb3J0IHtSb3V0ZXJPdXRsZXR9IGZyb20gJy4vc3JjL3JvdXRlci9yb3V0ZXJfb3V0bGV0JztcbmV4cG9ydCB7Um91dGVyTGlua30gZnJvbSAnLi9zcmMvcm91dGVyL3JvdXRlcl9saW5rJztcbmV4cG9ydCB7Um91dGVQYXJhbXMsIFJvdXRlRGF0YX0gZnJvbSAnLi9zcmMvcm91dGVyL2luc3RydWN0aW9uJztcbmV4cG9ydCB7UGxhdGZvcm1Mb2NhdGlvbn0gZnJvbSAnLi9zcmMvcm91dGVyL3BsYXRmb3JtX2xvY2F0aW9uJztcbmV4cG9ydCB7Um91dGVSZWdpc3RyeSwgUk9VVEVSX1BSSU1BUllfQ09NUE9ORU5UfSBmcm9tICcuL3NyYy9yb3V0ZXIvcm91dGVfcmVnaXN0cnknO1xuZXhwb3J0IHtMb2NhdGlvblN0cmF0ZWd5LCBBUFBfQkFTRV9IUkVGfSBmcm9tICcuL3NyYy9yb3V0ZXIvbG9jYXRpb25fc3RyYXRlZ3knO1xuZXhwb3J0IHtIYXNoTG9jYXRpb25TdHJhdGVneX0gZnJvbSAnLi9zcmMvcm91dGVyL2hhc2hfbG9jYXRpb25fc3RyYXRlZ3knO1xuZXhwb3J0IHtQYXRoTG9jYXRpb25TdHJhdGVneX0gZnJvbSAnLi9zcmMvcm91dGVyL3BhdGhfbG9jYXRpb25fc3RyYXRlZ3knO1xuZXhwb3J0IHtMb2NhdGlvbn0gZnJvbSAnLi9zcmMvcm91dGVyL2xvY2F0aW9uJztcbmV4cG9ydCAqIGZyb20gJy4vc3JjL3JvdXRlci9yb3V0ZV9jb25maWdfZGVjb3JhdG9yJztcbmV4cG9ydCAqIGZyb20gJy4vc3JjL3JvdXRlci9yb3V0ZV9kZWZpbml0aW9uJztcbmV4cG9ydCB7T25BY3RpdmF0ZSwgT25EZWFjdGl2YXRlLCBPblJldXNlLCBDYW5EZWFjdGl2YXRlLCBDYW5SZXVzZX0gZnJvbSAnLi9zcmMvcm91dGVyL2ludGVyZmFjZXMnO1xuZXhwb3J0IHtDYW5BY3RpdmF0ZX0gZnJvbSAnLi9zcmMvcm91dGVyL2xpZmVjeWNsZV9hbm5vdGF0aW9ucyc7XG5leHBvcnQge0luc3RydWN0aW9uLCBDb21wb25lbnRJbnN0cnVjdGlvbn0gZnJvbSAnLi9zcmMvcm91dGVyL2luc3RydWN0aW9uJztcbmV4cG9ydCB7T3BhcXVlVG9rZW59IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuZXhwb3J0IHtST1VURVJfUFJPVklERVJTX0NPTU1PTn0gZnJvbSAnYW5ndWxhcjIvc3JjL3JvdXRlci9yb3V0ZXJfcHJvdmlkZXJzX2NvbW1vbic7XG5leHBvcnQge1JPVVRFUl9QUk9WSURFUlMsIFJPVVRFUl9CSU5ESU5HU30gZnJvbSAnYW5ndWxhcjIvc3JjL3JvdXRlci9yb3V0ZXJfcHJvdmlkZXJzJztcblxuaW1wb3J0IHtSb3V0ZXJPdXRsZXR9IGZyb20gJy4vc3JjL3JvdXRlci9yb3V0ZXJfb3V0bGV0JztcbmltcG9ydCB7Um91dGVyTGlua30gZnJvbSAnLi9zcmMvcm91dGVyL3JvdXRlcl9saW5rJztcbmltcG9ydCB7Q09OU1RfRVhQUn0gZnJvbSAnLi9zcmMvZmFjYWRlL2xhbmcnO1xuXG4vKipcbiAqIEEgbGlzdCBvZiBkaXJlY3RpdmVzLiBUbyB1c2UgdGhlIHJvdXRlciBkaXJlY3RpdmVzIGxpa2Uge0BsaW5rIFJvdXRlck91dGxldH0gYW5kXG4gKiB7QGxpbmsgUm91dGVyTGlua30sIGFkZCB0aGlzIHRvIHlvdXIgYGRpcmVjdGl2ZXNgIGFycmF5IGluIHRoZSB7QGxpbmsgVmlld30gZGVjb3JhdG9yIG9mIHlvdXJcbiAqIGNvbXBvbmVudC5cbiAqXG4gKiAjIyMgRXhhbXBsZSAoW2xpdmUgZGVtb10oaHR0cDovL3BsbmtyLmNvL2VkaXQvaVJVUDhCNU9VYnhDV1EzQWNJRG0pKVxuICpcbiAqIGBgYFxuICogaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuICogaW1wb3J0IHtST1VURVJfRElSRUNUSVZFUywgUk9VVEVSX1BST1ZJREVSUywgUm91dGVDb25maWd9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG4gKlxuICogQENvbXBvbmVudCh7ZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXX0pXG4gKiBAUm91dGVDb25maWcoW1xuICogIHsuLi59LFxuICogXSlcbiAqIGNsYXNzIEFwcENtcCB7XG4gKiAgICAvLyAuLi5cbiAqIH1cbiAqXG4gKiBib290c3RyYXAoQXBwQ21wLCBbUk9VVEVSX1BST1ZJREVSU10pO1xuICogYGBgXG4gKi9cbmV4cG9ydCBjb25zdCBST1VURVJfRElSRUNUSVZFUzogYW55W10gPSBDT05TVF9FWFBSKFtSb3V0ZXJPdXRsZXQsIFJvdXRlckxpbmtdKTtcbiJdfQ==