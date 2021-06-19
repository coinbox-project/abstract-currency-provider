/**
 * Абстрактный класс Payment адаптера. Используется для создания новых адаптеров платежных систем.
 */

export default abstract class CurrencyProvider {
  public readonly ConfigCurrencyProvider: any;

  protected constructor(ConfigCurrencyProvider: any, sails?: any) {
    this.ConfigCurrencyProvider = ConfigCurrencyProvider;
  }

  /**
   * Проверка что драйвер жив
   * @return  true/false если жив то true 
   */
  public abstract status():  Promise<boolean>;

  /**
   * запускает синхронизацию транзакций
   * @param paymentDocument - Платежный документ
   * @return результат работы функции, тело ответа и код результата (сохранять модель не нужно)
   */
  public abstract startSyncTransactions(): void;

  /**
   * отправить монеты
   * @param adress Адресс куда отправит 
   * @param amount сколько монет
   * @param memo текст транзакции
   * @param account аккаунт
   * @return txid
   */
   public abstract sendToAddress(adress: string, amount: number, memo?: string, account?: string ): Promise<Transaction>;

}


export interface Transaction {
    txid: string;
}