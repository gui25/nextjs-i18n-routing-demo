import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";
import "../styles/globals.css";

const messages = {
  en: { title: "Hello welcome to my website" },
  fr: { title: "Bonjour bienvenue sur mon site" },
  es: { title: "Hola bienvenidos a mi sitio web" },
  pt: { title: "Olá seja bem vindo ao meu site" },
};

function MyApp({ Component, pageProps }) {
  const { locale } = useRouter();

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Component {...pageProps} />
    </IntlProvider>
  );
}

export default MyApp;
