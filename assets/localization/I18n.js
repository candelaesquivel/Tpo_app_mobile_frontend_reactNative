import {I18n as i18n} from "i18n-js";
import es from "./es";

translations = {
    es
};

var I18n = new i18n(translations);

I18n.defaultLocale = 'es';
I18n.enableFallback = true;


export default I18n;