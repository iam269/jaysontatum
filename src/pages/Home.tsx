import { StatCard } from "@/components/StatCard"
import { HighlightCard } from "@/components/HighlightCard"
import { motion } from "framer-motion"
import { Award, Trophy, Star, Target, Zap, Heart, Instagram, Facebook, Twitter } from "lucide-react"
import bostonCelticsLogo from "@/assets/Boston-Celtics-logo.png"

export default function Home() {
  const heroImageUrl = "https://d2xsxph8kpxj0f.cloudfront.net/310519663338820601/MVDTPFXdUZZtNZXg2ZdQ4j/jayson-tatum-hero-X28dL9bhbyzdwMUALe3d2K.webp"
  const portraitImageUrl = "https://d2xsxph8kpxj0f.cloudfront.net/310519663338820601/MVDTPFXdUZZtNZXg2ZdQ4j/jayson-tatum-portrait-L4Zf8vxF29Ytauy83BPmX8.webp"
  const championshipImageUrl = "https://d2xsxph8kpxj0f.cloudfront.net/310519663338820601/MVDTPFXdUZZtNZXg2ZdQ4j/celtics-championship-QNtdpezpNupAPxE2apvX9m.webp"

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-white font-bold text-sm">JT</span>
            </div>
            <span className="font-display font-bold text-lg">Jayson Tatum</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#stats" className="text-sm font-medium hover:text-primary transition-colors">
              Stats
            </a>
            <a href="#highlights" className="text-sm font-medium hover:text-primary transition-colors">
              Highlights
            </a>
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-16 pb-20 overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col justify-center"
            >
              <div className="mb-4">
                <span className="text-sm md:text-base font-semibold text-primary uppercase tracking-widest">
                  NBA Champion • Boston Celtics
                </span>
              </div>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight bg-gradient-to-r from-green-600 via-green-500 to-green-700 bg-clip-text text-transparent">
                Jayson Tatum
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-lg">
                Elite scorer, versatile defender, and leader of the Boston Celtics. A generational talent shaping the future of basketball.
              </p>
              <div className="flex flex-wrap gap-4 md:gap-6">
                <div className="flex items-center gap-2 text-sm md:text-base font-medium">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                  <span>6'8" | 210 lbs</span>
                </div>
                <div className="flex items-center gap-2 text-sm md:text-base font-medium">
                  <div className="w-3 h-3 rounded-full bg-secondary" />
                  <span>Born March 3, 1998</span>
                </div>
                <div className="flex items-center gap-2 text-sm md:text-base font-medium">
                  <div className="w-3 h-3 rounded-full bg-accent" />
                  <span>Duke University</span>
                </div>
              </div>
            </motion.div>

            {/* Boston Celtics Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center justify-center"
            >
              <img 
                src={bostonCelticsLogo} 
                alt="Boston Celtics Logo" 
                className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain drop-shadow-2xl"
              />
            </motion.div>
          </div>
        </div>

        {/* Diagonal Divider */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-white" />
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-20 bg-white relative">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="font-display text-4xl font-bold mb-4">Career Statistics</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Jayson Tatum's impressive career averages demonstrate his elite scoring ability and all-around game.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard value={23.5} label="Points Per Game" icon={<Target />} delay={0} />
            <StatCard value={7.3} label="Rebounds Per Game" icon={<Zap />} delay={0.1} />
            <StatCard value={3.8} label="Assists Per Game" icon={<Star />} delay={0.2} />
            <StatCard value={46} label="Field Goal %" icon={<Trophy />} delay={0.3} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <StatCard value={6} label="NBA All-Star Selections" icon={<Award />} delay={0.1} />
            <StatCard value={1} label="NBA Championship" icon={<Trophy />} delay={0.2} />
            <StatCard value={5} label="All-NBA Team Selections" icon={<Heart />} delay={0.3} />
          </div>
        </div>

        {/* Diagonal Divider */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-primary/5 clip-path-diagonal" />
      </section>

      {/* Highlights Section */}
      <section id="highlights" className="py-20 bg-primary/5">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="font-display text-4xl font-bold mb-4">Career Highlights</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Key achievements and milestones that define Jayson Tatum's remarkable NBA journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <HighlightCard
              year="2024"
              title="NBA Championship"
              description="Led the Boston Celtics to their 18th NBA championship, cementing his legacy as a champion."
              icon={<Trophy className="text-secondary" />}
              image={championshipImageUrl}
              delay={0}
            />
            <HighlightCard
              year="2023"
              title="All-Star Game MVP"
              description="Scored 55 points in the 2023 NBA All-Star Game, setting a new All-Star record."
              icon={<Star className="text-secondary" />}
              delay={0.1}
            />
            <HighlightCard
              year="2022"
              title="Eastern Conference Finals MVP"
              description="Earned the inaugural Larry Bird Eastern Conference Finals MVP award with dominant performances."
              icon={<Award className="text-secondary" />}
              delay={0.2}
            />
            <HighlightCard
              year="2020"
              title="NBA All-Star Debut"
              description="Selected to the NBA All-Star Game in his third season, joining an elite group of players."
              icon={<Zap className="text-secondary" />}
              delay={0.3}
            />
            <HighlightCard
              year="2017"
              title="NBA Draft"
              description="Selected 3rd overall by the Boston Celtics out of Duke University, beginning his NBA journey."
              icon={<Target className="text-secondary" />}
              delay={0.4}
            />
            <HighlightCard
              year="2020 & 2024"
              title="Olympic Gold Medalist"
              description="Represented Team USA and won gold medals at the Tokyo and Paris Olympic Games."
              icon={<Heart className="text-secondary" />}
              delay={0.5}
            />
          </div>
        </div>

        {/* Diagonal Divider */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-primary/5 to-white" />
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src={portraitImageUrl}
                alt="Jayson Tatum"
                className="w-full rounded-xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-4xl font-bold mb-6">About Jayson</h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  Jayson Christopher Tatum Sr. was born on March 3, 1998, in St. Louis, Missouri. He played college basketball at Duke University, where he showcased his elite scoring ability and versatility.
                </p>
                <p className="text-lg leading-relaxed">
                  Selected 3rd overall in the 2017 NBA Draft by the Boston Celtics, Tatum has quickly established himself as one of the league's premier players. His combination of size, skill, and athleticism makes him a nightmare matchup for opposing defenses.
                </p>
                <p className="text-lg leading-relaxed">
                  Known for his signature "sidestep 3" and clutch performances, Tatum has become the face of the Celtics franchise. With six All-Star selections, multiple All-NBA honors, and an NBA championship, he continues to elevate his game and lead his team to success.
                </p>
              </div>

              <div className="mt-8 p-6 bg-primary/5 rounded-lg border border-primary/20">
                <h3 className="font-display font-bold text-lg mb-4">Playing Style</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    <span>Elite scorer with range from anywhere on the court</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    <span>Versatile defender capable of guarding multiple positions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    <span>Strong rebounder for his position with excellent athleticism</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    <span>Clutch performer in high-pressure moments</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-display font-bold mb-4">Jayson Tatum</h3>
              <p className="text-white/70 text-sm">NBA Champion • Boston Celtics • Elite Scorer</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>
                  <a href="#stats" className="hover:text-white transition-colors">
                    Stats
                  </a>
                </li>
                <li>
                  <a href="#highlights" className="hover:text-white transition-colors">
                    Highlights
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow</h4>
              <div className="flex gap-4">
                <a 
                  href="https://instagram.com/jaytatum0" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="https://twitter.com/JayTatum0" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8">
            <p className="text-center text-sm text-white/70">
              © 2026 Jayson Tatum. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
