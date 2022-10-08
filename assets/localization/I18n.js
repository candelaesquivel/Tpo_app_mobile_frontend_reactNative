import es from './es';
import * as RNLocalize from 'react-native-localize';
import { I18n } from "i18n-js";


const locales = RNLocalize.getLocales();

translations= {es};
const i18n = new I18n(translations);

I18n.locale= locales[0].languageCode;

I18n.fallbacks = true;

export default I18n;



