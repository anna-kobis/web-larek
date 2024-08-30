import { ensureElement, formatPrice } from '../../utils/utils';
import { ICategory } from '../../types/model/AppModel';
import {
	ICardActions,
	ICategoryNames,
	ICardData,
	ICardView,
} from '../../types/view/Card';
import { View } from '../base/view';

export class CardView<T = ICardData> extends View<T> implements ICardView {
	protected _title: HTMLElement;
	protected _category?: HTMLElement;
	protected _image?: HTMLImageElement;
	protected _price: HTMLElement;

	static categories: ICategoryNames = {
		'хард-скил': 'hard',
		'софт-скил': 'soft',
		кнопка: 'button',
		дополнительное: 'additional',
		другое: 'other',
	};

	constructor(container: HTMLElement, actions?: ICardActions) {
		super(container);
		this._title = ensureElement<HTMLElement>('.card__title', container);
		this._category = container.querySelector('.card__category');
		this._image = container.querySelector('.card__image');
		this._price = ensureElement<HTMLElement>('.card__price', container);
		if (actions?.onClick) container.addEventListener('click', actions.onClick);
	}

	set id(id: string) {
		this.container.dataset.id = id;
	}

	get id(): string {
		return this.container.dataset.id || '';
	}

	set title(title: string) {
		this.setTextContent(this._title, title);
	}

	get title(): string {
		return this._title.textContent || '';
	}

	set image(src: string) {
		this.setImage(this._image, src, this.title);
	}

	set category(category: ICategory) {
		this._category.classList.add(
			`card__category_${CardView.categories[category]}`
		);

		this.setTextContent(this._category, category);
	}

	set price(price: number | null) {
		if (price) {
			this.setTextContent(this._price, `${formatPrice(price)} синапсов`);
		} else {
			this.setTextContent(this._price, 'Бесценно');
		}
	}

	get price(): number | null {
		if (this._price.textContent === 'Бесценно') return null;
		return parseInt(this._price.textContent.replace(/\s/g, ''));
	}
}
