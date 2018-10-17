import { Injectable } from '@angular/core';
import {WidgetComponent} from '../components/widgets/widget/widget.component';
import {WidgetWrapper} from '../objects/widget-wrapper';
import {WidgetFavoritePokemonComponent} from '../components/widgets/pokemon/widget-favorite-pokemon/widget-favorite-pokemon.component';

@Injectable({
  providedIn: 'root'
})

export class WidgetFactoryService {
    getWidget(service, widget) {
        if (service === 'pokemon') {
            if (widget === 'favorite') {
                return WidgetFavoritePokemonComponent.getWrapper();
            }
        }
        return WidgetComponent.getWrapper();
    }
}