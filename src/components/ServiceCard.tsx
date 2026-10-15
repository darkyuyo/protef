import Image from "next/image";
import Link from "next/link";
import { serviceIcons } from "@/components/icons";
import { servicePhoto } from "@/lib/photos";
import type { Service } from "@/lib/site.config";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = serviceIcons[service.icon];
  const photo = servicePhoto(service.id);
  return (
    <Link
      href={service.path}
      className="card flex h-full flex-col overflow-hidden p-0 transition duration-200 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(5,28,56,.12)]"
    >
      {photo ? (
        <Image
          src={photo.src}
          alt=""
          width={1152}
          height={864}
          sizes="(min-width: 1280px) 360px, (min-width: 768px) 46vw, 94vw"
          className="aspect-[16/10] w-full object-cover"
        />
      ) : (
        <div className="m-5 grid h-12 w-12 place-items-center rounded-[12px] bg-nav text-gold">
          <Icon aria-hidden="true" />
        </div>
      )}
      <h3 className="p-5 text-center text-xl font-extrabold text-nav">{service.title}</h3>
    </Link>
  );
}
