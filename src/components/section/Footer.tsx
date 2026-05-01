import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#FFFAF9] py-20 border-t">

      <div className="w-full px-8 md:px-16 lg:px-24 flex items-start justify-between gap-12">

        <div>
          <Image
            src="/logo1.svg"
            alt="Logo"
            width={100}
            height={100}
            className="mb-14"
          />
          <h1 className="font-bold font-heading text-7xl">Kosongin</h1>
        </div>

        <div>
          <p className="font-bold mb-14 text-3xl">Home</p>
          <p className="text-black text-3xl mb-14">Fitur</p>
          <p className="text-black text-3xl mb-14">Cara Kerja</p>
          <p className="text-black text-3xl mb-14">Komunitas</p>
          <p className="text-black text-3xl mb-14">Daftar</p>
        </div>

        <div>
          <p className="font-bold mb-14 text-3xl">Contact Us</p>
          <p className="text-black text-3xl mb-14">Email</p>
          <p className="text-black text-3xl mb-14">Instagram</p>
          <p className="text-black text-3xl mb-14">LinkedIn</p>
        </div>

        <div>
          <p className="font-bold mb-14 text-3xl">Legal</p>
          <p className="text-black text-3xl mb-14">Privacy Policy</p>
          <p className="text-black text-3xl mb-14">Terms of Service</p>
        </div>

        <div>
          <p className="text-right text-3xl text-black">
            © 2026 Veteran Tech
          </p>
        </div>

      </div>

    </footer>
  );
}