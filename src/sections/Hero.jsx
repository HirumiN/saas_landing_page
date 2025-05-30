import React from "react";
import { Element, Link as LinkScroll } from "react-scroll";
import { Button } from "../components/Button";

export const Hero = () => {
  return (
    <section className="relative pb-40 overflow-hidden pt-60 max-lg:pt-52 max-md:pt-36 max-md:pb-32 max-lg:pb-36">
      {" "}
      {/* Tambahkan overflow-hidden jika gambar sangat besar dan menyebabkan scroll horizontal */}
      <Element name="hero">
        {/* Kontainer untuk Teks */}
        <div className="container relative z-10">
          {" "}
          {/* Pastikan kontainer teks punya z-index jika gambar di belakangnya */}
          <div className="max-w-512 max-lg:max-w-388">
            {" "}
            {/* Tidak perlu relative z-2 di sini lagi jika gambar terpisah */}
            <div className="uppercase caption small-2 text-p3">
              Video Editing
            </div>
            <h1 className="mb-6 uppercase h1 text-p4 max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">
              Amazingly simple
            </h1>
            <p className="max-w-440 mb-14 body-1 max-md:mb-10">
              we designed XORA AI Video Editor to be an easy to use, quick to
              learnd, and surprisingly powerful.
            </p>
            <LinkScroll to="features" smooth={true} spy offset={-100}>
              <Button icon="/images/zap.svg">Try it now</Button>
            </LinkScroll>
          </div>
        </div>

        {/* Div untuk Gambar - Dipindahkan keluar dari .container dan menjadi child langsung dari section */}
        <div
          className="absolute -top-32 w-[1230px] pointer-events-none 
                     left-[calc(50%-340px)] /* Posisi default untuk mobile/tablet, PERLU DIUJI & DISESUAIKAN */
                     lg:left-auto          /* Hapus positioning kiri pada layar besar */
                     lg:right-0            /* Tempelkan ke kanan pada layar besar */
                     hero-img_res          
                     z-0" /* Pastikan gambar di belakang teks jika tumpang tindih */
        >
          <img
            src="/images/hero.png"
            className="w-full h-auto max-lg:h-auto" /* Ganti size-1230 menjadi w-full h-auto agar responsif terhadap parent div-nya */
            alt="hero"
          />
        </div>
      </Element>
    </section>
  );
};
