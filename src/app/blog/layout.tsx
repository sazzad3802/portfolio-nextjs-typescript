// src/app/(main)/layout.tsx
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';
import Image from 'next/image';

export default function MainLayout({ children }: { children: ReactNode }) {
    const pathname = usePathname();
  
    // Extract the current segment from the path
    const currentSegment = pathname?.split('/').pop() || '';
    const formattedSegment = currentSegment 
        ? currentSegment.charAt(0).toUpperCase() + currentSegment.slice(1)
        : 'Home';
    
    return (
        <div className="container">
            <div className="header-container">
                <header className="blog-header">
                    <div className="blog-title-container">
                        <h1 className="blog-title">Shazzad Hossain Kanon</h1>
                        <p className="blog-subtitle">Software Engineer</p>
                    </div>
                    
                    {/* Horizontal Navigation */}
                    <nav className="horizontal-nav">
                        <Link href="/blog" className={currentSegment === 'blog' ? 'active' : ''}>HOME</Link>
                        <Link href="/blog/academic" className={currentSegment === 'academic' ? 'active' : ''}>ACADEMIC</Link>
                        <Link href="/blog/highlights" className={currentSegment === 'highlights' ? 'active' : ''}>HIGHLIGHTS</Link>
                        <Link href="/blog/projects" className={currentSegment === 'projects' ? 'active' : ''}>PROJECTS</Link>
                        <Link href="/blog/about" className={currentSegment === 'about' ? 'active' : ''}>ABOUT</Link>
                        <div className="search-icon">
                            <Image 
                                src="/search-icon.svg" 
                                alt="Search"
                                width={20}
                                height={20}
                            />
                        </div>
                    </nav>
                </header>
            </div>

            <main className="main-content">
                {children}
            </main>
        </div>
    );
}