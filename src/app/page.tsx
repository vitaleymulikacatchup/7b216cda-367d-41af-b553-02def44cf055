"use client";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboardCorners from '@/components/sections/hero/HeroBillboardCorners';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterBase from '@/components/sections/footer/FooterBase';
import { BookOpen, Brain, Heart, PawPrint, Smile, Sparkles } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="large"
      sizing="large"
      background="aurora"
      cardStyle="gradient-bordered"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="radial-glow"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="My Dog"
          navItems={[
            { name: "Home", id: "home" },
            { name: "About", id: "about" },
            { name: "Gallery", id: "gallery" },
            { name: "Contact", id: "contact" }
          ]}
          button={{
            text: "Get Started",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardCorners
          title="Pawsitively Amazing Dogs"
          description="Discover everything you need to know about caring for, training, and loving your furry companion"
          tag="Welcome to Dog Paradise"
          tagIcon={Heart}
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1764335478938-ypwyv8hb.jpg",
              imageAlt: "Happy brown dog playing"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1764335480127-khiqxiae.jpg",
              imageAlt: "Cute puppy portrait"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1764335481183-37igc4i4.jpg",
              imageAlt: "Dog running in park"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1764335482312-pxvrxjxp.jpg",
              imageAlt: "Friendly dog smiling"
            }
          ]}
          buttons={[
            {
              text: "Learn More",
              href: "about"
            },
            {
              text: "See Gallery",
              href: "gallery"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="About Your Dog"
          description="Dogs are more than pets - they are loyal companions that bring joy, love, and endless moments of happiness into our lives"
          tag="Our Mission"
          tagIcon={PawPrint}
          bulletPoints={[
            {
              title: "Loyal Companions",
              description: "Dogs form deep bonds with their owners and provide unconditional love",
              icon: Heart
            },
            {
              title: "Playful Spirits",
              description: "Their playful nature brings joy and laughter to every day",
              icon: Smile
            },
            {
              title: "Smart Learners",
              description: "Dogs are intelligent and eager to learn new commands and tricks",
              icon: Brain
            },
            {
              title: "Natural Healers",
              description: "The companionship of a dog can reduce stress and improve mental health",
              icon: Sparkles
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1764335483438-f37jdngc.jpg"
          imageAlt="Dog with family outdoor"
          imagePosition="right"
          textboxLayout="default"
          buttons={[
            {
              text: "Learn More",
              href: "#"
            }
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardThree
          title="Essential Dog Care Tips"
          description="Everything your dog needs to thrive and be happy"
          tag="Expert Guidance"
          tagIcon={BookOpen}
          textboxLayout="default"
          features={[
            {
              id: "01",
              title: "Training Basics",
              description: "Learn positive reinforcement techniques to train your dog effectively and build a strong bond",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1764335484725-ugo01d44.jpg",
              imageAlt: "Dog training session"
            },
            {
              id: "02",
              title: "Health & Wellness",
              description: "Keep your dog healthy with proper nutrition, exercise, and regular veterinary checkups",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1764335485804-5yk2qtj0.jpg",
              imageAlt: "Healthy dog playing"
            },
            {
              id: "03",
              title: "Grooming & Care",
              description: "Maintain your dog's coat, nails, and overall hygiene for a healthy, happy pet",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1764335487018-632ddun8.jpg",
              imageAlt: "Dog grooming care"
            },
            {
              id: "04",
              title: "Happiness First",
              description: "Create a loving environment where your dog feels safe, loved, and appreciated every day",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1764335488001-elvu6huv.jpg",
              imageAlt: "Happy dog playing"
            }
          ]}
          gridVariant="two-columns-alternating-heights"
          animationType="slide-up"
          buttons={[]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="Love From Dog Owners"
          description="Hear from people who have experienced the joy of dog companionship"
          tag="Customer Stories"
          textboxLayout="default"
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Dog Parent",
              testimonial: "My dog has brought so much happiness into my life. The care tips on this site have helped me become a better owner!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1764335489034-2yi9cro3.jpg",
              imageAlt: "Sarah with her dog"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Family Dog Owner",
              testimonial: "Our family adopted our dog thanks to the guidance from this amazing resource. We couldn't imagine life without him now!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1764335490175-7lp94pxu.jpg",
              imageAlt: "Michael's family with dog"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "First-Time Dog Owner",
              testimonial: "As a new dog owner, this site gave me all the information I needed to raise a healthy and happy puppy.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1764335491433-nhn4eho6.jpg",
              imageAlt: "Emily hugging her dog"
            },
            {
              id: "4",
              name: "David Kim",
              role: "Senior Dog Enthusiast",
              testimonial: "The training techniques work perfectly with my senior dog. He's learned so many new tricks and loves the attention!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1764335492438-icg57m1x.jpg",
              imageAlt: "David with his dog"
            }
          ]}
          animationType="slide-up"
          carouselMode="buttons"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Get in Touch"
          description="Have questions about dog care? We would love to hear from you and help you on your dog parenting journey"
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Your Email",
              required: true
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your dog or ask your questions...",
            rows: 5,
            required: true
          }}
          buttonText="Send Message"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="My Dog"
          copyrightText="© 2025 | My Dog. All rights reserved."
          columns={[
            {
              title: "Resources",
              items: [
                {
                  label: "Dog Training Guide",
                  href: "#"
                },
                {
                  label: "Health Tips",
                  href: "#"
                },
                {
                  label: "Nutrition Info",
                  href: "#"
                }
              ]
            },
            {
              title: "Company",
              items: [
                {
                  label: "About Us",
                  href: "about"
                },
                {
                  label: "Contact",
                  href: "contact"
                },
                {
                  label: "Gallery",
                  href: "gallery"
                }
              ]
            },
            {
              title: "Legal",
              items: [
                {
                  label: "Privacy Policy",
                  href: "#"
                },
                {
                  label: "Terms of Service",
                  href: "#"
                }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}