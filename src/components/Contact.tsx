import { useState } from 'react';
import { Section } from './ui/Section';
import { Card } from './ui/Card';
import { PROFILE } from '@/data/profile';
import { Copy, Check, Mail, Send } from 'lucide-react';

export const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Section id="contact" className="mb-20">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
          <p className="text-muted-foreground text-lg mb-8">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>

          <div className="space-y-6">
            <Card className="flex items-center justify-between p-4">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Email me at</div>
                  <div className="font-medium">{PROFILE.email}</div>
                </div>
              </div>
              <button
                onClick={copyEmail}
                className="p-2 hover:bg-accent rounded-full transition-colors"
                title="Copy email"
              >
                {copied ? (
                  <Check className="h-5 w-5 text-green-500" />
                ) : (
                  <Copy className="h-5 w-5 text-muted-foreground" />
                )}
              </button>
            </Card>
          </div>
        </div>

        <Card className="p-8">
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">Name</label>
                <input 
                  id="name"
                  type="text" 
                  className="w-full px-3 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <input 
                  id="email"
                  type="email" 
                  className="w-full px-3 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">Message</label>
              <textarea 
                id="message"
                rows={4}
                className="w-full px-3 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                placeholder="Hello, I'd like to discuss..."
              />
            </div>
            <button 
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
            >
              Send Message <Send className="h-4 w-4" />
            </button>
          </form>
        </Card>
      </div>
    </Section>
  );
};
