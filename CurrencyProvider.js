"use strict";
/**
 * Абстрактный класс Payment адаптера. Используется для создания новых адаптеров платежных систем.
 */
Object.defineProperty(exports, "__esModule", { value: true });
class CurrencyProvider {
    constructor(ConfigCurrencyProvider, sails) {
        this.ConfigCurrencyProvider = ConfigCurrencyProvider;
    }
}
exports.default = CurrencyProvider;
