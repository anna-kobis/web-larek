import { ICardActions } from './Card';

export interface ICardBasketData {
	title: string;
	price: number;
	index: number;
}

export interface ICardBasketViewConstructor {
	new (container: HTMLElement, actions?: ICardActions): ICardBasketView;
}

export interface ICardBasketView {
	set index(index: number);
}
