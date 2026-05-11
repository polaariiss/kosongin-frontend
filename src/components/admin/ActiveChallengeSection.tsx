"use client";

import Image from "next/image";

type Challenge = {
  id: number;
  title: string;
  description: string;
  category: string;
  duration: number;
  date: string;
  participants?: number;
  image?: string;
};

type ActiveChallengeSectionProps = {
  challenges: Challenge[];
  setChallenges: React.Dispatch<React.SetStateAction<Challenge[]>>;
};

export default function ActiveChallengeSection({
  challenges,
  setChallenges,
}: ActiveChallengeSectionProps) {

  if (challenges.length === 0) {
    return null;
  }

  /* HANDLE DELETE */
  const handleDeleteChallenge = (
    id: number
  ) => {

    const filteredChallenges =
      challenges.filter(
        (challenge) =>
          challenge.id !== id
      );

    setChallenges(
      filteredChallenges
    );
  };

  return (
    <div className="bg-[#FFFAF9] rounded-2xl border shadow-lg p-6 mt-8">

      {/* HEADER */}
      <div className="mb-8">

        <h2 className="text-4xl font-bold text-[#032119]">
          Challenge Aktif
        </h2>

        <p className="text-sm text-[#032119] mt-2">
          Daftar challenge yang sedang berjalan di platform Kosongin.
        </p>

      </div>

      {/* LIST */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {challenges.map((challenge) => (

          <div
            key={challenge.id}
            className="bg-[#FFFAF9] rounded-[28px] border shadow-md overflow-hidden"
          >

            {/* IMAGE */}
            <div className="relative w-full h-[320px] bg-[#ECECEC] flex items-center justify-center">

              <Image
                src={challenge.image || "/coba.png"}
                alt={challenge.title}
                fill
                className="object-cover"
              />

            </div>

            {/* CONTENT */}
            <div className="p-5">

              {/* CATEGORY */}
              <span
                className={`inline-block text-[#032119] text-xs px-3 py-1 rounded-full mb-4 border ${
                  challenge.category ===
                  "Zero Waste"
                    ? "border-[#5FAE7B] bg-[#EDF8F1]"
                    : challenge.category ===
                      "No Impulse Buy"
                    ? "border-[#D96B6B] bg-[#FFF1F1]"
                    : challenge.category ===
                      "Eco Eating"
                    ? "border-[#6B9BD9] bg-[#EEF5FF]"
                    : "border-[#C8B07A] bg-[#FFF9EB]"
                }`}
              >
                {challenge.category}
              </span>

              {/* TITLE */}
              <h3 className="text-2xl font-bold text-[#032119] leading-snug">
                {challenge.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-sm text-[#032119] mt-3 leading-relaxed">
                {challenge.description}
              </p>

              {/* INFO */}
              <div className="flex items-center gap-2 mt-5 text-sm text-[#032119]">

                <Image
                  src="/user.png"
                  alt="participants"
                  width={20}
                  height={20}
                />

                <span>
                  {challenge.participants ?? 0} peserta |{" "}
                  {challenge.duration} hari
                </span>

              </div>

              {/* BUTTON */}
              <div className="flex gap-3 mt-6">

                <button className="flex-1 bg-[#90BAB7] hover:bg-[#7DA7A4] transition-all text-[#032119] font-semibold py-3 rounded-xl">

                  Edit

                </button>

                <button
                  onClick={() =>
                    handleDeleteChallenge(
                      challenge.id
                    )
                  }
                  className="flex-1 border border-[#D96B6B] text-[#B23838] hover:bg-[#FFE5E5] transition-all font-semibold py-3 rounded-xl"
                >

                  Nonaktifkan

                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}