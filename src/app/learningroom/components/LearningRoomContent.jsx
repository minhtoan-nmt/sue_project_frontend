import VideoPlayer from "@/app/learningroom/components/VideoPlayer";

export default function LearningRoomContent() {
  return (
    <section className="flex justify-center">
      <div className="w-full max-w-[992px] px-6 mt-6">
        {/* Tiêu đề khóa học + bài học */}
        <div className="mb-6">
          <p className="text-sm text-gray-500">Dasar Pemrograman Web</p>
          <h1 className="text-2xl font-bold mt-1">Installasi Tools</h1>
        </div>

        {/* Video thumbnail */}
        <VideoPlayer />

        {/* Nút Kembali và Selesai */}
        <div className="flex justify-between mt-6">
          <button className="bg-[#F9D976] hover:bg-[#f8cb4a] text-black font-medium text-sm px-6 py-2 rounded shadow">
            Kembali
          </button>
          <button className="bg-[#F9D976] hover:bg-[#f8cb4a] text-black font-medium text-sm px-6 py-2 rounded shadow">
            Selesai & Lanjut
          </button>
        </div>
      </div>
    </section>
  );
}
