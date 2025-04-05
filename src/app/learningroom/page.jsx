"use client";

import LearningRoomSidebar from "@/app/learningroom/components/LearningRoomSidebar";
import LearningRoomHeader from "@/app/learningroom/components/LearningRoomHeader";
import LearningRoomContent from "@/app/learningroom/components/LearningRoomContent";

export default function Page() {
  return (
    <div className="flex">
      <LearningRoomSidebar />

      <main className="flex-1 bg-[#F4F6FC] min-h-screen">
        <LearningRoomHeader />
        <LearningRoomContent />
      </main>
    </div>
  );
}
