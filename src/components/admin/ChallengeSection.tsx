"use client";

import { useState } from "react";

type Challenge = {
  id: number;
  title: string;
  description: string;
  category: string;
  duration: number;
  date: string;
  image?: string;
};

type ChallengeSectionProps = {
  challenges: Challenge[];
  setChallenges: React.Dispatch<React.SetStateAction<Challenge[]>>;
};

export default function ChallengeSection({
  challenges,
  setChallenges,
}: ChallengeSectionProps) {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [duration, setDuration] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");

  /* HANDLE IMAGE */
  const handleImageUpload = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {

    const file = e.target.files?.[0];

    if (!file) return;

    const imageUrl = URL.createObjectURL(file);

    setImage(imageUrl);
  };

  /* HANDLE SAVE */
  const handleSaveChallenge = () => {

    if (!title || !description || !category || !duration || !date) {
      alert("Semua field wajib diisi!");
      return;
    }

    const newChallenge: Challenge = {
      id: Date.now(),
      title,
      description,
      category,
      duration: Number(duration),
      date,

      /* DEFAULT IMAGE */
      image:
        image && image.trim() !== ""
          ? image
          : "/coba.png",
    };

    setChallenges([
      ...challenges,
      newChallenge,
    ]);

    /* RESET */
    setTitle("");
    setDescription("");
    setCategory("");
    setDuration("");
    setDate("");
    setImage("");

    alert("Challenge berhasil ditambahkan!");
  };

  return (
    <div className="bg-[#FFFAF9] rounded-2xl border shadow-lg p-6">

      {/* HEADER */}
      <div className="flex items-center gap-3 mb-8">

        <span className="text-3xl text-[#032119]">
          +
        </span>

        <h2 className="text-4xl font-bold text-[#032119]">
          Manajemen Challenge
        </h2>

      </div>

      {/* FORM */}
      <div className="space-y-5">

        {/* JUDUL */}
        <div>

          <label className="block text-sm font-bold text-[#032119] mb-2">
            Judul Challenge
          </label>

          <input
            type="text"
            placeholder="Nama Challenge..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-[#6E8B88] rounded-xl px-4 py-4 outline-none bg-transparent"
          />

        </div>

        {/* DESCRIPTION */}
        <div>

          <label className="block text-sm font-bold text-[#032119] mb-2">
            Deskripsi Challenge
          </label>

          <textarea
            placeholder="Masukkan deskripsi challenge..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border border-[#6E8B88] rounded-xl px-4 py-4 outline-none bg-transparent min-h-[120px] resize-none"
          />

        </div>

        {/* KATEGORI */}
        <div>

          <label className="block text-sm font-bold text-[#032119] mb-2">
            Kategori
          </label>

          <input
            type="text"
            placeholder="Zero Waste, Secondhand..."
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border border-[#6E8B88] rounded-xl px-4 py-4 outline-none bg-transparent"
          />

        </div>

        {/* ROW */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* DATE */}
          <div>

            <label className="block text-sm font-bold text-[#032119] mb-2">
              Tanggal Mulai
            </label>

            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full border border-[#6E8B88] rounded-xl px-4 py-4 outline-none bg-transparent"
            />

          </div>

          {/* DURASI */}
          <div>

            <label className="block text-sm font-bold text-[#032119] mb-2">
              Durasi (hari)
            </label>

            <input
              type="number"
              placeholder="30"
              min={1}
              step={1}
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="w-full border border-[#6E8B88] rounded-xl px-4 py-4 outline-none bg-transparent"
            />

          </div>

        </div>

        {/* POSTER */}
        <div>

          <label className="block text-sm font-bold text-[#032119] mb-2">
            Poster image (JPG/PNG, max 5MB, opsional)
          </label>

          {/* DROPZONE */}
          <label className="w-full min-h-[180px] border-2 border-dashed border-[#6E8B88] rounded-2xl flex flex-col items-center justify-center cursor-pointer bg-[#F8FBFB] hover:bg-[#F1F6F6] transition-all">

            {/* ICON */}
            <p className="text-2xl">📷</p>

            {/* TEXT */}
            <p className="text-[#032119] font-semibold text-lg">
              Drag & drop image here
            </p>

            <p className="text-sm text-gray-500 mt-1">
              atau klik untuk memilih file
            </p>

            <p className="text-xs text-gray-400 mt-3">
              JPG, PNG • Maksimal 5MB
            </p>

            {/* INPUT FILE */}
            <input
              type="file"
              accept="image/png, image/jpeg"
              className="hidden"
              onChange={handleImageUpload}
            />

          </label>

          {/* PREVIEW */}
          {image && (
            <img
              src={image}
              alt="Preview"
              className="mt-4 w-full h-52 object-cover rounded-2xl"
            />
          )}

        </div>

        {/* BUTTON */}
        <button
          onClick={handleSaveChallenge}
          className="w-full bg-[#90BAB7] hover:bg-[#7DA7A4] transition-all text-[#032119] font-bold py-4 rounded-xl"
        >

          Simpan Challenge

        </button>

      </div>

    </div>
  );
}