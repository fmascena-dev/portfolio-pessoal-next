import Image from 'next/image';
import Link from 'next/link';
import { HiArrowRight } from 'react-icons/hi2';

export default function ProjectsBtn() {
  return (
    <div className="mx-auto xl:mx-0">
      <Link
        href={'/work'}
        className="relative w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group"
      >
        <Image
          src={'/rounded-text.png'}
          width={141}
          height={148}
          alt=""
          className="animate-spin-slow w-full h-full max-w-[141px] max-h-[148px] z-10"
        />
        <HiArrowRight className="absolute text-4xl group-hover:translate-x-4 transition-all duration-300 z-10" />
      </Link>
    </div>
  );
}
