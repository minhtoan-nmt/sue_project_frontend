export default function VideoPlayer() {
    return (
      <div className="relative w-full h-[460px] rounded-[10px] overflow-hidden bg-white shadow-md">
        <img
          src="/images/videoplayer.png"
          alt="Video Thumbnail"
          className="w-full h-full object-cover"
        />
  
        {/* Nút Play chỉ là icon tam giác màu vàng */}
        <button className="absolute inset-0 flex items-center justify-center">
          <svg
            className="w-[150px] h-[150px] text-yellow-400 drop-shadow-lg"
            viewBox="0 0 24 24"
            fill="#FCD980"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
      </div>
    );
  }
  