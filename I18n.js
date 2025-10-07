import { I18n } from "i18n-js";
import pl from "./src/Assets/Languages/polish.json";

const i18n = new I18n({
  pl: pl
});

i18n.locale = "pl";
i18n.defaultLocale = "pl"; // ważne
i18n.fallbacks = true;

export default i18n;
