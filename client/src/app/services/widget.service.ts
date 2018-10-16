import { Injectable } from '@angular/core';
import {WidgetComponent} from '../components/widgets/widget/widget.component';
import {WidgetWrapper} from '../objects/widget-wrapper';
import {WidgetFavoritePokemonComponent} from '../components/widgets/pokemon/widget-favorite-pokemon/widget-favorite-pokemon.component';
import {SettingVariable} from '../objects/setting-variable';

@Injectable({
  providedIn: 'root'
})
export class WidgetService {
    private test: SettingVariable = new SettingVariable('Message', 'String', 'Coucou');
    private _basicWidget: WidgetWrapper = new WidgetWrapper(WidgetComponent, [this.test]);
    private _widgetMap: Map<String, WidgetWrapper> = new Map()
        .set('favoritePokemonWidget', new WidgetWrapper(WidgetFavoritePokemonComponent, [this.test]));

    getWidget(widgetName) {
        if (this._widgetMap.has(widgetName)) {
            console.log('FOUND ONE !');
            return this._widgetMap[widgetName];
        }
        return new WidgetWrapper(WidgetComponent, WidgetComponent.getSettings());
    }
}