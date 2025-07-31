import React from "react";

export default function HappyGirlfriendDay() {
  return (
    <div className="min-h-screen bg-romanticBlack text-softPink font-sans p-6 flex flex-col items-center">
      <h1 className="text-4xl md:text-5xl font-bold text-center mt-6 mb-4 animate-bounce">
        Happy Girlfriend Day 💖
      </h1>

      <p className="text-center max-w-2xl text-lg md:text-xl mb-8">
        Hari ini tentang kamu, tentang kita, dan tentang semua hal kecil yang bikin aku bersyukur punya kamu di hidupku.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
        <img src="/images/foto1.jpg" alt="Foto 1" className="rounded-xl shadow-md" />
        <img src="/images/foto2.jpg" alt="Foto 2" className="rounded-xl shadow-md" />
        <img src="/images/foto3.jpg" alt="Foto 3" className="rounded-xl shadow-md" />
        <img src="/images/foto4.jpg" alt="Foto 4" className="rounded-xl shadow-md" />
        <img src="/images/foto5.jpg" alt="Foto 5" className="rounded-xl shadow-md" />
        <img src="/images/foto6.jpg" alt="Foto 6" className="rounded-xl shadow-md" />
      </div>

      <div className="bg-gray-900 text-softPink rounded-2xl shadow-xl p-6 max-w-2xl text-center">
        <h2 className="text-2xl font-semibold mb-4">💌 Surat untuk Kamu</h2>
        <p className="text-base md:text-lg leading-relaxed">
          Hai babe,
          <br /><br />
          Hari ini aku cuma pengen bilang sesuatu yang mungkin sering kamu dengar, tapi tetap penting buat aku ulang: aku bersyukur banget punya kamu.
          <br /><br />
          Dari awal kita kenal, semuanya terasa beda. Cara kamu tertawa, cerita hal-hal random, bahkan cara kamu ngambek — semuanya bikin aku makin jatuh cinta. Aku suka semua versi kamu, bahkan yang paling nyebelin sekalipun.
          <br /><br />
          Kamu tuh bukan cuma pacar, kamu tempat aku pulang. Tempat aku bisa jadi diri sendiri tanpa takut dinilai, tempat aku bisa cerita apa pun, bahkan hal-hal paling receh.
          <br /><br />
          Aku sadar babe, aku sering banget cemburu dan overthinking, bahkan kadang bikin kamu ngerasa gak nyaman. Aku minta maaf banget ya. Itu bukan karena aku gak percaya, tapi karena aku terlalu sayang sama kamu dan takut kehilangan kamu.
          <br /><br />
          Makasih ya, udah sabar sama aku. Udah temenin aku, dukung aku, dan terus bikin hari-hari aku lebih hidup.
          <br /><br />
          Kamu selalu punya cara bikin aku senyum, meskipun hari aku berantakan. Dan buat itu semua, aku gak akan pernah bosen bilang:
          <br /><br />
          <strong> Aku sayang kamu, banget. </strong>
          <br /><br />
          Happy Girlfriend Day ya babe. Hari ini tentang kamu. Tentang kita. Tentang semua rasa yang gak bisa dijelasin cuma dengan kata-kata.
          <br /><br />
          💖 Dari seseorang yang selalu jatuh cinta sama kamu — tiap hari, tiap waktu.
        </p>
      </div>

      <div className="mt-8 w-full max-w-xl aspect-video">
        <iframe
          className="w-full h-full rounded-xl shadow-md"
          src="https://www.youtube.com/embed/dQgnvU5EYMI?autoplay=1&mute=1&loop=1&playlist=dQgnvU5EYMI"
          title="Aku Milikmu - Dewa 19"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>

      <footer className="mt-10 text-sm text-rose text-center">
        Dibuat dengan penuh cinta oleh kamu yang selalu mikirin dia 💕
      </footer>
    </div>
  );
}
