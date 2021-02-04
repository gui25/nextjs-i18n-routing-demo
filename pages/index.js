import { useRouter } from "next/router";
import Link from "next/link";
import { useIntl } from "react-intl";



export default function About() {
  const { locale, locales } = useRouter();
  const { formatMessage: f } = useIntl();

  return (
      <div>
    
      <nav>
      <ul>
      Idiomas:
        {locales.map((loc) => (
          <li key={loc}>
            <Link href="/" locale={loc}>
              <a>{loc}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
   
      <h1>{f({ id: "title" })}</h1>
      
    </div>
  );
}
