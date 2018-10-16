import { Injectable } from '@angular/core';
import {WidgetComponent} from '../components/widgets/widget/widget.component';
import {WidgetItem} from '../objects/widget-item';
import {WidgetFavoritePokemonComponent} from '../components/widgets/pokemon/widget-favorite-pokemon/widget-favorite-pokemon.component';
import {WidgetVariable} from '../objects/widget-variable';

@Injectable({
  providedIn: 'root'
})
export class WidgetService {
    private test: WidgetVariable = new WidgetVariable('Message', 'String', 'Coucou');
    private _basicWidget: WidgetItem = new WidgetItem(WidgetComponent, [this.test]);
    private _widgetMap: Map<String, WidgetItem> = new Map()
        .set('favoritePokemonWidget', new WidgetItem(WidgetFavoritePokemonComponent, [this.test]));

    getWidget(widgetName) {
        if (this._widgetMap.has(widgetName)) {
            console.log("FOUND ONE !");
            return this._widgetMap[widgetName];
        }
        return new WidgetItem(WidgetComponent, [new WidgetVariable('Message', 'String', 'Coucou')]);
    }
}