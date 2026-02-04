import HomeHero from "@/components/Hero/HomeHero";

export default function Home() {
  return (
    <div>
      <HomeHero media={{ imageSrc: '/images/hero2.jpg', imageAlt: 'Lucent Leasing home hero' }} eyebrow="LUCENT LEASING" background={{ overlayStrength: 35, src: '/images/hero.jpg' }} />
    </div>
  );
}
