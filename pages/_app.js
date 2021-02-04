import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";
import "../styles/globals.css";

const messages = {
  en: { title: "Hello welcome to my website", imgUrl: "https://static.poder360.com.br/2021/01/bandeira-eua-868x644.jpg"},
  fr: { title: "Bonjour bienvenue sur mon site", imgUrl: "https://i1.wp.com/www.guiaestudo.com.br/wp-content/uploads/2019/05/bandeira-da-frança-icada.jpg"},
  es: { title: "Hola bienvenidos a mi sitio web", imgUrl: "https://i2.wp.com/www.adinoel.com/wp-content/uploads/2018/09/espanhol-bandeira.jpg?resize=760%2C490&ssl=1" },
  pt: { title: "Olá seja bem vindo ao meu site", imgUrl: "https://static.poder360.com.br/2020/09/BandeiraBrasileira-Rasgada-BandeiraRasgada-AlamedaDasBandeiras-CongressoNacional-117-868x644.jpg" },
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
