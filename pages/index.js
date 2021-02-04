import { useRouter } from "next/router";
import Link from "next/link";
import { useIntl } from "react-intl";
import Image from 'next/image'

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
      <Image
        src={f({ id: 'imgUrl'})}
        alt="USA Flag"
        width={500}
        height={400}
      ></Image>
      
    </div>
  );
}
