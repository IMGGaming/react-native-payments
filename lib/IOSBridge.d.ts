import { IBridge } from './Bridge';
import { AppStore, IProduct, ITransactionApple, TProductId } from './type';
export declare class IOSBridge implements IBridge {
    eventEmitter: import("react-native").EventEmitter;
    static isAppStoreAvailable(): boolean;
    loadProducts(products: TProductId[]): Promise<IProduct[]>;
    availableAppStore(): AppStore;
    purchase(product: TProductId, developerPayload: string): Promise<ITransactionApple>;
    subscribe(product: TProductId, developerPayload: string): Promise<ITransactionApple>;
    upgrade(oldProducts: TProductId[], product: TProductId, developerPayload: string): Promise<any>;
    loadOwnedPurchases(): Promise<never[]>;
    restore(): Promise<ITransactionApple[]>;
}
