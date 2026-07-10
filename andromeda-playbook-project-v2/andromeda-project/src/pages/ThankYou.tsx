import { CheckCircle2, Bot, MessageSquare, ArrowRight, CalendarCheck, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const ThankYou = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Purchase', {value: 27.00, currency: 'USD'});
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img 
              src="https://assets.cdn.filesafe.space/MFQB1Wfynb8uXgZL0AzQ/media/6a3ee4375aefbd076ba618be.png" 
              alt="CV Logo" 
              className="h-10 w-10 object-contain"
            />
            <span className="font-bold text-xl tracking-tight">AdPlaybook</span>
          </div>
          <Button asChild variant="ghost" className="hidden sm:flex text-muted-foreground hover:text-foreground">
            <Link to="/">
              <Home className="mr-2 h-4 w-4" /> Back to Home
            </Link>
          </Button>
        </div>
      </nav>

      {/* Success Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-500/10 via-background to-background -z-10"></div>
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <div className="mx-auto w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mb-8">
            <CheckCircle2 className="h-12 w-12 text-green-500" />
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            You're In! <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-200">Order Confirmed.</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Thank you for your purchase. We've just sent an email with your receipt and the secure link to download <strong>The Andromeda Ad Creation Playbook</strong>.
          </p>
          <div className="p-8 border border-border bg-card rounded-2xl max-w-xl mx-auto shadow-xl relative overflow-hidden">
            <p className="text-sm text-muted-foreground text-center">
              <strong>Next Step:</strong> Check your inbox (and spam/promotions folder) immediately for an email containing your secure download link.
            </p>
          </div>
        </div>
      </section>

      {/* Upsell / AI Tools Section */}
      <section className="py-24 bg-card border-t border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent -z-10"></div>
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Scale Even Faster with <span className="text-primary">Cinematic Visions AI</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Getting the leads is step one. Closing them is step two. Our AI tools ensure you never miss opportunities to make money and never lose a customer again.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Demo UI */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-yellow-400 rounded-2xl blur opacity-20"></div>
              <Card className="relative bg-background border-border overflow-hidden shadow-2xl">
                <div className="border-b border-border bg-secondary/50 p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <Bot className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-sm">CV AI Assistant</p>
                      <p className="text-xs text-green-400 flex items-center gap-1">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        Active & Monitoring
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 space-y-6">
                  {/* Inbound Message Event */}
                  <div className="flex gap-4 flex-row-reverse">
                    <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center flex-shrink-0 mt-1">
                      <MessageSquare className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div className="bg-primary text-primary-foreground rounded-2xl rounded-tr-none p-4 w-[85%]">
                      <p className="text-sm">Hey! I saw your ad and wanted to get more info on pricing. Are you available for a quick chat?</p>
                    </div>
                  </div>

                  {/* AI Intervention */}
                  <div className="flex gap-4">
                    <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <Bot className="h-4 w-4 text-primary" />
                    </div>
                    <div className="bg-secondary/50 rounded-2xl rounded-tl-none p-4 w-full border border-border">
                      <p className="text-sm">Hi there! I'm the AI assistant for the business. I can definitely help with pricing. Would you like to schedule a quick 15-min discovery call to go over the options?</p>
                    </div>
                  </div>

                  {/* Customer Reply */}
                  <div className="flex gap-4 flex-row-reverse">
                    <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center flex-shrink-0 mt-1">
                      <MessageSquare className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div className="bg-primary text-primary-foreground rounded-2xl rounded-tr-none p-4 w-[85%]">
                      <p className="text-sm">Yes, tomorrow morning works for me.</p>
                    </div>
                  </div>

                  {/* AI Resolution */}
                  <div className="flex gap-4">
                    <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <Bot className="h-4 w-4 text-primary" />
                    </div>
                    <div className="bg-secondary/50 rounded-2xl rounded-tl-none p-4 w-full border border-border space-y-3">
                      <p className="text-sm">Perfect! I've gone ahead and booked a 15-min discovery call for you tomorrow at 10 AM.</p>
                      <div className="bg-background/50 border border-border p-3 rounded-lg flex items-center gap-3">
                        <CalendarCheck className="h-8 w-8 text-green-500" />
                        <div>
                          <p className="text-sm font-bold">Meeting Confirmed</p>
                          <p className="text-xs text-muted-foreground">Tomorrow, 10:00 AM</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Omnichannel AI ChatBots</h3>
                    <p className="text-muted-foreground">Deploy intelligent ChatBots across your Social Media, Website, and SMS to instantly engage prospects and answer questions 24/7.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Bot className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Voice AI Assistants</h3>
                    <p className="text-muted-foreground">Never miss a beat. Our Voice AI handles inbound and outbound calls, booking appointments and qualifying leads when you can't get to the phone.</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-border space-y-5">
                <p className="text-lg font-medium leading-relaxed">
                  Click the link below for an awesome, interactive demonstration to see exactly how these bots will work for <span className="text-primary font-bold">your company</span> in just seconds!
                </p>
                <a 
                  href="https://cinematicvisions.co/home" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 w-full sm:w-auto text-lg shadow-[0_0_20px_rgba(255,165,0,0.2)]"
                >
                  See Your Live Demo <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border bg-background text-center text-muted-foreground">
        <div className="container mx-auto px-4">
          <p>© {new Date().getFullYear()} Cinematic Visions. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ThankYou;
