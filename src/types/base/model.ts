import { IEvents } from './events';

export interface IModelConstructor<T> {
	new (data: Partial<T>, events: IEvents): IModel<T>;
}

export interface IModel<T> {
	emitChanges(event: string, payload?: object): void;
}
