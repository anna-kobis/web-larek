import { ICategory } from '../model/AppModel';

export interface ICardActions {
	onClick: (event: MouseEvent) => void;
}

export type ICategoryNames = Record<ICategory, string>;

export interface ICardData {
	id: string;
	title: string;
	image?: string;
	category?: ICategory;
	price: number | null;
}

export interface ICardViewConstructor {
	new (container: HTMLElement, actions?: ICardActions): ICardView;
}

export interface ICardView {
	set id(id: string);
	get id(): string;
	set title(title: string);
	get title(): string;
	set image(src: string);
	set category(category: ICategory);
	set price(price: number | null);
	get price(): number | null;
}
