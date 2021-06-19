/**
 * Абстрактный класс Payment адаптера. Используется для создания новых адаптеров платежных систем.
 */
export default abstract class CurrencyProvider {
    readonly ConfigCurrencyProvider: any;
    protected constructor(ConfigCurrencyProvider: any, sails?: any);
    /**
     * Проверка что драйвер жив
     * @return  true/false если жив то true
     */
    abstract status(): Promise<boolean>;
    /**
     * запускает синхронизацию транзакций
     * @param paymentDocument - Платежный документ
     * @return результат работы функции, тело ответа и код результата (сохранять модель не нужно)
     */
    abstract startSyncTransactions(): void;
    /**
     * отправить монеты
     * @param adress Адресс куда отправит
     * @param amount сколько монет
     * @param memo текст транзакции
     * @param account аккаунт
     * @return txid
     */
    abstract sendToAddress(adress: string, amount: number, memo?: string, account?: string): Promise<Transaction>;
}
export interface Transaction {
    txid: string;
}
