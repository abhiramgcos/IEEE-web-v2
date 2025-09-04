import Image from 'next/image';
import Link from 'next/link';
import { Linkedin, Instagram, Facebook, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-background text-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center gap-12 flex-wrap mb-8">
          <Image
            src="/image/cas.png"
            alt="CAS Logo"
            width={200}
            height={60}
            data-ai-hint="CAS society logo"
          />
          <Image
            src="/image/iee-prc-logo.png"
            alt="IEEE Logo"
            width={150}
            height={60}
            data-ai-hint="IEEE logo"
          />
        </div>
        <div className="flex justify-center items-center gap-6 mb-8">
          <Link href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin size={24} /></Link>
          <Link href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors"><Instagram size={24} /></Link>
          <Link href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors"><Facebook size={24} /></Link>
          <Link href="#" aria-label="Email" className="text-muted-foreground hover:text-primary transition-colors"><Mail size={24} /></Link>
        </div>
        <div className="text-center text-muted-foreground text-sm">
          <p>© 2024 IEEE SB PRC. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;