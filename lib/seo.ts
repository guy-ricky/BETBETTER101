export function buildItemListJsonLd({
  name,
  urlBase,
  items,
}: {
  name: string;
  urlBase: string;
  items: { position: number; name: string; url: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    itemListElement: items.map((it) => ({
      "@type": "ListItem",
      position: it.position,
      item: {
        "@type": "Thing",
        name: it.name,
        url: urlBase + it.url,
      },
    })),
  };
  return JSON.stringify(data);
}
