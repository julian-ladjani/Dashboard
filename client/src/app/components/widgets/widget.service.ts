import { Injectable } from '@angular/core';
import {WidgetComponent} from './widget/widget.component';
import {WidgetItem} from './widget-item';
import {WidgetFavoritePokemonComponent} from './pokemon/widget-favorite-pokemon/widget-favorite-pokemon.component';

@Injectable({
  providedIn: 'root'
})
export class WidgetService {
    private _basicWidget: WidgetItem = new WidgetItem(WidgetComponent, {test: 'coucou'});
    private _widgetMap: Map<WidgetComponent, any> = new Map()
        .set('favoritePokemonWidget', new WidgetItem(WidgetFavoritePokemonComponent, {test: 'coucou'}));

    getWidget(widgetName) {
        if (this._widgetMap.has(widgetName))
            return this._widgetMap[widgetName];
        return this._basicWidget;
    }
}