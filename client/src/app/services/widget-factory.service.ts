import { Injectable } from '@angular/core';
import {WidgetComponent} from '../components/widgets/widget/widget.component';
import {WidgetWrapper} from '../objects/widget-wrapper';
import {WidgetFavoritePokemonComponent} from '../components/widgets/pokemon/widget-favorite-pokemon/widget-favorite-pokemon.component';

@Injectable({
  providedIn: 'root'
})

export class WidgetFactoryService {
    getWidget(widgetName) {
        if (widgetName === 'favoritePokemonWidget') {
            return new WidgetWrapper(WidgetFavoritePokemonComponent, WidgetFavoritePokemonComponent.getSettingContainer());
        }
        return new WidgetWrapper(WidgetComponent, WidgetComponent.getSettingContainer());
    }
}