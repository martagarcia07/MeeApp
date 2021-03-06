import { OpaqueToken } from '@angular/core';

// import translations
import { LANG_EN_NAME, LANG_EN_TRANS } from './lang-en';
import { LANG_ES_NAME, LANG_ES_TRANS } from './lang-es';

// translation token
export const TRANSLATIONS = new OpaqueToken('translations');

// all translations
var dict = {};
dict[LANG_EN_NAME]=LANG_EN_TRANS;
dict[LANG_ES_NAME]=LANG_ES_TRANS;
export const dictionary= dict;

/*export const dictionary = {
    [LANG_EN_NAME]: LANG_EN_TRANS,
    [LANG_ES_NAME]: LANG_ES_TRANS,
};*/

// providers
export const TRANSLATION_PROVIDERS = [
    { provide: TRANSLATIONS, useValue: dictionary },
];