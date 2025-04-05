// src/app/allblog/page.jsx

import AllBlogNavHeader from "./components/AllBlogNavHeader";
import AllBlogHeader from "./components/AllBlogHeader";
import SearchBox from "./components/SearchBox";
import CategoryTab from "./components/CategoryTab";
import Content from "./components/Content";
import BlogGrid from "./components/BlogGrid";
import Pagination from "./components/Pagination";
import Footer from "./components/Footer"; // ✅ THÊM FOOTER

export default function AllBlogPage() {
  return (
    <main className="bg-white min-h-screen">
      <AllBlogNavHeader />
      <AllBlogHeader />
      <div className="max-w-screen-2xl mx-auto px-6 md:px-10 xl:px-20 py-10">
        <SearchBox />
        <div className="mt-6">
          <CategoryTab />
        </div>
        <div className="mt-8">
          <Content />
        </div>
        <div className="mt-10">
          <BlogGrid />
        </div>
        <div className="mt-12 flex justify-center">
          <Pagination />
        </div>
      </div>
      <Footer /> {/* ✅ Thêm Footer ở dưới */}
    </main>
  );
}
