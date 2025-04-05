'use client';

import Image from 'next/image';

const blogList = [
  {
    title: 'Mudah Dalam Membuat Website Tanpa Coding',
    date: '1 Februari 2022',
    img: '/images/thumb1.png',
  },
  {
    title: 'Pelajari Alur Pembuatan Sebuah Design Product',
    date: '5 Februari 2022',
    img: '/images/thumb2.png',
  },
  {
    title: 'Apa Yang Harus Dipersiapkan Untuk Melamar Pekerjaan',
    date: '1 Maret 2022',
    img: '/images/thumb3.png',
  },
  {
    title: 'Pekerjaan Bidang Teknologi Yang Bisa Didapatkan Tanpa Kuliah',
    date: '5 Maret 2022',
    img: '/images/thumb4.png',
  },
];

export default function Content() {
  return (
    <section className="px-6 pb-10">
      <div className="flex gap-[48px]">
        {/* Left: Main Blog */}
        <div className="w-[746px] shrink-0">
          <Image
            src="/images/thumbnail-main.png"
            alt="Main Thumbnail"
            width={746}
            height={368}
            className="rounded-[12px] w-full h-[368px] object-cover"
          />

          <p className="mt-6 text-[#282938] font-medium text-[16px] leading-[24px] opacity-70">
            19 Jan 2022
          </p>

          <h2 className="mt-2 text-[#282938] font-semibold text-[24px] leading-[140%] tracking-[0.5px]">
            Cara Menjadi Seorang Ahli Teknologi Diusia Muda Dengan Modal Minim
          </h2>

          <p className="mt-3 text-[#282938] text-[18px] leading-[28px] opacity-70">
            See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract.
            See how pivoting to Webflow changed one person’s sales strategy.
          </p>

          <button className="mt-6 flex items-center gap-2 text-[#282938] font-medium text-[16px] leading-[28px] hover:underline">
            Selengkapnya
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="#2405F2"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-arrow-right"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Right: Blog List */}
        <div className="w-[528px] flex flex-col justify-between">
          {blogList.map((item, index) => (
            <div key={index} className="flex justify-between items-start gap-4">
              <div className="flex-1">
                <h3 className="text-[#282938] text-[16px] font-medium leading-[150%]">
                  {item.title}
                </h3>
                <p className="text-[#282938] text-[16px] opacity-70 mt-1">
                  {item.date}
                </p>
              </div>
              <Image
                src={item.img}
                alt={item.title}
                width={96}
                height={72}
                className="w-[96px] h-[72px] object-cover rounded-md shrink-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
