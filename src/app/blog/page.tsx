// src/app/blog/page.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function BlogPage() {
  const pathname = usePathname();
  const currentSegment = pathname?.split('/').pop() || '';

  return (
    <div className="blog-container">

      {/* Two-Column Content Layout */}
      <main className="content-container">
        {/* Left Column (60%) */}
        <div className="content-left">
        <div className="welcome-row">
            <h2>Thanks for stopping by!</h2>
            {/* <div className="gif-container">
                <Image
                src="/images/welcome.gif"
                alt="Excited animation"
                width={100}
                height={50}
                unoptimized={true}
                priority
                />
            </div> */}
            </div>


            <div className="home-description">
                <p>
                I am Shazzad Hossain Kanon, a passionate Native Android and Flutter app developer with a proven track record of building highly-performed, innovative mobile applications. From crafting native Android solutions with Kotlin and Java to creating cross-platform experiences with Flutter, I thrive on delivering apps that are not only functional but transformative.
                </p>
                <p>
                My passion for mobile development drives me to push the boundaries of what's possible, seamlessly integrating cutting-edge technologies like Socket.IO, webRTC, and Firebase to create intuitive, real-time user experiences. My technical skills span a broad range of technologies, including Hilt, RxJava, Coroutine, Room, Retrofit, Firebase, webRTC, Socket.IO, and more.
                </p>
                <p>
                I am well-versed in popular architectural frameworks like MVVM, GETX, Riverpod, and BLoC.
                </p>
                <p>
                Throughout my service, I have successfully developed and deployed copious applications to the Play Store, including telemedicine platforms for remote consultations, veterinary communication tools, and digital student management portals, live video streaming, real-time chat, and online payment systems into user-friendly mobile solutions.
                </p>
                <p>
                My additional resolution lies in cutting-edge research fields, particularly in Natural Language Processing (NLP), Machine Learning (ML), and Generative Artificial Intelligence (Gen-AI). I enjoy exploring innovative solutions that leverage technology to enhance user experiences and solve real-world problems.
                </p>
            </div>
        
        </div>

        {/* Right Column (40%) */}
        <div className="content-right">
          <div className="image-container">
            <Image
              src="/images/shk.jpg"
              alt="Sazzad H Kanon"
              width={400}
              height={400}
              className="author-image"
            />
          </div>

          <div className="quote-container">
            <div className="quote-mark">“</div>
            <p className="quote-text">
              Life is never fair, and perhaps it is a good thing for most of us that it is not.
            </p>
            <div className="quote-author">- Oscar Wilde</div>
          </div>
          
        </div>
      </main>
    </div>
  );
}