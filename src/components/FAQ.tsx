import type { Faq } from "@/content/landings";

export function FAQ({ items }: { items: Faq[] }) {
  return (
    <section aria-labelledby="preguntas-titulo">
      <h2 id="preguntas-titulo" className="text-2xl font-extrabold text-nav">
        Preguntas frecuentes
      </h2>
      <div className="mt-4 grid gap-3">
        {items.map((item) => (
          <article key={item.question} className="card p-5">
            <h3 className="font-extrabold text-nav">{item.question}</h3>
            <p className="mt-2 text-muted">{item.answer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
