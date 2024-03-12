import * as PIXI from "pixi.js";

// Class MainText
export class MainText {
  private _mainText: PIXI.Text;
  private _textStyle: PIXI.TextStyle;
  private _container: PIXI.Container;

  constructor(
    mainText: string,
    textStyle: PIXI.TextStyle,
    container: PIXI.Container
  ) {
    this._mainText = new PIXI.Text(mainText, textStyle);
    this._textStyle = textStyle;
    this._container = container;
    this._container.addChild(this._mainText);
  }

  public setText(text: string) {
    this._mainText.text = text;
    this._container.addChild(this._mainText);
  }
  public clearText() {
    this._container.removeChildren();
  }
}
