export interface Testimonial {
  name: string
  role: string
  quote: string
  rating: number
  avatar: string
}

export interface FeaturedTestimonial extends Testimonial {
  yearStarted: string
}

export const featuredTestimonial: FeaturedTestimonial = {
  name: 'Yasmin May',
  role: 'Podnikatelka v oblasti sociálních sítí',
  quote: 'Spolupráce s paní Navrátilovou je naprosto bezproblémová. Oceňuji její profesionalitu, odbornost a rychlou komunikaci. Díky jejím radám jsem optimalizovala své daňové povinnosti a ušetřila nejen čas, ale i značné peníze. Můžu se konečně plně věnovat svému podnikání a hodit starosti s účetnictvím za hlavu.',
  rating: 5,
  avatar: '/img/yasmin-may.webp',
  yearStarted: '2022'
}

export const testimonials: Testimonial[] = [
  {
    name: 'Peter Kolínek',
    role: 'Řemeslník',
    quote: 'Přechod od předchozí účetní byl hladký a bezproblémový. Oceňuji profesionální a vstřícný přístup, přehledné výkazy a pravidelné konzultace. Díky paní Navrátilové mám konečně přehled o svých financích a můžu se plně soustředit na svou práci.',
    rating: 5,
    avatar: '/img/peter-kolinek.webp'
  },
  {
    name: 'Nina Filoušová',
    role: 'Webová vývojářka',
    quote: 'Jako začínající podnikatelka jsem potřeboval někoho, kdo mi pomůže zorientovat se v účetnictví a daňových povinnostech. Paní Navrátilová mi vše trpělivě vysvětlila a nastavila systém, který mi perfektně vyhovuje. Za mě rozhodně výborná volba.',
    rating: 5,
    avatar: '/img/face2.webp'
  },
  {
    name: 'Marek Filouš',
    role: 'Malby',
    quote: 'Oceňuji především rychlou odezvu na všechny mé dotazy a velmi vstřícný přístup při řešení nestandardních situací. Díky profesionálním radám a daňové optimalizaci jsem ušetřil nemalé prostředky, které mohu investovat zpět do svého podnikání.',
    rating: 5,
    avatar: '/img/marek-filous.webp'
  },
  {
    name: 'Alena Opatrná',
    role: 'Výroba oděvů',
    quote: 'Spolupracuji s paní Navrátilovou již třetím rokem a jsem maximálně spokojená. Vždy dodržuje termíny, je nesmírně pečlivá a její rady mi ušetřily mnoho času i peněz. Účetnictví už pro mě není stres, ale hladce fungující zázemí.',
    rating: 5,
    avatar: '/img/alena-opatrna.webp'
  },
  {
    name: 'David Svoboda',
    role: 'Fotograf',
    quote: 'Paní Navrátilová mi pomohla s digitalizací účetnictví a teď mám v dokladech naprostý pořádek. Oceňuji přechod na přehledný systém, který mi šetří spoustu času. Konečně se můžu naplno věnovat kreativní práci místo administrativy.',
    rating: 5,
    avatar: '/img/face4.webp'
  },
  {
    name: 'Ondřej Jelínek',
    role: 'Střechy',
    quote: 'Oceňuji proaktivní přístup paní Navrátilové a její hluboké znalosti daňové problematiky. Pomohla mi nejen optimalizovat daně, ale také nastavit efektivní cash flow. Je pro mě spolehlivým partnerem v růstu mého podnikání.',
    rating: 5,
    avatar: '/img/ondrej-jelinek.webp'
  }
]
