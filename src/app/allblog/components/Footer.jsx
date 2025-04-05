export default function Footer() {
    return (
      <footer className="bg-[#DB4040] text-white pt-[70px]">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-10 xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Bên trái: Logo + mô tả + contact */}
            <div>
              {/* Logo */}
              <h2 className="text-white font-bold text-[24px] leading-[140%] tracking-[0.5px] mb-4">
                [EDUFREE]
              </h2>
  
              {/* Mô tả */}
              <p className="text-white/90 text-[16px] leading-[150%] max-w-[327px] mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.
              </p>
  
              {/* Khối vàng liên hệ */}
              <div className="bg-[#FCD980] rounded-md px-6 py-4 w-[420px] flex justify-between">
                <div>
                  <p className="text-[#282938] font-medium text-[18px] leading-[150%] tracking-[0.5px] mb-1">Email</p>
                  <p className="text-[#282938] text-[16px] leading-[150%] opacity-80">contact@website.com</p>
                </div>
                <div>
                  <p className="text-[#282938] font-medium text-[18px] leading-[150%] tracking-[0.5px] mb-1">Telephone</p>
                  <p className="text-[#282938] text-[16px] leading-[150%] opacity-80">+6288 999 222 333</p>
                </div>
              </div>
            </div>
  
            {/* Bên phải: Các cột hỗ trợ */}
            <div className="grid grid-cols-3 gap-10 mt-4 lg:mt-0 text-white text-[16px] leading-[150%]">
              <div>
                <h3 className="font-bold text-[18px] mb-2">Sosial Media</h3>
                <ul className="space-y-2">
                  <li>Instagram</li>
                  <li>Twitter</li>
                  <li>LinkedIn</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-[18px] mb-2">Program</h3>
                <ul className="space-y-2">
                  <li>Merdeka Belajar</li>
                  <li>Finterpreneur</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-[18px] mb-2">DUKUNGAN</h3>
                <ul className="space-y-2">
                  <li>Tentang Kami</li>
                  <li>Ketentuan</li>
                  <li>Kebijakan Privasi</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
  
        {/* Dòng cuối cùng */}
        <div className="bg-white text-black mt-10 py-6 px-6 md:px-10 xl:px-20 flex flex-col md:flex-row justify-between items-center text-sm font-medium text-[#1D1E25]">
          <p>© Copyright EDUFREE 2021 – 2022</p>
          <ul className="flex gap-6 mt-3 md:mt-0 text-[14px]">
            <li>HOME</li>
            <li>TENTANG KAMI</li>
            <li>KURSUS</li>
            <li>FAQ</li>
            <li>BLOG</li>
          </ul>
        </div>
      </footer>
    );
  }
  