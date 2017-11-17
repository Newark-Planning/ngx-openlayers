import {
  Component, EventEmitter, Input, OnChanges, OnInit, Optional,
  SimpleChanges
} from '@angular/core';
import { Extent, layer, source } from 'openlayers';
import { MapComponent } from '../map.component';
import { LayerComponent } from './layer.component';
import { LayerGroupComponent } from './layergroup.component';

@Component({
  selector: 'aol-layer-image',
  template: `<ng-content></ng-content>`
})
export class LayerImageComponent extends LayerComponent implements OnInit, OnChanges {
  public source: source.Image;

  @Input() opacity: number;
  @Input() visible: boolean;
  @Input() extent: Extent;
  @Input() minResolution: number;
  @Input() maxResolution: number;
  @Input() zIndex: number;

  @Input() precompose: (evt: ol.events.Event) => void;
  @Input() postcompose: (evt: ol.events.Event) => void;

  constructor(map: MapComponent,
              @Optional() group?: LayerGroupComponent) {
    super(group || map);
  }

  ngOnInit() {
    this.instance = new layer.Image(this);
    super.ngOnInit();
  }

  ngOnChanges(changes: SimpleChanges) {
    super.ngOnChanges(changes);
  }
}
