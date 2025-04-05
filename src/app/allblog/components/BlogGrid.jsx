'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const blogs = [
  {
    id: 1,
    image: '/images/thumb1.png',
    date: '19 Jan 2022',
    title: 'Cara Mudah Untuk Memulai Belajar Programming - EDUFREE',
    description:
      'Menjadi seorang programmer saat ini sudah sangat mudah untuk dipelajari oleh siapapun ...',
  },
  {
    id: 2,
    image: '/images/thumb2.png',
    date: '19 Jan 2022',
    title: 'Tips Membuat Website Landing Page Bussines - EDUFREE',
    description:
      'Pentingnya website dalam menumbuhkan rasa kepercayaan terhadap bisnis, membuat ...',
  },
  {
    id: 3,
    image: '/images/thumb3.png',
    date: '19 Jan 2022',
    title: 'Cara Installasi Wordpress Untuk Pemula - EDUFREE',
    description:
      'Membuat website saat ini sudah bisa tanpa codingan, kini kamu bisa membuatnya dengan ...',
  },
];

export default function BlogGrid() {
  return (
    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogs.map((blog) => (
        <div key={blog.id}>
          <Image
            src={blog.image}
            alt={blog.title}
            width={405}
            height={285}
            className="w-full h-[285px] object-cover"
          />
          <p className="text-[#6A6A6A] text-[16px] font-medium leading-[28px] mt-4">
            {blog.date}
          </p>
          <h3 className="text-[#282938] text-[20px] font-medium leading-[30px] tracking-wide mt-2">
            {blog.title}
          </h3>
          <p className="text-[#6A6A6A] text-[16px] font-normal leading-[28px] mt-2">
            {blog.description}
          </p>
          <div className="flex items-center gap-2 mt-4">
            <span className="text-[#282938] text-[16px] font-semibold">
              Selengkapnya
            </span>
            <ArrowRight size={18} className="text-[#2405F2]" />
          </div>
        </div>
      ))}
    </div>
  );
}
