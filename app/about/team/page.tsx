import Image from "next/image";

interface InstructorProfile {
  id: number;
  name: string;
  bio: string;
  imageSrc: string;
  imageAlt: string;
}

const INSTRUCTOR_PROFILES: InstructorProfile[] = [
  {
    id: 1,
    name: "Adele T.",
    imageSrc: "/images/team/Adele.png",
    imageAlt: "Portrait of Adele T.",
    bio: "Adele approaches Reformer Pilates with a focus on precision, control, and personalised movement. Her classes balance technical detail with flow, allowing clients to build strength, stability, and confidence while exploring the full potential of their bodies. Every session is intentional, whether you are refining technique, enhancing posture, or working toward specific movement goals. Off the reformer, Adele enjoys coffee, travel, and wellness pursuits, bringing the same sense of curiosity and balance into her teaching.",
  },
  {
    id: 2,
    name: "Alma G.",
    imageSrc: "/images/team/Alma.png",
    imageAlt: "Portrait of Alma G.",
    bio: "Guided by the belief to always be a work in progress, Alma started with yoga in 2010 to support her pole dancing, manage stress, and improve overall wellbeing. She was later introduced to Pilates as a complement to her barre training and quickly connected with its focus on control, strength, and sustainable movement. Alma is certified across Mat II, Reformer, Chair, Tower, and Barrel Pilates, and is also a Master Trainer for Barre Intensity in Singapore and the Philippines. Her Reformer Pilates classes combine focus and flow, helping students strengthen, gain control, and really tune in to how their bodies move. Outside the studio, Alma takes a holistic view of health as a Registered Nutritionist Dietitian and trained chef. When she is not teaching, she enjoys cafe hopping with friends or spending time pole dancing, because for her, movement never really switches off.",
  },
  {
    id: 3,
    name: "Claudia T.",
    imageSrc: "/images/team/claudia.png",
    imageAlt: "Portrait of Claudia T.",
    bio: "Movement is Claudia's second language, and dance is where it all began. With a background in Ballroom, Belly, and Chinese dance, she brings rhythm, precision, and a touch of theatrical flair to every class. Her teaching style is bold, energetic, and delightfully dramatic. Clients often describe her as bubbly and affectionately call her a drama queen. Expect expressive cues, big energy, and moments where you are laughing even while your muscles quietly burn. She loves switching up routines regularly, keeping classes fresh, engaging, and never boring. As a certified BodyTree Reformer instructor, Claudia's superpower is clear cueing and body awareness. She guides clients to connect mind and body, tune in, and truly listen to what their bodies need, because everyone moves differently. Come ready to move, smile, and enjoy a class that is as challenging as it is entertaining.",
  },
  {
    id: 4,
    name: "Daryll H.",
    imageSrc: "/images/team/daryll.png",
    imageAlt: "Portrait of Daryll H.",
    bio: "Daryll is a clinical epidemiologist in cardiology and an aspiring geneticist, but do not let that fool you, his first love is movement. His Pilates journey started as a way to fix posture and improve gym form, but quickly turned into a passion for building stability and a strong mind-body connection. On the reformer, Daryll brings precise form, creative flows, and moves that require control, helping clients find their grounded strength, whether rehabbing an injury, preparing for or recovering from motherhood, or just moving a little better. Off the reformer, you might catch him playing the cello or impressively switching between multiple languages. He is fluent in Japanese.",
  },
  {
    id: 5,
    name: "Faith H.",
    imageSrc: "/images/team/Faith.png",
    imageAlt: "Portrait of Faith H.",
    bio: "Faith discovered Pilates shortly after graduating, using it to stay active while navigating the demanding hours of her early career as a journalist. In 2019, approaching burnout, she pursued a Pilates instructor course in search of a more meaningful path. Studying anatomy and biomechanics sparked a deep fascination with how the body is designed to move and how effectively Pilates supports that movement. After completing her mat certification, she continued her training and became fully certified across all major Pilates equipment. As an instructor, Faith loves the process of solving the puzzle, observing movement patterns, identifying sources of discomfort, and selecting the right tools to support or challenge each individual. Her teaching style is best described as mindful, slow, and a controlled burn, with a strong emphasis on intentional movement and proper technique. She helps clients reframe familiar exercises, like discovering that a plank is far more than just holding a position. Faith loves witnessing those satisfying aha moments when precise technique transforms the way an exercise feels. She aims to help every client move with greater awareness, confidence, and ease.",
  },
  {
    id: 6,
    name: "Joey",
    imageSrc: "/images/team/Joey.png",
    imageAlt: "Portrait of Joey.",
    bio: "Joey brings a well-rounded approach to movement, with experience in Zumba, Kickboxing, Cardio Sculpt, Yoga, and Reformer Pilates. She designs classes that are dynamic, intentional, and adaptable. Whether you are a beginner or a seasoned mover, there is always something to challenge and inspire you. Her journey into Pilates began after marathon running led to knee pain, prompting her to explore lower-impact, alignment-focused movement. Through Yoga and Reformer Pilates, Joey found effective ways to manage and rehabilitate her injury, a perspective she now brings into her teaching and the way she supports clients facing similar challenges. Known for her patient and approachable style, Joey loves helping people build strength, confidence, and a better connection to movement. She focuses on creating a welcoming and accessible Reformer Pilates experience, especially for those trying it for the first time. Outside the studio, you will find her travelling, hunting for the best food, indulging in a little retail therapy, or enjoying a well-earned meal after a busy day.",
  },
  {
    id: 7,
    name: "Mel L.",
    imageSrc: "/images/team/Mel.png",
    imageAlt: "Portrait of Mel L.",
    bio: "Mel values being present and brings that focus into her Pilates classes. She encourages clients to slow down, tune into how their bodies move, and get more out of each exercise without overthinking the process. Her classes combine clear cueing, thoughtful progressions, and postural alignment work, creating sessions that feel challenging yet manageable. Known for her warm, easygoing energy, she enjoys connecting with people and making movement something clients genuinely look forward to. A lover of Yoga, Pilates, coffee, and travel, Mel is passionate about sharing the joy of movement and helping others feel good in their bodies.",
  },
  {
    id: 8,
    name: "Nicole C.",
    imageSrc: "/images/team/Nicole.png",
    imageAlt: "Portrait of Nicole C.",
    bio: "Nicole is a Certified STOTT and BodyTree Pilates Reformer Instructor with over 13 years of experience in movement, including Yoga, Pilates and Aerial Hammock. She is passionate about helping people move smarter, build strength, and feel confident in their bodies without letting aches, pains, or previous injuries hold them back. Her teaching blends safe, evidence-based Pilates techniques with a focus on precision, alignment, and mindful movement. Nicole guides clients to improve stability, strengthen their bodies, and move with awareness. When she is not on the reformer, you will often find Nicole experimenting with new moves in Brazilian Jiu-Jitsu, constantly learning new techniques and keeping her own movement practice sharp.",
  },
  {
    id: 9,
    name: "Royis P.",
    imageSrc: "/images/team/Royis.png",
    imageAlt: "Portrait of Royis P.",
    bio: "Royis's journey into health and wellness began in 2006, when she discovered yoga as a way to balance her physical and mental well-being. In 2008, she traveled across India to study traditional Yoga Therapy and Kundalini, experiences that deepened her understanding of mindful movement and body awareness. Over the years, she has explored complementary practices such as belly dance, which enhanced her strength, mobility, and movement intuition. In 2024, she expanded her expertise through BodyTree Pilates training, adding a modern and precise tool to support alignment, flexibility, and functional strength. Royis designs every session to refine movement, build strength, and support lasting well-being, tailored for every body and every goal. Beyond the studio, she remains a lifelong student of movement and philosophy, continually exploring ways to integrate mind, body, and spirit into her practice and teaching.",
  },
];

export default function TeamPage() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-16">
      <div className="text-center mb-10 md:mb-14">
        <h1 className="font-serif font-semibold text-4xl md:text-5xl lg:text-6xl text-[#80978b] mb-4">
          Team
        </h1>
        <p className="text-sm md:text-base text-[#656565] max-w-4xl mx-auto leading-relaxed">
          Our teachers are carefully selected and internationally certified to
          deliver high-quality classes through intelligent cueing, creative
          sequencing, and subtle adjustments to help you progress safely.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {INSTRUCTOR_PROFILES.map((profile) => (
          <article
            key={profile.id}
            className="overflow-hidden rounded-[28px] border border-[#e7e8e1] bg-[#fafaf5] shadow-sm"
          >
            <div className="overflow-hidden bg-[#f3f3ed]">
              <Image
                src={profile.imageSrc}
                alt={profile.imageAlt}
                width={960}
                height={640}
                className="w-full aspect-[3/2] object-cover object-top"
              />
            </div>

            <div className="space-y-4 p-6">
              <h2 className="font-display text-[20px] font-bold text-[#656565]">
                {profile.name}
              </h2>
              <p className="text-sm text-[#656565] leading-7">{profile.bio}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
