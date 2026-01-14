import { motion } from 'framer-motion';

import { Instagram, Heart, MessageCircle, Users } from 'lucide-react';

import GlowButton from './GlowButton';



export default function Community() {

  const posts = [

    {

      image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&q=80',

      likes: 342,

      comments: 28,

      caption: 'Cosmic energy alignment meditation',

    },

    {

      image: 'https://images.unsplash.com/photo-1532798442725-41036acc7489?w=800&q=80',

      likes: 289,

      comments: 19,

      caption: 'Crystal healing for abundance',

    },

    {

      image: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=800&q=80',

      likes: 412,

      comments: 34,

      caption: 'Mystical tarot guidance session',

    },

    {

      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80',

      likes: 376,

      comments: 22,

      caption: 'Sacred space transformation',

    },

  ];



  return (

    <section id="community" className="py-24 relative">

      <div className="container mx-auto px-4 lg:px-8">

        <motion.div

          className="text-center mb-16"

          initial={{ opacity: 0, y: 20 }}

          whileInView={{ opacity: 1, y: 0 }}

          viewport={{ once: true }}

        >

          <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">

            Join Our <span className="text-neon text-glow-purple">High-Vibe Community</span>

          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">

            Connect with like-minded souls on their spiritual journey. Share experiences,

            learn from each other, and grow together.

          </p>

          <div className="flex items-center justify-center gap-2">

            <Instagram className="w-6 h-6 text-neon" />

            <span className="text-lg font-semibold text-gray-300">@reiki_spiritual_healer</span>

          </div>

        </motion.div>



        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">

          {posts.map((post, index) => (

            <motion.div

              key={index}

              className="relative group cursor-pointer rounded-xl overflow-hidden aspect-square"

              initial={{ opacity: 0, scale: 0.9 }}

              whileInView={{ opacity: 1, scale: 1 }}

              viewport={{ once: true }}

              transition={{ delay: index * 0.1 }}

              whileHover={{ scale: 1.05 }}

            >

              <img

                src={post.image}

                alt={post.caption}

                className="w-full h-full object-cover"

              />



              <motion.div

                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4"

              >

                <div className="flex items-center gap-4 text-white mb-2">

                  <div className="flex items-center gap-1">

                    <Heart className="w-5 h-5 fill-white" />

                    <span className="font-semibold">{post.likes}</span>

                  </div>

                  <div className="flex items-center gap-1">

                    <MessageCircle className="w-5 h-5" />

                    <span className="font-semibold">{post.comments}</span>

                  </div>

                </div>

                <p className="text-sm text-gray-200">{post.caption}</p>

              </motion.div>



              <div className="absolute top-3 right-3 glass-strong rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">

                <Instagram className="w-5 h-5 text-neon" />

              </div>

            </motion.div>

          ))}

        </div>



        <motion.div

          className="glass-strong rounded-3xl p-8 md:p-12 text-center"

          initial={{ opacity: 0, y: 20 }}

          whileInView={{ opacity: 1, y: 0 }}

          viewport={{ once: true }}

        >

          <Users className="w-16 h-16 text-gold mx-auto mb-6" />

          <h3 className="text-3xl font-display font-bold mb-4">

            Ready to Transform Your Life?

          </h3>

          <p className="text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">

            Join thousands of seekers who have discovered their true path through our guidance.

            Your spiritual awakening is just one conversation away.

          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <GlowButton

              href="https://wa.me/918218803183?text=Hi%2C%20I%27m%20ready%20to%20begin%20my%20spiritual%20journey"

              size="lg"

            >

              <MessageCircle className="w-5 h-5" />

              Start Your Journey

            </GlowButton>

            <GlowButton

              href="https://www.instagram.com/reiki_spiritual_healer?igsh=MWtzZjI3cDk4Mzd3OA=="

              variant="purple"

              size="lg"

            >

              <Instagram className="w-5 h-5" />

              Follow on Instagram

            </GlowButton>

          </div>

        </motion.div>

      </div>

    </section>

  );

}

